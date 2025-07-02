#!/usr/bin/env node

/**
 * Business Site Migration Script
 * 
 * This script helps migrate a business from the development environment
 * (cartfullofx.com/grillz) to a standalone deployment (grillz.com)
 * 
 * Usage:
 *   node scripts/migrate-business.js grillz
 *   node scripts/migrate-business.js grillz --dry-run
 *   node scripts/migrate-business.js grillz --deploy
 */

import fs from 'fs/promises';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');

// Get command line arguments
const businessSlug = process.argv[2];
const isDryRun = process.argv.includes('--dry-run');
const shouldDeploy = process.argv.includes('--deploy');

if (!businessSlug) {
  console.error('❌ Please provide a business slug');
  console.log('Usage: node scripts/migrate-business.js <business-slug> [--dry-run] [--deploy]');
  console.log('Example: node scripts/migrate-business.js grillz --deploy');
  process.exit(1);
}

async function loadBusinessConfig() {
  try {
    // Import the business configurations
    const businessesPath = path.join(PROJECT_ROOT, 'src/data/businesses.js');
    const businessesModule = await import(`file://${businessesPath}`);
    const business = businessesModule.businessConfigs[businessSlug];
    
    if (!business) {
      throw new Error(`Business '${businessSlug}' not found in configurations`);
    }
    
    return business;
  } catch (error) {
    console.error(`❌ Error loading business config: ${error.message}`);
    process.exit(1);
  }
}

async function createStandaloneProject() {
  const outputDir = path.join(PROJECT_ROOT, 'dist', `${businessSlug}-standalone`);
  
  console.log(`📦 Creating standalone project for '${businessSlug}'`);
  
  if (isDryRun) {
    console.log(`[DRY RUN] Would create project in: ${outputDir}`);
    return outputDir;
  }
  
  // Ensure output directory exists
  await fs.mkdir(outputDir, { recursive: true });
  
  // Copy essential project files
  const filesToCopy = [
    'package.json',
    'astro.config.mjs',
    'tailwind.config.js',
    'tsconfig.json',
    'src',
    'public'
  ];
  
  for (const file of filesToCopy) {
    const srcPath = path.join(PROJECT_ROOT, file);
    const destPath = path.join(outputDir, file);
    
    try {
      await fs.cp(srcPath, destPath, { recursive: true });
      console.log(`✅ Copied ${file}`);
    } catch (error) {
      console.log(`⚠️  Skipped ${file} (${error.message})`);
    }
  }
  
  return outputDir;
}

async function updateStandaloneConfig(projectDir, business) {
  console.log('⚙️  Updating configuration for standalone deployment');
  
  if (isDryRun) {
    console.log('[DRY RUN] Would update configurations');
    return;
  }
  
  // Update astro.config.mjs for standalone deployment
  const astroConfigPath = path.join(projectDir, 'astro.config.mjs');
  let astroConfig = await fs.readFile(astroConfigPath, 'utf-8');
  
  // Set base path to root for standalone deployment
  astroConfig = astroConfig.replace(
    'const basePath = process.env.BASE_PATH || \'/\';',
    'const basePath = \'/\'; // Standalone deployment'
  );
  
  await fs.writeFile(astroConfigPath, astroConfig);
  console.log('✅ Updated astro.config.mjs');
  
  // Create a single-business configuration
  const businessDataPath = path.join(projectDir, 'src/data/businesses.js');
  const singleBusinessConfig = `// Standalone business configuration
export const businessConfigs = {
  "${businessSlug}": ${JSON.stringify(business, null, 2)}
};

export const DEPLOYMENT_MODES = {
  STANDALONE: 'standalone'
};

export const getCurrentDeploymentMode = () => 'standalone';

export function getBusinessUrl(slug) {
  return '/';
}

export function getPortfolioBusinesses() {
  return [{
    slug: "${businessSlug}",
    ...businessConfigs["${businessSlug}"],
    url: '/',
    deploymentMode: 'standalone'
  }];
}

export function getBusinessConfig(slug) {
  return businessConfigs[slug];
}

export function getBusinessSlugs() {
  return Object.keys(businessConfigs);
}
`;
  
  await fs.writeFile(businessDataPath, singleBusinessConfig);
  console.log('✅ Updated business configuration for standalone deployment');
  
  // Update package.json name
  const packageJsonPath = path.join(projectDir, 'package.json');
  const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf-8'));
  packageJson.name = `${businessSlug}-standalone`;
  await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log('✅ Updated package.json');
}

