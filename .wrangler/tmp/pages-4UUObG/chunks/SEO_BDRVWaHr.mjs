globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, d as createAstro, r as renderTemplate, u as unescapeHTML, a as addAttribute } from './astro/server_1s_Ef8Aj.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SEO;
  const {
    title,
    description,
    keywords = "",
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    twitterImage,
    businessName,
    phone,
    email,
    address,
    geo,
    businessType = "LocalBusiness",
    services = [],
    hours = [],
    foundingDate = "2017",
    robotsContent = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    language = "en",
    region = "US"
  } = Astro2.props;
  const defaultOgTitle = ogTitle || title;
  const defaultOgDescription = ogDescription || description;
  const defaultOgImage = ogImage || `${ogUrl || canonical}/og-image.jpg`;
  const defaultTwitterImage = twitterImage || `${ogUrl || canonical}/twitter-image.jpg`;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate(_a || (_a = __template(['<!-- Basic Meta Tags --><meta charset="UTF-8"><title>', '</title><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', '><meta name="keywords"', '><meta name="author"', '><!-- Open Graph Meta Tags --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:type" content="website">', '<meta property="og:image"', '><!-- Twitter Card Meta Tags --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- SEO Meta Tags --><meta name="robots"', '><meta name="googlebot" content="index, follow"><meta name="bingbot" content="index, follow"><meta name="rating" content="General"><meta name="revisit-after" content="1 days"><meta name="distribution" content="global"><meta name="language"', '><meta name="geo.region"', '><meta name="geo.placename"', '><meta name="geo.position"', '><meta name="ICBM"', '><!-- Location and Coverage Meta Tags --><meta name="location"', '><meta name="coverage"', '><meta name="target" content="all"><meta name="audience" content="all"><meta name="web_author"', '><meta name="owner"', ">", "", '<meta name="category" content="business"><meta name="coverage" content="Worldwide"><meta name="distribution" content="Global"><meta name="rating" content="General"><meta name="subject" content="Web Design, Digital Marketing, SEO Services"><meta name="copyright"', "><!-- Canonical URL -->", '<!-- Preload Critical Resources --><link rel="preload" href="https://fonts.googleapis.com/css2?family=Fredoka+One:wght@400&family=Inter:wght@300;400;500;600;700;800;900&display=swap" as="style"><link rel="dns-prefetch" href="//fonts.googleapis.com"><link rel="dns-prefetch" href="//fonts.gstatic.com"><link rel="dns-prefetch" href="//cdnjs.cloudflare.com"><!-- Organization Schema --><script type="application/ld+json">', '<\/script><!-- Website Schema --><script type="application/ld+json">', '<\/script><!-- Local Business Schema --><script type="application/ld+json">', "<\/script>"])), title, addAttribute(description, "content"), addAttribute(keywords, "content"), addAttribute(businessName, "content"), addAttribute(defaultOgTitle, "content"), addAttribute(defaultOgDescription, "content"), ogUrl && renderTemplate`<meta property="og:url"${addAttribute(ogUrl, "content")}>`, addAttribute(defaultOgImage, "content"), addAttribute(defaultOgTitle, "content"), addAttribute(defaultOgDescription, "content"), addAttribute(defaultTwitterImage, "content"), addAttribute(robotsContent, "content"), addAttribute(language.toUpperCase(), "content"), addAttribute(`${region}-${address.state}`, "content"), addAttribute(`${address.city}, ${address.state} ${address.zip}`, "content"), addAttribute(`${geo.latitude};${geo.longitude}`, "content"), addAttribute(`${geo.latitude}, ${geo.longitude}`, "content"), addAttribute(`${address.state}, United States`, "content"), addAttribute(address.state, "content"), addAttribute(businessName, "content"), addAttribute(businessName, "content"), canonical && renderTemplate`<meta name="url"${addAttribute(canonical, "content")}>`, canonical && renderTemplate`<meta name="identifier-URL"${addAttribute(canonical, "content")}>`, addAttribute(businessName, "content"), canonical && renderTemplate`<link rel="canonical"${addAttribute(canonical, "href")}>`, unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": businessName,
    "description": description,
    "url": canonical,
    "telephone": phone,
    "email": email,
    "foundingDate": foundingDate,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.street,
      "addressLocality": address.city,
      "addressRegion": address.state,
      "postalCode": address.zip,
      "addressCountry": address.country || "United States"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": geo.latitude,
      "longitude": geo.longitude
    },
    "areaServed": {
      "@type": "City",
      "name": address.city,
      "containedInPlace": {
        "@type": "State",
        "name": address.state
      }
    },
    "hasOfferCatalog": services.length > 0 ? {
      "@type": "OfferCatalog",
      "name": `${businessName} Services`,
      "itemListElement": services.map((service) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service,
          "provider": {
            "@type": "Organization",
            "name": businessName
          }
        }
      }))
    } : void 0,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": phone,
      "contactType": "customer service",
      "areaServed": address.state,
      "availableLanguage": "English"
    }
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": title,
    "url": canonical,
    "description": description,
    "publisher": {
      "@type": "Organization",
      "name": businessName
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${canonical}?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    },
    "inLanguage": `${language}-${region}`,
    "copyrightYear": currentYear.toString(),
    "copyrightHolder": {
      "@type": "Organization",
      "name": businessName
    }
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": businessType,
    "name": businessName,
    "description": description,
    "url": canonical,
    "telephone": phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.street,
      "addressLocality": address.city,
      "addressRegion": address.state,
      "postalCode": address.zip,
      "addressCountry": address.country || "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": geo.latitude,
      "longitude": geo.longitude
    },
    "openingHours": hours.length > 0 ? hours.map((hour) => {
      const [day, time] = hour.split(": ");
      const dayCode = {
        "Monday": "Mo",
        "Tuesday": "Tu",
        "Wednesday": "We",
        "Thursday": "Th",
        "Friday": "Fr",
        "Saturday": "Sa",
        "Sunday": "Su"
      }[day] || "Mo";
      return `${dayCode} ${time.replace(" AM", "").replace(" PM", "").replace(/(\d+):(\d+)/g, "$1:$2")}`;
    }) : void 0,
    "paymentAccepted": ["Cash", "Credit Card"],
    "currenciesAccepted": "USD",
    "keywords": keywords,
    "servesCuisine": businessType === "Restaurant" ? "Mexican" : void 0,
    "hasMenu": businessType === "Restaurant" || businessType === "FoodTruck" ? canonical + "#menu" : void 0
  })));
}, "/Users/cozart-lundin/code/grillz/src/components/SEO.astro", void 0);

export { $$SEO as $ };
