#!/usr/bin/env node

/**
 * Test Configuration Script
 * 
 * Tests both development and standalone base path configurations
 */

import { getPortfolioBusinesses, getCurrentDeploymentMode, DEPLOYMENT_MODES } from '../src/data/businesses.js';

console.log('🧪 Testing Business Configuration System\n');

// Test 1: Current deployment mode detection
console.log('📊 Deployment Mode Detection:');
const currentMode = getCurrentDeploymentMode();
console.log(`Current mode: ${currentMode}`);
console.log(`BASE_PATH env: ${process.env.BASE_PATH || 'not set'}`);
console.log('');

// Test 2: Portfolio businesses URL generation
console.log('🔗 URL Generation Test:');
const businesses = getPortfolioBusinesses();

businesses.forEach(business => {
  console.log(`${business.businessName}:`);
  console.log(`  - Slug: ${business.slug}`);
  console.log(`  - URL: ${business.url}`);
  console.log(`  - Migration Ready: ${business.deployment?.migrationReady ? '✅' : '❌'}`);
  console.log(`  - Custom Domain: ${business.deployment?.customDomain || 'None'}`);
  console.log('');
});

// Test 3: Different deployment modes
console.log('🎯 URL Generation by Mode:');
const modes = [DEPLOYMENT_MODES.DEVELOPMENT, DEPLOYMENT_MODES.SUBDOMAIN, DEPLOYMENT_MODES.STANDALONE];

Object.keys({ grillz: {}, salsas: {} }).forEach(slug => {
  console.log(`${slug.toUpperCase()}:`);
  modes.forEach(mode => {
    const businesses = getPortfolioBusinesses(mode);
    const business = businesses.find(b => b.slug === slug);
    console.log(`  ${mode}: ${business?.url || 'N/A'}`);
  });
  console.log('');
});

console.log('✅ Configuration test completed!');