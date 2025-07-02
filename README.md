# CartX - Multi-Tenant Business Landing Page System

A powerful Astro-based multi-tenant website system for creating professional business landing pages that drive leads to Cozyartz Media Group. Built with Cloudflare Pages for lightning-fast global delivery.

## 🏢 Business Model Overview

CartX is a **multi-tenant landing page business** designed to dominate local SEO in Michigan and beyond. Each subdomain serves as a high-quality demo landing page for local businesses, which then funnels traffic to Cozyartz Media Group for web development services.

### SEO Strategy Architecture
- **Demo Landing Pages**: Professional sites showcasing local businesses across Michigan
- **Authority Building**: Each demo site includes strategic backlinks and schema markup pointing to Cozyartz Media Group  
- **Geographic Expansion**: Target different Michigan cities through various business verticals
- **Conversion Funnel**: Demo sites → Info page → Cozyartz Media Group services

### Multi-Subdomain Structure
- **Production Domain**: cartfullofx.com (main hub)
- **Demo Subdomains**: [business].cartfullofx.com (e.g., grillz.cartfullofx.com, salsas.cartfullofx.com)
- **Info Page**: /info (Cozyartz Media Group service sales page)
- **SEO Network**: All sites contribute authority and traffic to main business

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Cloudflare account
- Domain configured in Cloudflare (cartfullofx.com)

### Initial Setup
```bash
# Clone the repository
git clone <repository-url>
cd grillz

# Install dependencies
npm install

# Install wrangler globally (recommended)
npm install -g wrangler

# Authenticate with Cloudflare
wrangler login
```

## ⚡ Business Page Generation System

### Quick Business Page Creation

#### Method 1: Interactive Generator (Recommended)
```bash
# Generate new business configuration
npm run generate

# Or directly run the script
node generate-business.js
```

The interactive generator guides you through:
1. Business type selection (Restaurant, Salon, Auto, Contractor, Retail)
2. Business information (name, location, services)
3. SEO keyword generation
4. Automatic configuration output

#### Method 2: Manual Configuration
Add businesses directly to `src/pages/[business].astro` in the `businessConfigs` object:

```javascript
yourbusiness: {
  title: "Your Business - Tagline",
  description: "SEO description for your business",
  businessName: "Your Business Name",
  phone: "(269) xxx-xxxx",
  address: {
    street: "123 Business St",
    city: "Battle Creek", 
    state: "Michigan",
    zip: "49015"
  },
  businessType: "Restaurant", // or "BeautySalon", "AutomotiveBusiness", etc.
  services: ["Service 1", "Service 2", "Service 3"],
  keywords: ["keyword1", "keyword2", "keyword3"]
}
```

### Business Types & Templates

The system includes pre-built templates for common Michigan businesses:

#### 🍽️ Restaurant Template
- **Business Type**: "Restaurant"
- **Default Services**: Dine-In, Takeout, Catering, Private Events
- **SEO Focus**: Local dining, cuisine-specific keywords
- **Hours**: Restaurant-appropriate schedule

#### 💇 Hair Salon Template  
- **Business Type**: "BeautySalon"
- **Default Services**: Hair Cuts, Coloring, Styling, Bridal Services
- **SEO Focus**: Beauty services, hair styling keywords
- **Hours**: Salon-appropriate schedule

#### 🔧 Auto Repair Template
- **Business Type**: "AutomotiveBusiness" 
- **Default Services**: Oil Changes, Brake Repair, Diagnostics
- **SEO Focus**: Auto repair, car service keywords
- **Hours**: Garage-appropriate schedule

#### 🏠 Contractor Template
- **Business Type**: "LocalBusiness"
- **Default Services**: Construction, Renovations, Remodeling
- **SEO Focus**: Home improvement, contractor keywords
- **Hours**: Contractor-appropriate schedule

#### 🛍️ Retail Template
- **Business Type**: "Store"
- **Default Services**: Product Sales, Custom Orders, Consultation
- **SEO Focus**: Retail, shopping, product keywords
- **Hours**: Retail-appropriate schedule

## 📦 Development Workflow