async function generateDeploymentInstructions(business) {
  const instructions = `
# 🚀 ${business.businessName} - Standalone Deployment Instructions

## Quick Deploy to Cloudflare Pages

1. **Create new Cloudflare Pages project:**
   \`\`\`bash
   cd dist/${businessSlug}-standalone
   npm install
   npm run build
   \`\`\`

2. **Deploy via Wrangler CLI:**
   \`\`\`bash
   wrangler pages project create ${businessSlug}
   wrangler pages deploy dist --project-name ${businessSlug}
   \`\`\`

3. **Connect custom domain (when client purchases):**
   - Go to Cloudflare Dashboard → Pages → ${businessSlug}
   - Custom domains → Add custom domain
   - Follow DNS instructions

## Development URLs
- **Current demo**: https://cartfullofx.com/${businessSlug}
- **Standalone preview**: https://${businessSlug}.pages.dev
- **Custom domain**: ${business.deployment?.customDomain || 'TBD when client purchases'}

## Business Information
- **Business Name**: ${business.businessName}
- **Location**: ${business.address.city}, ${business.address.state}
- **Phone**: ${business.phone}
- **Migration Ready**: ${business.deployment?.migrationReady ? '✅ Yes' : '❌ No'}

## Next Steps
1. Show client the demo at cartfullofx.com/${businessSlug}
2. When approved, deploy standalone version
3. Client purchases domain, connect it to Pages project
4. Site goes live on custom domain!
`;

  const instructionsPath = path.join(PROJECT_ROOT, 'dist', `${businessSlug}-deployment-instructions.md`);
  
  if (!isDryRun) {
    await fs.writeFile(instructionsPath, instructions);
    console.log(`📋 Created deployment instructions: ${instructionsPath}`);
  } else {
    console.log('[DRY RUN] Would create deployment instructions');
  }
  
  return instructions;
}

async function deployToCloudflare(projectDir) {
  if (!shouldDeploy) {
    console.log('🚀 Use --deploy flag to automatically deploy to Cloudflare Pages');
    return;
  }
  
  console.log('🚀 Deploying to Cloudflare Pages...');
  
  try {
    // Build the project
    console.log('📦 Building project...');
    execSync('npm run build', { cwd: projectDir, stdio: 'inherit' });
    
    // Deploy with wrangler
    console.log('☁️  Deploying to Cloudflare...');
    execSync(`wrangler pages deploy dist --project-name ${businessSlug}`, { 
      cwd: projectDir, 
      stdio: 'inherit' 
    });
    
    console.log(`✅ Deployment complete! Preview at: https://${businessSlug}.pages.dev`);
  } catch (error) {
    console.error(`❌ Deployment failed: ${error.message}`);
    console.log('💡 You may need to create the Pages project first:');
    console.log(`   wrangler pages project create ${businessSlug}`);
  }
}

async function main() {
  console.log(`🔄 Starting migration process for '${businessSlug}'`);
  console.log(`📁 Project root: ${PROJECT_ROOT}`);
  
  if (isDryRun) {
    console.log('🧪 DRY RUN MODE - No files will be modified');
  }
  
  // Load business configuration
  const business = await loadBusinessConfig();
  console.log(`✅ Loaded configuration for: ${business.businessName}`);
  
  // Check if migration ready
  if (!business.deployment?.migrationReady) {
    console.log(`⚠️  Warning: ${business.businessName} is not marked as migration ready`);
    console.log('   Set deployment.migrationReady = true in businesses.js when ready');
  }
  
  // Create standalone project
  const projectDir = await createStandaloneProject();
  
  // Update configurations
  await updateStandaloneConfig(projectDir, business);
  
  // Generate deployment instructions
  const instructions = await generateDeploymentInstructions(business);
  
  // Deploy if requested
  if (!isDryRun) {
    await deployToCloudflare(projectDir);
  }
  
  console.log('\n🎉 Migration process completed!');
  console.log(`📁 Standalone project: ${projectDir}`);
  console.log(`🔗 Demo URL: https://cartfullofx.com/${businessSlug}`);
  
  if (!isDryRun && shouldDeploy) {
    console.log(`🌐 Live URL: https://${businessSlug}.pages.dev`);
  }
}

// Run the migration
main().catch(error => {
  console.error('❌ Migration failed:', error);
  process.exit(1);
});