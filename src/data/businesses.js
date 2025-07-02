// Business configurations for the multi-tenant landing page system
// Supports both subpath development and standalone domain deployment

// Deployment modes
export const DEPLOYMENT_MODES = {
  DEVELOPMENT: 'development',      // cartfullofx.com/grillz
  SUBDOMAIN: 'subdomain',         // grillz.cartfullofx.com  
  STANDALONE: 'standalone'        // grillz.com
};

// Get current deployment mode from environment
export const getCurrentDeploymentMode = () => {
  const basePath = process.env.BASE_PATH || '/';
  
  if (basePath !== '/') {
    return DEPLOYMENT_MODES.DEVELOPMENT;
  }
  
  // Could add subdomain detection logic here if needed
  return DEPLOYMENT_MODES.STANDALONE;
};

export const businessConfigs = {
  grillz: {
    title: "Grillz Food Truck - Gourmet Street Food in Battle Creek",
    description: "Premium gourmet street food from Battle Creek's favorite food truck. Fresh ingredients, bold flavors, and authentic recipes served daily across Michigan.",
    businessName: "Grillz Food Truck",
    phone: "(269) 261-0069",
    // Custom styling for Grillz
    theme: {
      primaryColor: "#DC2626", // red-600
      secondaryColor: "#F97316", // orange-500  
      accentColor: "#FBBF24", // amber-400
      backgroundColor: "#1F2937", // gray-800
      textColor: "#F3F4F6", // gray-100
      gradientFrom: "#DC2626",
      gradientTo: "#F97316",
      fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
      heroImage: "/images/grillz-hero-bg.jpg",
      mood: "bold-urban"
    },
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
    keywords: ["food truck Battle Creek", "gourmet street food Michigan", "mobile catering", "BBQ food truck"],
    // Portfolio display data
    portfolioImage: "/images/grillz-preview.jpg", // Placeholder for future use
    portfolioDescription: "Premium fast food truck with mobile ordering system",
    status: "live",
    // Deployment configuration
    deployment: {
      subdomain: "grillz.cartfullofx.com",
      customDomain: null, // Set when client purchases domain (e.g., "grillz.com")
      cloudflareProjectId: null, // Set when promoted to standalone project
      migrationReady: true
    }
  },
  salsas: {
    title: "Salsas Mexican Restaurant - Authentic Mexican Cuisine",
    description: "Authentic Mexican restaurant serving traditional dishes, fresh salsas, and margaritas in Battle Creek, Michigan. Family recipes with genuine flavors.",
    businessName: "Salsas Mexican Restaurant",
    phone: "(269) 555-0147",
    // Custom styling for Salsas
    theme: {
      primaryColor: "#16A34A", // green-600
      secondaryColor: "#EF4444", // red-500
      accentColor: "#FBBF24", // amber-400
      backgroundColor: "#0F172A", // slate-900
      textColor: "#F1F5F9", // slate-100
      gradientFrom: "#16A34A",
      gradientTo: "#EF4444",
      fontFamily: "'Merriweather', 'Georgia', serif",
      heroImage: "/images/salsas-hero-bg.jpg",
      mood: "warm-traditional"
    },
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
    keywords: ["Mexican restaurant Battle Creek", "authentic tacos Michigan", "margaritas", "Mexican catering"],
    // Portfolio display data
    portfolioImage: "/images/salsas-preview.jpg", // Placeholder for future use
    portfolioDescription: "Authentic Mexican cuisine with online ordering",
    status: "live",
    // Deployment configuration
    deployment: {
      subdomain: "salsas.cartfullofx.com",
      customDomain: null, // Set when client purchases domain (e.g., "salsas.com")
      cloudflareProjectId: null, // Set when promoted to standalone project
      migrationReady: false // Not ready for migration yet
    }
  },
  loadaspud: {
    title: "Load-a-Spud Potato Bar - Gourmet Loaded Potatoes in Battle Creek",
    description: "Battle Creek's premier potato bar featuring signature loaded spuds, tacos, fresh salads, and more. From our famous Taco Spud to BBQ Chicken - we load it up fresh!",
    businessName: "Load-a-Spud Potato Bar",
    phone: "(269) 555-7783",
    // Custom styling for Load-a-Spud
    theme: {
      primaryColor: "#8B4513", // saddle brown
      secondaryColor: "#DAA520", // goldenrod
      accentColor: "#FFD700", // gold
      backgroundColor: "#2F1B14", // dark brown
      textColor: "#F5F5DC", // beige
      gradientFrom: "#8B4513",
      gradientTo: "#DAA520",
      fontFamily: "'Fredoka One', 'Arial Black', sans-serif",
      heroImage: "/images/loadaspud-hero-bg.jpg",
      mood: "rustic-comfort"
    },
    address: {
      street: "456 Potato Lane",
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
      "Saturday: 11:00 AM - 9:00 PM",
      "Sunday: 12:00 PM - 7:00 PM"
    ],
    services: [
      "Signature Loaded Spuds",
      "Fresh Tacos & Nachos",
      "Garden Fresh Salads",
      "Custom Potato Creations",
      "Catering Services",
      "Takeout & Delivery"
    ],
    heroTitle: "Loaded to Perfection",
    heroSubtitle: "Battle Creek's favorite potato bar with fresh ingredients and bold flavors",
    ctaText: "Order Now",
    ctaPhone: "(269) 555-7783",
    businessType: "Restaurant",
    keywords: ["potato bar Battle Creek", "loaded potatoes Michigan", "taco spud", "fresh salads Battle Creek", "comfort food Michigan"],
    
    // Complete menu data structure
    menu: {
      signatureSpuds: [
        { name: "1 Taco Spud", description: "Seasoned beef, lettuce, tomato, onions and taco sauce", price: "$1.99" },
        { name: "2 Cheeseburger Spud", description: "Ground beef, lettuce, tomato, onions, cheese", price: "$2.99" },
        { name: "3 Alfredo Spud", description: "Creamy Alfredo sauce with your choice of chicken", price: "$2.25" },
        { name: "4 Sloppy Joe Spud", description: "Ground beef Sloppy Joe sauce", price: "$1.99" },
        { name: "5 Chicken & Cheese Spud", description: "White meat chicken pieces with cheese", price: "$2.99" },
        { name: "6 BBQ Chicken Spud", description: "White meat chicken pieces smothered in tangy BBQ sauce", price: "$2.25" },
        { name: "7 Jerk Chicken Spud", description: "Seasoned jerk chicken, cheese", price: "$2.25" },
        { name: "8 Pizza Spud", description: "Pizza sauce, mozzarella cheese, pepperoni", price: "$1.99" },
        { name: "9 Chili Spud", description: "Zesty chili, cheddar cheese", price: "$1.99" },
        { name: "10 BLT Spud", description: "Real bacon, lettuce, tomato, topped with mayo", price: "$1.99" },
        { name: "11 Veggie Spud", description: "Choice of any veggie, butter and sour cream", price: "$1.99" },
        { name: "12 Bacon Broccoli Spud", description: "Cheese spud with bacon, broccoli and cheese", price: "$1.99" },
        { name: "13 Broccoli Spud", description: "Melted cheddar cheese and broccoli", price: "$1.99" },
        { name: "14 Pulled Pork Spud", description: "Pulled pork smothered in tangy BBQ sauce", price: "$2.25" },
        { name: "15 Gyro Spud", description: "Gyro strips, feta, onions and tomatoes", price: "$2.25" },
        { name: "16 Meat Lovers Spud", description: "Chicken, bacon, ground beef, and steak", price: "$2.25" },
        { name: "17 Turkey Spud", description: "Seasoned turkey and cheese", price: "$1.99" },
        { name: "18 Steak & Cheese Spud", description: "Seasoned steak and cheese topped with A1 sauce", price: "$2.25" },
        { name: "19 Shrimp & Cheese Spud", description: "Choice of chicken or steak with shrimp and cheese", price: "$2.25" },
        { name: "20 Surf & Turf Spud", description: "Premium combination with choice of veggies and house butter", price: "$2.25" }
      ],
      loadATaco: [
        { name: "Beef Taco", description: "Lettuce, tomato, onion and cheddar cheese with seasoned beef", price: "$2.25" },
        { name: "Chicken Taco", description: "Lettuce, tomato, onion and cheddar cheese with seasoned chicken", price: "$2.25" },
        { name: "Steak Taco", description: "Lettuce, tomato, onion and cheddar cheese with seasoned steak", price: "$2.75" },
        { name: "Shrimp Taco", description: "Lettuce, tomato, onion and cheddar cheese with shrimp", price: "$2.75" },
        { name: "Walking Taco", description: "Choice of chips, lettuce, tomato, onion and cheese with beef or chicken", price: "$2.75" },
        { name: "Nachos", description: "Tortilla chips, cheddar cheese, onion, tomato, lettuce and sour cream", price: "$2.25" }
      ],
      addExtras: [
        { name: "Add Beef or Chicken", description: "Premium protein addition", price: "$2.25" },
        { name: "Add Steak, Shrimp or Bacon", description: "Premium protein upgrade", price: "$2.75" }
      ],
      loadASalad: [
        { name: "Garden Salad", description: "Fresh bed of lettuce with your choice of veggies and cheese", price: "$2.25" },
        { name: "Veggie Options", description: "Lettuce, tomato, black olives, onions, corn, jalapenos, carrots, broccoli, mushrooms, spinach, banana peppers, green peppers, chives", price: "" },
        { name: "Cheese Options", description: "Feta, cheddar, mozzarella, colby jack, nacho cheese", price: "" },
        { name: "Add Beef or Chicken", description: "Make it a protein salad", price: "$2.25" },
        { name: "Add Steak, Shrimp or Bacon", description: "Premium protein salad", price: "$2.75" }
      ],
      beverages: [
        { name: "Canned Drinks", description: "Assorted sodas and juices", price: "$1.25" },
        { name: "Bottled Drinks (Small)", description: "Premium bottled beverages", price: "$1.50" },
        { name: "Bottled Drinks (Large)", description: "Large premium beverages", price: "$2.25" },
        { name: "Kool-Aid (Regular)", description: "Fresh fruit flavored drink", price: "$2.00" },
        { name: "Kool-Aid (Large)", description: "Large fresh fruit flavored drink", price: "$2.50" }
      ],
      snacks: [
        { name: "Fresh Baked Cookies", description: "Daily fresh baked treats", price: "$0.75" },
        { name: "Chips", description: "Assorted chip varieties", price: "$0.75" }
      ]
    },
    
    // Portfolio display data
    portfolioImage: "/images/loadaspud-preview.jpg",
    portfolioDescription: "Comfort food potato bar with signature loaded spuds",
    status: "live",
    
    // Deployment configuration
    deployment: {
      subdomain: "loadaspud.cartfullofx.com",
      customDomain: null,
      cloudflareProjectId: null,
      migrationReady: true
    },
    
    // SEO and business metadata
    foundingDate: "2018",
    copyrightYear: new Date().getFullYear().toString(),
    ownerInfo: {
      name: "Load-a-Spud Battle Creek",
      type: "Family-owned Restaurant",
      established: "2018"
    }
  }
};