### Local Development
```bash
# Start Astro dev server
npm run dev
# Site available at http://localhost:4321

# Build the project
npm run build

# Test with Cloudflare Workers runtime
npm run wrangler:dev
# Available at http://localhost:8788
```

### Quick Deploy Commands
```bash
# Build and deploy to production
npm run quick-deploy

# Build and deploy to staging for demos
npm run demo-deploy

# Generate new business page
npm run generate
```

## 🎯 Client Sales Process

### Demo Generation Workflow
1. **Research**: Analyze target business (website, Google listing, competitors)
2. **Generate**: Run `npm run generate` to create business configuration
3. **Deploy Demo**: Add config to `[business].astro` and deploy to staging
4. **Present**: Show live demo at `[business].cartfullofx.com`
5. **Convert**: Use demo to sell web services

### Sales Presentation Script
```
"I've created a professional website demo specifically for [Business Name] 
at [business].cartfullofx.com. This showcases:

✅ Mobile-optimized design
✅ Local SEO optimization for [City] searches  
✅ Google Business integration
✅ Professional contact forms
✅ Fast loading speeds
✅ Social media integration

This same professional quality would be your permanent website for just $XXX 
with $XX/month hosting. Would you like to see how it performs on your phone?"
```

### Pricing Structure
- **Landing Page**: $500-800 (based on complexity)
- **Hosting**: $25-50/month (includes maintenance)
- **SEO Setup**: $200 (one-time)
- **Custom Features**: $100-300 each
- **Rush Delivery**: +50% surcharge

## 🌐 Deployment & Hosting

### Environment URLs
- **Production**: https://cartfullofx.com
- **Business Pages**: https://[business].cartfullofx.com
- **Staging**: https://cartfullofx-staging.pages.dev

### Deploy to Production
```bash
# Full build and deploy
npm run build
npm run deploy

# Or use quick command
npm run quick-deploy
```

### Deploy for Client Demos
```bash
# Deploy to staging for client presentations
npm run demo-deploy
```

## 📊 SEO & Marketing Features

### Individual Page SEO
Each business page includes:
- **Unique Meta Tags**: Title, description, keywords per business
- **Schema.org Markup**: Proper business type classification
- **Local SEO**: Geographic targeting for Michigan cities
- **Open Graph**: Social media optimization
- **Structured Data**: Hours, services, contact info

### Michigan Cities Database
Pre-configured coordinates and data for:
- Battle Creek, Kalamazoo, Grand Rapids, Detroit
- Lansing, Ann Arbor, Flint, Traverse City
- Full ZIP codes and geographic targeting

### Business Categories
Target industries across Michigan:
- **Food Service**: Restaurants, cafes, food trucks, catering
- **Personal Care**: Hair salons, nail salons, spas, barbershops  
- **Automotive**: Repair shops, dealerships, detail services
- **Home Services**: Contractors, plumbers, electricians, landscaping
- **Professional**: Lawyers, accountants, insurance, real estate
- **Retail**: Boutiques, specialty stores, gift shops
- **Healthcare**: Dentists, chiropractors, clinics, wellness centers

## 📋 Project Structure

```
/
├── src/
│   ├── pages/
│   │   ├── index.astro           # Main Cozyartz site
│   │   ├── [business].astro      # Dynamic business pages
│   │   ├── info.astro           # Service sales page
│   │   └── grillz.astro         # Legacy grillz page
│   ├── components/
│   │   └── SEO.astro            # Modular SEO component
│   └── styles/
│       └── global.css           # Tailwind styles
├── public/                      # Static assets
├── generate-business.js         # Business generator script
├── astro.config.mjs            # Astro + Cloudflare config
├── wrangler.toml               # Cloudflare Pages config
├── tailwind.config.js          # Custom Tailwind theme
└── CLAUDE.md                   # AI assistant instructions
```

## 🔧 Configuration Files

### Key Technologies
- **Framework**: Astro 5.x with SSR mode
- **Adapter**: Cloudflare Pages for server-side functionality
- **Styling**: Tailwind CSS 4.x with custom configuration
- **Icons**: FontAwesome (solid and brand icons)
- **Deployment**: Cloudflare Pages with Wrangler CLI

