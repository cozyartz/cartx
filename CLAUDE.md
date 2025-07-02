# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Name: cartx (formerly grillz)

This is the main template repository for creating multi-tenant landing pages. The modular SEO component (`src/components/SEO.astro`) can be shared with other bots to build additional sites like cozyartz.com.

## Business Model Overview

This is a **multi-tenant landing page business** designed to dominate local SEO in Michigan and beyond. Each subdomain (e.g., grillz.cartfullofx.com, salsas.cartfullofx.com) serves as a high-quality demo landing page for local businesses, which then funnels traffic to Cozyartz Media Group for web development services.

### SEO Strategy Architecture
- **Demo Landing Pages**: Professional sites showcasing local businesses across Michigan
- **Authority Building**: Each demo site includes strategic backlinks and schema markup pointing to Cozyartz Media Group
- **Geographic Expansion**: Target different Michigan cities through various business verticals
- **Conversion Funnel**: Demo sites → Info page → Cozyartz Media Group services

### Multi-Subdomain Structure
- **Production Domain**: cartfullofx.com (main hub)
- **Demo Subdomains**: [business].cartfullofx.com (e.g., cartx.cartfullofx.com)
- **Info Page**: /info (Cozyartz Media Group service sales page)
- **SEO Network**: All sites contribute authority and traffic to main business

## Development Commands

### Core Development
- `npm run dev` - Start Astro development server (localhost:4321)
- `npm run build` - Build the project for production
- `npm run preview` - Preview the built site locally
- `npm run wrangler:dev` - Test with Cloudflare Workers runtime locally

### Client Migration Workflow
- `npm run migrate grillz --dry-run` - Test migration without making changes
- `npm run migrate:grillz` - Extract grillz to standalone project
- `npm run deploy:grillz` - Extract and deploy grillz to Cloudflare Pages
- `npm run migrate:salsas` - Extract salsas to standalone project  
- `npm run deploy:salsas` - Extract and deploy salsas to Cloudflare Pages
- `npm run test:config` - Test URL generation and deployment modes

### Deployment
- `npm run deploy` - Deploy to production (cartfullofx.com)
- `npm run deploy:staging` - Deploy to staging environment
- `npm run build && npm run deploy` - Full build and deploy to production

### Business Generation
- `node generate-business.js` - Interactive business configuration generator
- `npm run generate` - Alias for business generator

### Wrangler Commands
- `wrangler pages deployment list --project-name cartx` - List deployments
- `wrangler pages project list` - List all Pages projects
- `wrangler login` - Authenticate with Cloudflare

## Architecture Overview

This is an Astro-based multi-tenant website system deployed on Cloudflare Pages with the following key characteristics:

### Tech Stack
- **Framework**: Astro 5.x with SSR mode (`output: 'server'`)
- **Adapter**: Cloudflare Pages adapter for server-side functionality
- **Styling**: Tailwind CSS 4.x with custom configuration
- **Icons**: FontAwesome (solid and brand icons)
- **Deployment**: Cloudflare Pages with Wrangler CLI

### Project Structure
- `src/pages/` - File-based routing (index.astro, info.astro)
- `src/components/SEO.astro` - **Reusable SEO component for sharing across projects**
- `src/styles/global.css` - Global styles and Tailwind customizations
- `public/` - Static assets including favicons and manifest
- `dist/` - Build output directory (generated)

### Modular SEO Component
The `src/components/SEO.astro` component provides:
- Complete SEO meta tags (title, description, keywords, robots)
- Open Graph and Twitter Card support
- Geographic and local business targeting
- Schema.org structured data (Organization, Website, LocalBusiness)
- Configurable business information and service offerings
- Easy integration with any Astro project

**Usage Example:**
```astro
<SEO 
  title="Your Business Name"
  description="Your business description"
  businessName="Your Business"
  phone="(555) 123-4567"
  address={{ city: "Your City", state: "Your State", zip: "12345" }}
  geo={{ latitude: 42.3211, longitude: -85.1797 }}
  // ... other props
/>
```

### Configuration Files
- `astro.config.mjs` - Astro configuration with Cloudflare adapter and Tailwind
- `wrangler.toml` - Cloudflare Pages configuration with production/preview environments
- `tailwind.config.js` - Custom Tailwind configuration with brand colors and fonts

