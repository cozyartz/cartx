#!/usr/bin/env node

/**
 * AI-Powered Website Builder for Cozyartz Media Group
 * 
 * Usage: 
 *   node generate-business.js                    # Interactive mode
 *   node generate-business.js --menu-image=path  # With menu image analysis
 *   node generate-business.js --batch           # Batch processing mode
 * 
 * This script uses AI to generate complete business websites with content,
 * menu analysis, and professional configuration for instant deployment.
 */

import readline from 'readline';
import fs from 'fs';
import path from 'path';
import { generateBusinessConfig, analyzeMenuImage, getAIServiceStatus } from './src/lib/ai-services.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Enhanced business type templates with AI integration
const businessTypeTemplates = {
  restaurant: {
    businessType: "Restaurant",
    layoutType: "restaurant",
    aiPromptHints: "authentic cuisine, dining experience, local ingredients, food quality",
    imageStyle: "warm restaurant interior, professional food photography",
    services: ["Dine-In Service", "Takeout & Delivery", "Catering Services", "Private Events"],
    keywordBase: "restaurant, dining, food"
  },
  foodtruck: {
    businessType: "Restaurant", 
    layoutType: "foodtruck",
    aiPromptHints: "mobile food service, street food culture, urban dining, quick service",
    imageStyle: "vibrant food truck, urban setting, street food aesthetic",
    services: ["Mobile Orders", "Event Catering", "Daily Specials", "Quick Service"],
    keywordBase: "food truck, street food, mobile catering"
  },
  salon: {
    businessType: "BeautySalon",
    layoutType: "universal",
    aiPromptHints: "beauty expertise, styling services, client satisfaction, professional care",
    imageStyle: "modern salon interior, professional styling station, elegant atmosphere",
    services: ["Hair Styling", "Coloring", "Treatments", "Bridal Services", "Consultations"],
    keywordBase: "hair salon, beauty, styling"
  },
  automotive: {
    businessType: "AutomotiveBusiness",
    layoutType: "universal", 
    aiPromptHints: "automotive expertise, reliable service, customer trust, quality repairs",
    imageStyle: "professional auto shop, modern equipment, clean garage",
    services: ["Diagnostics", "Repairs", "Maintenance", "Inspections", "Emergency Service"],
    keywordBase: "auto repair, car service, automotive"
  },
  contractor: {
    businessType: "LocalBusiness",
    layoutType: "universal",
    aiPromptHints: "construction expertise, quality craftsmanship, project management, reliability",
    imageStyle: "professional construction work, quality materials, skilled craftsmanship",
    services: ["Construction", "Renovation", "Remodeling", "Estimates", "Project Management"],
    keywordBase: "contractor, construction, remodeling"
  },
  retail: {
    businessType: "Store",
    layoutType: "universal",
    aiPromptHints: "product quality, customer experience, store atmosphere, personalized service",
    imageStyle: "modern retail interior, attractive displays, welcoming environment",
    services: ["Product Sales", "Custom Orders", "Consultation", "Gift Services"],
    keywordBase: "retail, shopping, store"
  },
  cafe: {
    businessType: "Restaurant",
    layoutType: "restaurant",
    aiPromptHints: "coffee culture, cozy atmosphere, community gathering, artisan beverages",
    imageStyle: "cozy cafe interior, coffee art, warm lighting",
    services: ["Specialty Coffee", "Fresh Pastries", "Light Meals", "WiFi", "Catering"],
    keywordBase: "cafe, coffee, specialty drinks"
  },
  healthcare: {
    businessType: "MedicalOrganization",
    layoutType: "universal",
    aiPromptHints: "healthcare expertise, patient care, professional service, medical excellence",
    imageStyle: "modern medical office, professional healthcare setting, clean environment",
    services: ["Medical Consultations", "Treatments", "Preventive Care", "Emergency Services"],
    keywordBase: "healthcare, medical, clinic"
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

// Parse command line arguments
const args = process.argv.slice(2);
const menuImagePath = args.find(arg => arg.startsWith('--menu-image='))?.split('=')[1];
const batchMode = args.includes('--batch');
const aiMode = args.includes('--ai') || !args.includes('--manual');

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

async function displayAIServiceStatus() {
  const status = getAIServiceStatus();
  console.log('\n🤖 AI Service Status:');
  console.log(`   Anthropic Claude: ${status.anthropic ? '✅ Available' : '❌ Not configured'}`);
  console.log(`   OpenAI GPT-4: ${status.openai ? '✅ Available' : '❌ Not configured'}`);
  
  if (!status.initialized) {
    console.log('\n⚠️  AI services not configured. Please set environment variables:');
    console.log('   ANTHROPIC_API_KEY=your_key_here');
    console.log('   OPENAI_API_KEY=your_key_here');
    console.log('\n   Falling back to manual configuration mode.\n');
    return false;
  }
  return true;
}

async function generateBusinessAI() {
  console.log('\n🤖 AI-Powered Website Builder for Cozyartz Media Group');
  console.log('====================================================\n');
  
  const aiAvailable = await displayAIServiceStatus();
  
  if (!aiAvailable) {
    console.log('Running in manual mode...\n');
    return generateBusinessManual();
  }

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