#!/usr/bin/env node

/**
 * Quick Business Page Generator for CartX Multi-Tenant System
 * 
 * Usage: node generate-business.js
 * 
 * This script generates business configuration objects that can be
 * copy-pasted into the [business].astro file for instant deployment.
 */

import readline from 'readline';
import fs from 'fs';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Business type templates with pre-configured settings
const businessTypeTemplates = {
  restaurant: {
    businessType: "Restaurant",
    defaultServices: [
      "Dine-In Service",
      "Takeout & Delivery", 
      "Catering Services",
      "Private Dining",
      "Special Events",
      "Online Ordering"
    ],
    defaultHours: [
      "Monday: 11:00 AM - 9:00 PM",
      "Tuesday: 11:00 AM - 9:00 PM",
      "Wednesday: 11:00 AM - 9:00 PM", 
      "Thursday: 11:00 AM - 9:00 PM",
      "Friday: 11:00 AM - 10:00 PM",
      "Saturday: 11:00 AM - 10:00 PM",
      "Sunday: 12:00 PM - 8:00 PM"
    ],
    keywordBase: "restaurant, dining, food"
  },
  salon: {
    businessType: "BeautySalon",
    defaultServices: [
      "Hair Cuts & Styling",
      "Hair Coloring",
      "Highlights & Lowlights",
      "Perms & Relaxers", 
      "Bridal Hair & Makeup",
      "Deep Conditioning Treatments"
    ],
    defaultHours: [
      "Monday: Closed",
      "Tuesday: 9:00 AM - 6:00 PM",
      "Wednesday: 9:00 AM - 6:00 PM",
      "Thursday: 9:00 AM - 8:00 PM",
      "Friday: 9:00 AM - 8:00 PM",
      "Saturday: 8:00 AM - 5:00 PM",
      "Sunday: 10:00 AM - 4:00 PM"
    ],
    keywordBase: "hair salon, beauty, styling"
  },
  automotive: {
    businessType: "AutomotiveBusiness", 
    defaultServices: [
      "Oil Changes & Maintenance",
      "Brake Repair & Service",
      "Engine Diagnostics",
      "Tire Installation & Rotation",
      "Battery & Electrical Service",
      "State Inspections"
    ],
    defaultHours: [
      "Monday: 7:00 AM - 6:00 PM",
      "Tuesday: 7:00 AM - 6:00 PM",
      "Wednesday: 7:00 AM - 6:00 PM",
      "Thursday: 7:00 AM - 6:00 PM", 
      "Friday: 7:00 AM - 6:00 PM",
      "Saturday: 8:00 AM - 4:00 PM",
      "Sunday: Closed"
    ],
    keywordBase: "auto repair, car service, automotive"
  },
  contractor: {
    businessType: "LocalBusiness",
    defaultServices: [
      "Residential Construction",
      "Home Renovations", 
      "Kitchen & Bathroom Remodeling",
      "Roofing & Siding",
      "Flooring Installation",
      "Free Estimates"
    ],
    defaultHours: [
      "Monday: 7:00 AM - 5:00 PM",
      "Tuesday: 7:00 AM - 5:00 PM",
      "Wednesday: 7:00 AM - 5:00 PM",
      "Thursday: 7:00 AM - 5:00 PM",
      "Friday: 7:00 AM - 5:00 PM",
      "Saturday: 8:00 AM - 2:00 PM",
      "Sunday: Closed"
    ],
    keywordBase: "contractor, construction, remodeling"
  },
  retail: {
    businessType: "Store",
    defaultServices: [
      "Product Sales",
      "Custom Orders",
      "Gift Cards Available",
      "Layaway Programs",
      "Product Consultation",
      "Special Ordering"
    ],
    defaultHours: [
      "Monday: 10:00 AM - 7:00 PM",
      "Tuesday: 10:00 AM - 7:00 PM",
      "Wednesday: 10:00 AM - 7:00 PM",
      "Thursday: 10:00 AM - 7:00 PM",
      "Friday: 10:00 AM - 8:00 PM",
      "Saturday: 9:00 AM - 8:00 PM",
      "Sunday: 11:00 AM - 6:00 PM"
    ],
    keywordBase: "retail, shopping, store"
  }
};