### Custom Tailwind Theme
The project uses custom design tokens:
- **Fonts**: Fredoka One (headers), Inter (body text)
- **Colors**: Custom accent colors (red/orange variations), dark theme colors
- **Brand Colors**: `accent-red`, `accent-orange` with light/dark variants
- **Dark Theme**: `dark-bg`, `dark-surface`, `dark-border`

### Deployment Architecture
- **Production**: Custom domain (cartfullofx.com) 
- **Staging**: cartx-staging.pages.dev
- **Auto-generated**: cartx.pages.dev
- Server-side rendering enabled for dynamic functionality
- Cloudflare Workers runtime for edge computing capabilities

## SEO & Marketing Strategy

### Michigan-Focused Local SEO
- **Primary Target**: Battle Creek, Kalamazoo, Grand Rapids, Detroit metro
- **Keywords**: "web design Michigan", "digital marketing [city]", "small business websites Michigan"
- **Local Citations**: Google My Business, Bing Places, Apple Maps
- **Schema Markup**: LocalBusiness, Organization, Service structured data

### Multi-Site SEO Network
- **Backlink Strategy**: Every demo site links to Cozyartz with high authority signals
- **Content Marketing**: Each business becomes a case study showcasing Cozyartz expertise
- **Geographic Expansion**: Target different Michigan cities through business demos
- **Authority Cascade**: Local business SEO → Cozyartz authority building

### Conversion Optimization
- **Demo Quality**: High-performance, mobile-optimized landing pages
- **Social Proof**: "Website by Cozyartz Media Group" attribution on every demo
- **Call-to-Action**: Strategic placement of info page links and phone numbers
- **Trust Signals**: WOSB certification, testimonials, case studies

## Template Development Workflow

### Creating New Business Landing Pages
1. **Research**: Local business analysis and keyword research
2. **Content**: Business-specific menu/services, contact info, hours
3. **SEO**: Local schema markup, geo-targeted meta tags
4. **Branding**: Consistent Cozyartz attribution and backlinks
5. **Testing**: Mobile responsiveness, page speed, conversion tracking

### Business Verticals to Target
- **Restaurants**: Food trucks, cafes, diners, specialty cuisine
- **Service Businesses**: Contractors, repair services, consultants
- **Retail**: Local shops, boutiques, specialty stores
- **Healthcare**: Clinics, dentists, chiropractors, wellness
- **Professional Services**: Legal, accounting, real estate

### Development Workflow
1. Run `npm run dev` for local development
2. Use `npm run wrangler:dev` to test Cloudflare Workers functionality locally
3. Build with `npm run build` before deployment
4. Deploy to staging first: `npm run build && npm run deploy:staging`
5. Deploy to production: `npm run build && npm run deploy`

## Quality Assurance

