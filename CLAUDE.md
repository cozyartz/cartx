# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Name: wantthissite

This is the **AI-Powered Website Builder** for Cozyartz Media Group, transforming how we create professional business websites using Cloudflare Workers AI. The system generates complete business websites from minimal input, including menu image analysis for restaurants.

## Business Model Overview

This is an **AI-driven website generation platform** that creates professional business websites instantly using Cloudflare's cutting-edge AI models. Each generated site serves as a high-quality demonstration of our capabilities while establishing Cozyartz Media Group as the premier AI-powered web development agency in Michigan.

### AI-Powered SEO Strategy
- **Instant Website Generation**: AI creates professional sites from business name + description
- **Menu Image Analysis**: Upload restaurant menu images → AI extracts and formats complete menu data
- **Content Optimization**: AI generates SEO-optimized copy tailored to local Michigan markets
- **Performance Analytics**: Track AI-generated content performance and conversion rates

### Platform Architecture
- **Production Domain**: wantthissite.com (AI website builder platform)
- **Demo Subdomains**: [business].wantthissite.com (e.g., grillz.wantthissite.com)
- **AI Dashboard**: Real-time website generation and management interface
- **Cloudflare Integration**: Edge-deployed AI models for sub-100ms response times

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

This is an Astro-based multi-tenant website system with **flexible template architecture** deployed on Cloudflare Pages with the following key characteristics:

### Tech Stack
- **Framework**: Astro 5.x with SSR mode (`output: 'server'`)
- **Adapter**: Cloudflare Pages adapter for server-side functionality
- **Styling**: Tailwind CSS 4.x with custom configuration
- **Icons**: FontAwesome (solid and brand icons)
- **Deployment**: Cloudflare Pages with Wrangler CLI

### Project Structure
- `src/pages/[business].astro` - **Dynamic routing with automatic template selection**
- `src/data/businesses.js` - **Central business configuration with template logic**
- `src/components/layouts/` - **Specialized layout templates (Restaurant, Food Truck, Universal)**
- `src/components/SEO.astro` - **Reusable SEO component for sharing across projects**
- `src/components/MenuSection.astro` - **Flexible menu display component**
- `src/components/FuturisticPortfolioCarousel.astro` - **Dynamic portfolio with business-specific previews**
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

### Flexible Template System

#### Template Architecture
1. **RestaurantLayout** (`layoutType: "restaurant"`)
   - Mascot characters with animations
   - Menu search functionality
   - Category-based menu display
   - Cultural theming (Mexican, Italian, etc.)
   
2. **FoodTruckLayout** (`layoutType: "foodtruck"`)
   - Urban styling with neon effects
   - Pricing-focused menu display
   - Sparkle animations and mobile ordering emphasis
   - High-contrast colors and bold typography
   
3. **UniversalLayout** (`layoutType: "universal"`)
   - Professional service-focused design
   - Flexible color theming
   - Service-oriented content display
   - Clean, adaptable styling

#### Creating New Business Landing Pages
1. **Research**: Local business analysis and template selection
2. **Configuration**: Add to `src/data/businesses.js` with appropriate `layoutType`
3. **Components**: Configure mascots, search, animations based on business type
4. **Content**: Business-specific menu/services, contact info, hours
5. **SEO**: Local schema markup, geo-targeted meta tags
6. **Testing**: Template-specific features, mobile responsiveness, animations

#### Business Verticals & Template Mapping
- **Restaurants** → RestaurantLayout: Cafes, diners, specialty cuisine, Mexican restaurants
- **Food Trucks** → FoodTruckLayout: Mobile vendors, street food, quick service
- **Service Businesses** → UniversalLayout: Contractors, repair services, consultants
- **Retail** → UniversalLayout: Local shops, boutiques, specialty stores
- **Healthcare** → UniversalLayout: Clinics, dentists, chiropractors, wellness
- **Professional Services** → UniversalLayout: Legal, accounting, real estate

#### Development Workflow
1. Run `npm run dev` for local development
2. Test template selection with `http://localhost:4321/[business]`
3. Use `npm run wrangler:dev` to test Cloudflare Workers functionality locally
4. Build with `npm run build` before deployment
5. Deploy to staging first: `npm run build && npm run deploy:staging`
6. Deploy to production: `npm run build && npm run deploy`

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
Add businesses directly to `src/data/businesses.js` businessConfigs object with template configuration.

### 📋 Business Type Templates

#### Restaurant Template (`layoutType: "restaurant"`)
```javascript
businessname: {
  title: "Business Name - Authentic [Cuisine] Cuisine",
  description: "Authentic [cuisine] restaurant in [City], Michigan. [Unique selling point].",
  businessType: "Restaurant",
  layoutType: "restaurant",
  components: {
    hero: "character",
    menu: "categories",
    branding: {
      mascot: { type: "chili-pepper", accessories: ["sombrero"] },
      search: true,
      culturalTheme: "mexican"
    }
  },
  services: ["Dine-In Service", "Takeout & Delivery", "Catering", "Private Events"],
  keywords: ["restaurant [city]", "authentic [cuisine] Michigan", "[specialty dish]"]
}
```

#### Food Truck Template (`layoutType: "foodtruck"`)
```javascript
businessname: {
  title: "Business Name - Premium Street Food",
  businessType: "Restaurant",
  layoutType: "foodtruck",
  components: {
    hero: "food-truck",
    menu: "pricing",
    branding: {
      sparkles: true,
      neonEffects: true,
      animations: ["pulse", "glow"]
    }
  },
  services: ["Mobile Orders", "Event Catering", "Daily Specials"],
  keywords: ["food truck [city]", "street food Michigan", "mobile catering"]
}
```

#### Service Business Template (`layoutType: "universal"`)
```javascript
businessname: {
  title: "Business Name - Professional Services",
  businessType: "LocalBusiness", 
  layoutType: "universal",
  services: ["Service 1", "Service 2", "Service 3", "Consultations"],
  keywords: ["service [city]", "professional [service] Michigan", "[business type]"]
}
```

### 🎯 Client Sales Process

#### Demo Generation Steps
1. Research target business (website, Google listing, competitors)
2. Run `node generate-business.js` to create configuration
3. Add config to src/data/businesses.js with appropriate layoutType
4. Deploy demo: `npm run build && npm run deploy`
5. Present live demo at cartfullofx.com/[business]

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