// Helper function to generate business URL based on deployment mode
export function getBusinessUrl(slug, deploymentMode = null) {
  const mode = deploymentMode || getCurrentDeploymentMode();
  const config = businessConfigs[slug];
  
  if (!config) return null;
  
  switch (mode) {
    case DEPLOYMENT_MODES.DEVELOPMENT:
      return `/${slug}`;
    case DEPLOYMENT_MODES.SUBDOMAIN:
      return `https://${config.deployment.subdomain}`;
    case DEPLOYMENT_MODES.STANDALONE:
      return config.deployment.customDomain 
        ? `https://${config.deployment.customDomain}`
        : `https://${slug}.pages.dev`; // Fallback to Cloudflare Pages URL
    default:
      return `/${slug}`;
  }
}

// Helper function to get all business configurations as an array for portfolio display
export function getPortfolioBusinesses(deploymentMode = null) {
  const mode = deploymentMode || getCurrentDeploymentMode();
  
  return Object.entries(businessConfigs).map(([slug, config]) => ({
    slug,
    ...config,
    url: getBusinessUrl(slug, mode),
    deploymentMode: mode
  }));
}

// Helper function to get business config by slug
export function getBusinessConfig(slug) {
  return businessConfigs[slug];
}

// Helper function to get all business slugs for static path generation
export function getBusinessSlugs() {
  return Object.keys(businessConfigs);
}