### Technical Requirements
- **Page Speed**: Core Web Vitals optimization (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- **Mobile First**: Responsive design tested on all device sizes
- **Accessibility**: WCAG 2.1 AA compliance
- **SEO**: Proper meta tags, structured data, and semantic HTML

### Content Standards
- **Professional Copy**: High-quality, engaging business descriptions
- **Local Focus**: Michigan-specific references and geographic targeting
- **Call-to-Actions**: Clear paths to contact Cozyartz for services
- **Brand Consistency**: Uniform styling and Cozyartz attribution

The project is configured for both static and server-side rendering, allowing for dynamic functionality while maintaining performance benefits of edge deployment. All sites work together to establish Cozyartz Media Group as the premier web development authority in Michigan.

## 🚀 Client Migration Workflow

### Zero-Cost Development Strategy
This system allows you to develop client sites without upfront domain costs, then seamlessly migrate to standalone domains when clients approve.

#### Development Phase
- **Add business to `src/data/businesses.js`**
- **Test locally**: `http://localhost:4321/grillz`
- **Deploy for demo**: Business appears at `cartfullofx.com/grillz`
- **Show professional portfolio** with futuristic carousel

#### Client Approval & Migration
- **Extract to standalone**: `npm run migrate:grillz`
- **Deploy standalone site**: `npm run deploy:grillz`
- **Preview at**: `https://grillz.pages.dev`
- **Connect custom domain** when client purchases

#### Business Configuration Structure
```javascript
// In src/data/businesses.js
businessname: {
  // Standard business information...
  businessName: "Business Name",
  phone: "(269) 261-0069",
  
  // Deployment configuration
  deployment: {
    subdomain: "businessname.cartfullofx.com",
    customDomain: null,              // Set when client buys domain
    cloudflareProjectId: null,       // Set after deployment  
    migrationReady: true            // Ready for standalone deployment
  }
}
```

#### URL Behavior by Deployment Mode
- **Development**: `cartfullofx.com/grillz` (BASE_PATH=/grillz)
- **Subdomain**: `grillz.cartfullofx.com` (future enhancement)
- **Standalone**: `grillz.pages.dev` → `grillz.com` (BASE_PATH=/)

#### Migration Benefits
- ✅ No upfront domain costs during development
- ✅ Professional client demos with portfolio showcase
- ✅ One-command migration to standalone sites
- ✅ Automatic URL adaptation for deployment modes
- ✅ Scalable workflow for unlimited clients

### Migration Script Features
- **Dry run testing**: `--dry-run` flag for safe testing
- **Automatic extraction**: Copies and configures standalone project
- **Deployment instructions**: Generates step-by-step guide
- **Cloudflare integration**: Direct deployment with `--deploy` flag

## 🚀 Quick Business Page Generation System

### Rapid Page Creation Workflow

#### Method 1: Automated Generator (Recommended)
```bash
node generate-business.js
```
Interactive script that auto-generates business configurations with Michigan city data, SEO keywords, and business type templates.

#### Method 2: Manual Configuration  
Add businesses directly to `src/pages/[business].astro` businessConfigs object.

### 📋 Business Type Templates

#### Restaurant Template
```javascript
businessname: {
  title: "Business Name - Authentic [Cuisine] Cuisine",
  description: "Authentic [cuisine] restaurant in [City], Michigan. [Unique selling point].",
  businessType: "Restaurant",
  services: ["Dine-In Service", "Takeout & Delivery", "Catering", "Private Events"],
  keywords: ["restaurant [city]", "authentic [cuisine] Michigan", "[specialty dish]"]
}
```

#### Hair Salon Template
```javascript
businessname: {
  title: "Business Name - Hair Salon & Beauty Services", 
  businessType: "BeautySalon",
  services: ["Hair Cuts & Styling", "Hair Coloring", "Highlights", "Bridal Hair"],
  keywords: ["hair salon [city]", "hair stylist Michigan", "bridal hair"]
}
```

#### Auto Repair Template
```javascript
businessname: {
  title: "Business Name - Auto Repair & Service",
  businessType: "AutomotiveBusiness", 
  services: ["Oil Changes", "Brake Repair", "Engine Diagnostics", "Tire Service"],
  keywords: ["auto repair [city]", "car service Michigan", "brake repair"]
}
```

### 🎯 Client Sales Process

#### Demo Generation Steps
1. Research target business (website, Google listing, competitors)
2. Run `node generate-business.js` to create configuration
3. Add config to [business].astro file
4. Deploy demo: `npm run build && npm run deploy`
5. Present live demo at [business].cartfullofx.com

#### Sales Presentation Script
"I've created a professional website demo for [Business Name] at [business].cartfullofx.com. This showcases mobile-optimized design, local SEO for [City] searches, and professional contact integration. Same quality for $XXX setup + $XX/month hosting."

#### Pricing Structure
- Landing Page: $500-800
- Hosting: $25-50/month
- SEO Setup: $200 one-time
- Rush Delivery: +50%

### 🔧 Development Shortcuts

#### Michigan Cities with Coordinates
Battle Creek (42.3211,-85.1797), Kalamazoo (42.2917,-85.5872), Grand Rapids (42.9634,-85.6681), Detroit (42.3314,-83.0458)

#### Testing Checklist
- [ ] Page loads at /[businessname]
- [ ] Mobile responsive
- [ ] SEO meta tags populated  
- [ ] Cozyartz attribution present
- [ ] Contact info accurate

#### Common Business Categories
Food Service, Personal Care, Automotive, Home Services, Professional Services, Retail, Healthcare

### 📈 SEO Keywords Template
- "[Service] [City]" (primary)
- "[Service] [City] Michigan" 
- "[Business type] near me"
- "Best [service] [City]"