### Modular SEO Component
The `src/components/SEO.astro` component provides:
- Complete SEO meta tags (title, description, keywords)
- Open Graph and Twitter Card support
- Geographic and local business targeting
- Schema.org structured data (Organization, Website, LocalBusiness)
- Configurable business information and service offerings
- Easy integration with any Astro project

### Custom Tailwind Theme
- **Fonts**: Fredoka One (headers), Inter (body text)
- **Colors**: Custom accent colors (red/orange variations)
- **Brand Colors**: `accent-red`, `accent-orange` with light/dark variants
- **Dark Theme**: `dark-bg`, `dark-surface`, `dark-border`

## 🛠️ Development Shortcuts

### Quick Testing Checklist
- [ ] Page loads at `/[businessname]`
- [ ] Mobile responsive design
- [ ] SEO meta tags populated  
- [ ] Cozyartz attribution present
- [ ] Contact info accurate
- [ ] Schema markup validates
- [ ] Call-to-action buttons functional

### Michigan Cities with Coordinates
```javascript
const cities = {
  "Battle Creek": { lat: 42.3211, lng: -85.1797, zip: "49015" },
  "Kalamazoo": { lat: 42.2917, lng: -85.5872, zip: "49008" },
  "Grand Rapids": { lat: 42.9634, lng: -85.6681, zip: "49503" },
  "Detroit": { lat: 42.3314, lng: -83.0458, zip: "48201" }
};
```

### SEO Keywords Template
- `"[Service] [City]"` (primary)
- `"[Service] [City] Michigan"`  
- `"[Business type] near me"`
- `"Best [service] [City]"`

## 🔐 Environment Variables

Set environment variables via Cloudflare Pages dashboard or Wrangler:

```bash
# Set production environment variable
wrangler pages secret put VARIABLE_NAME --env production

# Set preview environment variable  
wrangler pages secret put VARIABLE_NAME --env preview

# List environment variables
wrangler pages secret list --env production
```

## 🛠️ Troubleshooting

### Common Issues

**Build Failures:**
```bash
# Clear cache and rebuild
rm -rf dist node_modules .wrangler
npm install
npm run build
```

**Authentication Issues:**
```bash
# Re-authenticate with Cloudflare
wrangler logout
wrangler login
```

**Business Page Not Loading:**
1. Verify business is added to `businessConfigs` in `[business].astro`
2. Check slug matches URL (lowercase, no spaces)
3. Rebuild and redeploy: `npm run quick-deploy`

**Generator Script Issues:**
```bash
# Test generator directly
node generate-business.js

# Check npm script
npm run generate
```

### Performance Optimization
- Images automatically optimized by Cloudflare
- CSS and JS minified during build
- Global CDN provides fast loading worldwide
- Core Web Vitals optimization built-in

## 📊 Analytics & Monitoring

### Cloudflare Analytics
1. Go to Cloudflare Dashboard → Pages
2. Select cartfullofx project  
3. View Analytics tab for traffic data
4. Monitor Core Web Vitals and performance

### SEO Monitoring
- Each business page includes unique tracking
- Schema.org markup for search engines
- Local SEO optimization per city
- Business-specific keyword targeting

## 🔄 CI/CD Integration

### GitHub Actions (Optional)
```yaml
name: Deploy CartX to Cloudflare Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: cartfullofx
          directory: dist
```

## 📚 Additional Resources

### Documentation
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Astro Documentation](https://docs.astro.build/)
- [Wrangler CLI Reference](https://developers.cloudflare.com/workers/wrangler/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### Cozyartz Media Group
- **Founded**: 2017
- **Certification**: WOSB (Women-Owned Small Business)
- **Location**: Battle Creek, Michigan 49015
- **Phone**: (269) 261-0069
- **Services**: Web Design, SEO, Digital Marketing, Part 107 Drone Services

---

## 🚀 Ready to Launch?

1. **Generate your first business**: `npm run generate`
2. **Add the configuration**: Copy output to `[business].astro`
3. **Deploy to production**: `npm run quick-deploy`
4. **Present to clients**: Show them their live demo page!

**Live on cartfullofx.com** - Your multi-tenant business landing page system is ready to dominate Michigan's local SEO!