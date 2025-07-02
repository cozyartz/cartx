globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, d as createAstro, r as renderTemplate, a as addAttribute, b as renderHead, e as renderComponent } from '../chunks/astro/server_1s_Ef8Aj.mjs';
import { $ as $$SEO } from '../chunks/SEO_BDRVWaHr.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
async function getStaticPaths() {
  return Object.keys(businessConfigs).map((business) => ({
    params: { business }
  }));
}
const $$business = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$business;
  const businessConfigs2 = {
    grillz: {
      title: "Grillz Food Truck - Gourmet Street Food in Battle Creek",
      description: "Premium gourmet street food from Battle Creek's favorite food truck. Fresh ingredients, bold flavors, and authentic recipes served daily across Michigan.",
      businessName: "Grillz Food Truck",
      phone: "(269) 261-0069",
      address: {
        street: "Mobile Food Truck",
        city: "Battle Creek",
        state: "Michigan",
        zip: "49015"
      },
      geo: {
        latitude: 42.3211,
        longitude: -85.1797
      },
      hours: [
        "Monday: 11:00 AM - 8:00 PM",
        "Tuesday: 11:00 AM - 8:00 PM",
        "Wednesday: 11:00 AM - 8:00 PM",
        "Thursday: 11:00 AM - 8:00 PM",
        "Friday: 11:00 AM - 9:00 PM",
        "Saturday: 10:00 AM - 9:00 PM",
        "Sunday: 12:00 PM - 7:00 PM"
      ],
      services: [
        "Gourmet Burgers & Sandwiches",
        "Loaded Fries & Nachos",
        "BBQ Platters",
        "Fresh Salads & Wraps",
        "Catering Services",
        "Private Event Bookings"
      ],
      heroTitle: "Gourmet Street Food",
      heroSubtitle: "Battle Creek's premier food truck serving fresh, bold flavors",
      ctaText: "Find Our Location",
      ctaPhone: "(269) 261-0069",
      businessType: "Food Truck",
      keywords: ["food truck Battle Creek", "gourmet street food Michigan", "mobile catering", "BBQ food truck"]
    },
    salsas: {
      title: "Salsas Mexican Restaurant - Authentic Mexican Cuisine",
      description: "Authentic Mexican restaurant serving traditional dishes, fresh salsas, and margaritas in Battle Creek, Michigan. Family recipes with genuine flavors.",
      businessName: "Salsas Mexican Restaurant",
      phone: "(269) 555-0147",
      address: {
        street: "789 Mexican Way",
        city: "Battle Creek",
        state: "Michigan",
        zip: "49015"
      },
      geo: {
        latitude: 42.3211,
        longitude: -85.1797
      },
      hours: [
        "Monday: 11:00 AM - 9:00 PM",
        "Tuesday: 11:00 AM - 9:00 PM",
        "Wednesday: 11:00 AM - 9:00 PM",
        "Thursday: 11:00 AM - 9:00 PM",
        "Friday: 11:00 AM - 10:00 PM",
        "Saturday: 11:00 AM - 10:00 PM",
        "Sunday: 12:00 PM - 8:00 PM"
      ],
      services: [
        "Authentic Tacos & Burritos",
        "Fresh Guacamole & Salsas",
        "Fajitas & Enchiladas",
        "Margaritas & Mexican Drinks",
        "Catering & Party Platters",
        "Takeout & Delivery"
      ],
      heroTitle: "Authentic Mexican Cuisine",
      heroSubtitle: "Traditional flavors and fresh ingredients in Battle Creek",
      ctaText: "Order Now",
      ctaPhone: "(269) 555-0147",
      businessType: "Mexican Restaurant",
      keywords: ["Mexican restaurant Battle Creek", "authentic tacos Michigan", "margaritas", "Mexican catering"]
    }
  };
  const { business } = Astro2.params;
  const config = businessConfigs2[business];
  if (!config) {
    return Astro2.redirect("/404");
  }
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head>', "", '</head> <body class="bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-gray-100"> <div class="min-h-screen"> <!-- Header --> <header class="bg-white dark:bg-dark-surface shadow-sm"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center py-6"> <div class="flex items-center"> <h1 class="text-2xl font-bold text-accent-red">', '</h1> </div> <div class="hidden md:flex items-center space-x-6"> <a href="#services" class="text-gray-600 dark:text-gray-300 hover:text-accent-red transition-colors">Services</a> <a href="#about" class="text-gray-600 dark:text-gray-300 hover:text-accent-red transition-colors">About</a> <a href="#contact" class="text-gray-600 dark:text-gray-300 hover:text-accent-red transition-colors">Contact</a> <a', ' class="bg-accent-red text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium">\nCall Now\n</a> </div> </div> </div> </header> <!-- Hero Section --> <section class="bg-gradient-to-r from-accent-red to-accent-orange text-white py-20"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 class="text-4xl md:text-6xl font-bold mb-6">', '</h2> <p class="text-xl md:text-2xl mb-8 opacity-90">', '</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a', ' class="bg-white text-accent-red px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"> ', ' </a> <a href="#contact" class="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-accent-red transition-colors">\nGet Quote\n</a> </div> </div> </section> <!-- Services Section --> <section id="services" class="py-20 bg-white dark:bg-dark-surface"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16"> <h3 class="text-3xl md:text-4xl font-bold mb-4">Our Services</h3> <p class="text-xl text-gray-600 dark:text-gray-300">Professional quality you can trust</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> ', ' </div> </div> </section> <!-- About Section --> <section id="about" class="py-20 bg-gray-50 dark:bg-dark-bg"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid lg:grid-cols-2 gap-12 items-center"> <div> <h3 class="text-3xl md:text-4xl font-bold mb-6">About ', `</h3> <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
We're a locally-owned business serving the `, ' community with pride and dedication. \n              Our commitment to quality and customer service sets us apart.\n</p> <div class="space-y-4"> <div class="flex items-center"> <i class="fas fa-map-marker-alt text-accent-red mr-3"></i> <span>', ", ", ", ", " ", '</span> </div> <div class="flex items-center"> <i class="fas fa-phone text-accent-red mr-3"></i> <a', ' class="hover:text-accent-red transition-colors">', '</a> </div> </div> </div> <div class="bg-white dark:bg-dark-surface p-8 rounded-lg shadow-sm"> <h4 class="text-2xl font-bold mb-6">Hours of Operation</h4> <div class="space-y-2"> ', ' </div> </div> </div> </div> </section> <!-- Contact Section --> <section id="contact" class="py-20 bg-white dark:bg-dark-surface"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h3 class="text-3xl md:text-4xl font-bold mb-8">Ready to Get Started?</h3> <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">\nContact us today for a free consultation and quote\n</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a', ' class="bg-accent-red text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors"> <i class="fas fa-phone mr-2"></i>\nCall ', ' </a> <a href="/info" class="bg-gray-100 dark:bg-dark-bg text-gray-900 dark:text-gray-100 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">\nLearn About Our Web Services\n</a> </div> </div> </section> <!-- Footer --> <footer class="bg-gray-900 text-white py-12"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid md:grid-cols-3 gap-8"> <div> <h4 class="text-xl font-bold mb-4">', '</h4> <p class="text-gray-300 mb-4">\nServing ', ', Michigan with quality and excellence.\n</p> <div class="flex space-x-4"> <a href="#" class="text-gray-300 hover:text-white transition-colors"> <i class="fab fa-facebook-f"></i> </a> <a href="#" class="text-gray-300 hover:text-white transition-colors"> <i class="fab fa-instagram"></i> </a> <a href="#" class="text-gray-300 hover:text-white transition-colors"> <i class="fab fa-google"></i> </a> </div> </div> <div> <h4 class="text-xl font-bold mb-4">Contact Info</h4> <div class="space-y-2 text-gray-300"> <div>', "</div> <div>", ", ", " ", "</div> <div> <a", ' class="hover:text-white transition-colors"> ', ' </a> </div> </div> </div> <div> <h4 class="text-xl font-bold mb-4">Services</h4> <ul class="space-y-2 text-gray-300"> ', ' </ul> </div> </div> <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"> <p>&copy; 2024 ', '. Website by <a href="/info" class="text-accent-red hover:text-red-400 transition-colors">Cozyartz Media Group</a>.</p> </div> </div> </footer> </div> <!-- FontAwesome --> <script src="https://kit.fontawesome.com/your-kit-id.js" crossorigin="anonymous"><\/script> </body> </html>'])), renderComponent($$result, "SEO", $$SEO, { "title": config.title, "description": config.description, "businessName": config.businessName, "phone": config.phone, "address": config.address, "geo": config.geo, "hours": config.hours, "services": config.services, "keywords": config.keywords?.join(", "), "businessType": config.businessType }), renderHead(), config.businessName, addAttribute(`tel:${config.phone}`, "href"), config.heroTitle, config.heroSubtitle, addAttribute(`tel:${config.ctaPhone}`, "href"), config.ctaText, config.services.map((service) => renderTemplate`<div class="bg-gray-50 dark:bg-dark-bg p-6 rounded-lg shadow-sm"> <h4 class="text-xl font-semibold mb-3 text-accent-red">${service}</h4> <p class="text-gray-600 dark:text-gray-300">Professional service with attention to detail and customer satisfaction.</p> </div>`), config.businessName, config.address.city, config.address.street, config.address.city, config.address.state, config.address.zip, addAttribute(`tel:${config.phone}`, "href"), config.phone, config.hours.map((hour) => renderTemplate`<div class="flex justify-between border-b border-gray-200 dark:border-dark-border pb-2"> <span class="font-medium">${hour.split(":")[0]}:</span> <span class="text-gray-600 dark:text-gray-300">${hour.split(":").slice(1).join(":")}</span> </div>`), addAttribute(`tel:${config.phone}`, "href"), config.phone, config.businessName, config.address.city, config.address.street, config.address.city, config.address.state, config.address.zip, addAttribute(`tel:${config.phone}`, "href"), config.phone, config.services.slice(0, 4).map((service) => renderTemplate`<li>${service}</li>`), config.businessName);
}, "/Users/cozart-lundin/code/grillz/src/pages/[business].astro", void 0);

const $$file = "/Users/cozart-lundin/code/grillz/src/pages/[business].astro";
const $$url = "/[business]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$business,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
