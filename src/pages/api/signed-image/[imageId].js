const KEY = "YOUR_KEY_FROM_IMAGES_DASHBOARD"; // Replace with your Cloudflare Images signing key
const EXPIRATION = 60 * 60 * 24; // 1 day in seconds

const bufferToHex = (buffer) =>
  [...new Uint8Array(buffer)]
    .map((x) => x.toString(16).padStart(2, "0"))
    .join("");

async function generateSignedUrl(imageDeliveryURL) {
  try {
    const encoder = new TextEncoder();
    const secretKeyData = encoder.encode(KEY);
    const key = await crypto.subtle.importKey(
      "raw",
      secretKeyData,
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );

    // Attach expiration to the URL
    const expiry = Math.floor(Date.now() / 1000) + EXPIRATION;
    imageDeliveryURL.searchParams.set("exp", expiry);

    // Create string to sign
    const stringToSign = imageDeliveryURL.pathname + "?" + imageDeliveryURL.searchParams.toString();

    // Generate signature
    const mac = await crypto.subtle.sign("HMAC", key, encoder.encode(stringToSign));
    const sig = bufferToHex(new Uint8Array(mac).buffer);

    // Attach signature to URL
    imageDeliveryURL.searchParams.set("sig", sig);

    return imageDeliveryURL.toString();
  } catch (error) {
    console.error("Error generating signed URL:", error);
    throw error;
  }
}

export async function GET({ params, request }) {
  try {
    const { imageId } = params;
    
    if (!imageId) {
      return new Response("Missing imageId parameter", { status: 400 });
    }

    // Construct the base image delivery URL
    const accountId = "51826042d6e31c694331efeb1be34123";
    const imageDeliveryURL = new URL(`https://imagedelivery.net/${accountId}/${imageId}/public`);

    const signedUrl = await generateSignedUrl(imageDeliveryURL);
    
    return new Response(signedUrl, {
      headers: { 
        "Content-Type": "text/plain",
        "Cache-Control": "public, max-age=3600" // Cache for 1 hour
      }
    });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(`Error: ${error.message}`, { status: 500 });
  }
}