// Michigan cities with coordinates
const michiganCities = {
  "Battle Creek": { lat: 42.3211, lng: -85.1797, zip: "49015" },
  "Kalamazoo": { lat: 42.2917, lng: -85.5872, zip: "49008" },
  "Grand Rapids": { lat: 42.9634, lng: -85.6681, zip: "49503" },
  "Detroit": { lat: 42.3314, lng: -83.0458, zip: "48201" },
  "Ann Arbor": { lat: 42.2808, lng: -83.7430, zip: "48104" },
  "Lansing": { lat: 42.3314, lng: -84.5467, zip: "48933" },
  "Flint": { lat: 43.0125, lng: -83.6875, zip: "48503" },
  "Traverse City": { lat: 44.7631, lng: -85.6206, zip: "49684" }
};

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

function generatePhoneNumber() {
  return `(269) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`;
}

function generateSlug(businessName) {
  return businessName.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

async function generateBusiness() {
  console.log('\n🚀 CartX Business Page Generator');
  console.log('===================================\n');

  // Get business type
  console.log('Available business types:');
  Object.keys(businessTypeTemplates).forEach((type, index) => {
    console.log(`${index + 1}. ${type}`);
  });
  
  const typeChoice = await question('\nSelect business type (1-5): ');
  const businessTypeKey = Object.keys(businessTypeTemplates)[parseInt(typeChoice) - 1];
  const template = businessTypeTemplates[businessTypeKey];
  
  if (!template) {
    console.log('Invalid selection. Exiting.');
    rl.close();
    return;
  }

  // Get basic info
  const businessName = await question('Business name: ');
  const slug = generateSlug(businessName);
  const tagline = await question('Business tagline/specialty: ');
  const description = await question('SEO description: ');
  
  // Get location
  console.log('\nAvailable Michigan cities:');
  Object.keys(michiganCities).forEach((city, index) => {
    console.log(`${index + 1}. ${city}`);
  });
  
  const cityChoice = await question('Select city (1-8): ');
  const cityName = Object.keys(michiganCities)[parseInt(cityChoice) - 1];
  const cityData = michiganCities[cityName];
  
  if (!cityData) {
    console.log('Invalid city selection. Exiting.');
    rl.close();
    return;
  }

  // Get contact info
  const address = await question(`Street address in ${cityName}: `);
  const phone = await question(`Phone number (press enter for auto-generated): `) || generatePhoneNumber();
  
  // Custom services
  const useDefaultServices = await question('Use default services? (y/n): ');
  let services = template.defaultServices;
  
  if (useDefaultServices.toLowerCase() === 'n') {
    console.log('Enter services (one per line, empty line to finish):');
    services = [];
    let service;
    while ((service = await question('Service: ')) !== '') {
      services.push(service);
    }
  }

  // Generate keywords
  const additionalKeywords = await question('Additional keywords (comma-separated): ');
  const keywords = [
    `${template.keywordBase} ${cityName}`,
    `${businessName.toLowerCase()}`,
    `${tagline.toLowerCase()}`,
    ...additionalKeywords.split(',').map(k => k.trim()).filter(k => k)
  ];

  // Generate configuration object
  const config = {
    [slug]: {
      title: `${businessName} - ${tagline}`,
      description: description,
      businessName: businessName,
      phone: phone,
      address: {
        street: address,
        city: cityName,
        state: "Michigan",
        zip: cityData.zip
      },
      geo: {
        latitude: cityData.lat,
        longitude: cityData.lng
      },
      hours: template.defaultHours,
      services: services,
      heroTitle: tagline,
      heroSubtitle: `${businessName} serving ${cityName}, Michigan`,
      ctaText: "Contact Us Today",
      ctaPhone: phone,
      businessType: template.businessType,
      keywords: keywords
    }
  };

  // Output results
  console.log('\n✅ Generated Business Configuration:');
  console.log('=====================================\n');
  console.log(JSON.stringify(config, null, 2));
  
  console.log('\n📋 Next Steps:');
  console.log('1. Copy the configuration above');
  console.log('2. Add it to the businessConfigs object in src/pages/[business].astro');
  console.log(`3. Your new page will be available at: /${slug}`);
  console.log(`4. Test locally: npm run dev`);
  console.log(`5. Deploy: npm run build && npm run deploy`);
  
  // Save to file option
  const saveToFile = await question('\nSave configuration to file? (y/n): ');
  if (saveToFile.toLowerCase() === 'y') {
    const filename = `business-config-${slug}.json`;
    fs.writeFileSync(filename, JSON.stringify(config, null, 2));
    console.log(`✅ Saved to ${filename}`);
  }

  rl.close();
}

// Run the generator
generateBusiness().catch(console.error);