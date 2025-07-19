/**
 * Astro Middleware for Security Headers
 * Adds proper security headers to fix browser console warnings
 */

export async function onRequest(context, next) {
  // Process the request first
  const response = await next();
  
  // Set security headers to fix console warnings
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Content Security Policy - allow necessary resources
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https:",
    "connect-src 'self' https:",
    "media-src 'self'",
    "object-src 'none'",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'"
  ].join('; ');
  
  response.headers.set('Content-Security-Policy', csp);
  
  // Permissions Policy (replaces deprecated Feature Policy)
  const permissionsPolicy = [
    'clipboard-read=self',
    'clipboard-write=self',
    'geolocation=self',
    'microphone=()',
    'camera=()',
    'payment=()',
    'usb=()',
    'interest-cohort=()'
  ].join(', ');
  
  response.headers.set('Permissions-Policy', permissionsPolicy);
  
  return response;
}