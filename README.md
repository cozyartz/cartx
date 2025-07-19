# 🤖 AI Website Builder - Cozyartz Media Group

**Transform any business into a professional website in seconds using Cloudflare Workers AI**

![AI Website Builder](https://img.shields.io/badge/AI-Powered-blue?style=for-the-badge&logo=openai)
![Cloudflare](https://img.shields.io/badge/Cloudflare-Workers%20AI-orange?style=for-the-badge&logo=cloudflare)
![Astro](https://img.shields.io/badge/Astro-5.0-purple?style=for-the-badge&logo=astro)

## 🚀 **What This Does**

This AI-powered platform instantly creates professional business websites using cutting-edge AI models. Simply provide a business name and description (or upload a restaurant menu image), and watch as AI generates:

- **Complete SEO-optimized content**
- **Professional business descriptions**  
- **Menu extraction from images** (restaurants)
- **Local Michigan market targeting**
- **Mobile-responsive layouts**
- **Ready-to-deploy configurations**

## ⚡ **Powered by Cloudflare Workers AI**

We use the latest and most capable AI models available:

| Model | Purpose | Capabilities |
|-------|---------|-------------|
| **Meta Llama 3.1 70B** | Content Generation | Business copy, descriptions, SEO content |
| **Meta Llama 4 Scout 17B** | Menu Analysis | Extract menu items from images |
| **Mistral Small 3.1 24B** | Enhanced Content | Advanced content understanding |
| **Stable Diffusion XL** | Image Generation | Professional business images |

## 🎯 **Perfect For**

- **Web Development Agencies** - 10x faster client website creation
- **Local Business Owners** - Professional websites without technical knowledge
- **Restaurant Owners** - Upload menu photo → Complete website
- **Service Businesses** - Auto-generated content for any business type

## 💎 **Key Features**

### 🍽️ **Menu Image Analysis**
Upload a restaurant menu image and AI automatically:
- Extracts all menu items with prices
- Organizes into logical categories  
- Identifies cuisine type and specials
- Formats for website display

### 🎨 **Intelligent Layout Selection**
AI automatically selects the best template:
- **Restaurant Layout** - Character mascots, menu search, cultural themes
- **Food Truck Layout** - Urban styling, pricing focus, neon effects
- **Universal Layout** - Professional services, clean design

### 🎯 **Local SEO Optimization**
- Michigan-focused keyword targeting
- Local business schema markup
- City-specific content generation
- Geographic coordinate integration

### ⚡ **Edge Performance**
- Global Cloudflare CDN deployment
- Sub-100ms AI response times
- Serverless scaling
- Zero infrastructure management

### SEO Strategy Architecture
- **Demo Landing Pages**: Professional sites with business-specific layouts showcasing local businesses across Michigan
- **Authority Building**: Each demo site includes strategic backlinks and schema markup pointing to Cozyartz Media Group  
- **Geographic Expansion**: Target different Michigan cities through various business verticals
- **Conversion Funnel**: Demo sites → Info page → Cozyartz Media Group services

### Multi-Tenant Dynamic Routing
- **Production Domain**: cartfullofx.com (main hub)
- **Dynamic Business Pages**: cartfullofx.com/[business] (e.g., cartfullofx.com/grillz, cartfullofx.com/salsas)
- **Template Selection**: Automatic layout based on business type (restaurant, foodtruck, universal)
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

## ⚡ Flexible Template System

### Template Architecture

Our flexible template system automatically selects the perfect layout based on business configuration:

- **RestaurantLayout**: For restaurants, cafes, and dining establishments with mascots, menu search, and category-based menus
- **FoodTruckLayout**: For food trucks and mobile vendors with urban styling, neon effects, and pricing focus
- **UniversalLayout**: For all other business types with professional service-focused design

### Quick Business Page Creation

#### Method 1: Interactive Generator (Recommended)
```bash
# Generate new business configuration with automatic template selection
npm run generate

# Or directly run the script
node generate-business.js
```

The interactive generator guides you through:
1. Business type selection (automatically determines template)
2. Business information (name, location, services/menu)
3. Component configuration (mascots, search, animations)
4. SEO keyword generation
5. Template-specific styling options

#### Method 2: Manual Configuration
Add businesses directly to `src/data/businesses.js` in the `businessConfigs` object:

```javascript
yourbusiness: {
  title: "Your Business - Tagline",
  description: "SEO description for your business",
  businessName: "Your Business Name",
  phone: "(269) xxx-xxxx",
  
  // Template Configuration
  layoutType: "restaurant", // "restaurant", "foodtruck", or "universal"
  components: {
    hero: "character", // Layout-specific hero style
    menu: "categories", // Menu display type
    branding: {
      mascot: { type: "chili-pepper", accessories: ["sombrero"] },
      search: true, // Enable menu search
      sparkles: true, // Add sparkle animations
      neonEffects: true // Food truck neon styling
    }
  },
  
  address: {
    street: "123 Business St",
    city: "Battle Creek", 
    state: "Michigan",
    zip: "49015"
  },
  businessType: "Restaurant",
  services: ["Service 1", "Service 2", "Service 3"],
  keywords: ["keyword1", "keyword2", "keyword3"]
}
```

### Template Types & Features

The system includes three specialized layout templates:

#### 🍽️ Restaurant Layout (`layoutType: "restaurant"`)
- **Perfect For**: Restaurants, cafes, diners, Mexican restaurants
- **Features**: Character mascots, menu search functionality, category-based menus
- **Components**: Mascot animations, menu search, cultural theming
- **Styling**: Professional restaurant branding with warm colors
- **Menu Display**: Organized by categories with descriptions and ratings

#### 🚚 Food Truck Layout (`layoutType: "foodtruck"`)
- **Perfect For**: Food trucks, mobile vendors, street food
- **Features**: Urban styling, neon effects, pricing-focused display
- **Components**: Sparkle animations, neon text effects, mobile ordering emphasis
- **Styling**: Bold urban design with high-contrast colors
- **Menu Display**: Price-focused with quick ordering call-to-actions

#### 🏢 Universal Layout (`layoutType: "universal"`)
- **Perfect For**: All other business types (salons, auto repair, contractors, retail)
- **Features**: Professional service-focused design, flexible theming
- **Components**: Custom color schemes, service highlighting
- **Styling**: Clean, professional layout adaptable to any business
- **Content Display**: Service-oriented with clear contact information

### Template Selection Guide
- **Use Restaurant Layout**: For any dining establishment with a menu
- **Use Food Truck Layout**: For mobile food vendors emphasizing quick orders
- **Use Universal Layout**: For service businesses, retail, professional services

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
│   │   ├── [business].astro      # Dynamic business routing with template selection
│   │   └── info.astro           # Service sales page
│   ├── components/
│   │   ├── SEO.astro            # Modular SEO component
│   │   ├── MenuSection.astro     # Flexible menu display component
│   │   ├── FuturisticPortfolioCarousel.astro # Dynamic portfolio with business previews
│   │   └── layouts/
│   │       ├── RestaurantLayout.astro    # Restaurant template
│   │       └── FoodTruckLayout.astro     # Food truck template
│   ├── data/
│   │   └── businesses.js         # Business configurations and template logic
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
1. Verify business is added to `businessConfigs` in `src/data/businesses.js`
2. Check slug matches URL (lowercase, no spaces)
3. Verify `layoutType` is set correctly ("restaurant", "foodtruck", or "universal")
4. Rebuild and redeploy: `npm run quick-deploy`

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

**Live on cartfullofx.com** - Your multi-tenant business landing page system is ready to dominate Michigan's local SEO!# Test deployment trigger
