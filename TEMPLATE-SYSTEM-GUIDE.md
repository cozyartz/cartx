# 🎯 Flexible Template System Guide

## Overview

CartX uses a **flexible template system** that automatically selects the perfect layout based on business configuration. This system eliminates the need for separate static pages and provides dynamic, business-specific layouts.

## 🏗️ Architecture

### Core Components

1. **Dynamic Routing** (`src/pages/[business].astro`)
   - Single file handles all business pages
   - Automatic template selection based on `layoutType`
   - Fallback to universal layout for undefined types

2. **Business Configuration** (`src/data/businesses.js`)
   - Central configuration for all businesses
   - Template type selection
   - Component configuration (mascots, search, animations)
   - Theme customization

3. **Specialized Layouts** (`src/components/layouts/`)
   - `RestaurantLayout.astro` - Full-service restaurants
   - `FoodTruckLayout.astro` - Mobile food vendors
   - Universal layout (built into [business].astro)

4. **Dynamic Portfolio** (`src/components/FuturisticPortfolioCarousel.astro`)
   - Business-type-specific previews
   - Shows actual menu content
   - Layout-specific preview styling

## 📋 Template Types

### 🍽️ Restaurant Layout (`layoutType: "restaurant"`)

**Perfect For:**
- Full-service restaurants
- Cafes and diners
- Specialty cuisine (Mexican, Italian, etc.)

**Features:**
- Character mascots with animations
- Menu search functionality
- Category-based menu organization
- Cultural theming options
- Professional restaurant branding

**Configuration Example:**
```javascript
salsas: {
  layoutType: "restaurant",
  components: {
    hero: "character",
    menu: "categories", 
    branding: {
      mascot: {
        type: "chili-pepper",
        accessories: ["sombrero"],
        personality: "friendly"
      },
      search: true,
      culturalTheme: "mexican"
    }
  }
}
```

### 🚚 Food Truck Layout (`layoutType: "foodtruck"`)

**Perfect For:**
- Food trucks and trailers
- Mobile vendors
- Street food operations
- Quick-service establishments

**Features:**
- Urban styling with neon effects
- Pricing-emphasized menu display
- Sparkle animations and glow effects
- Mobile ordering focus
- Bold, high-contrast design

**Configuration Example:**
```javascript
grillz: {
  layoutType: "foodtruck",
  components: {
    hero: "food-truck",
    menu: "pricing",
    branding: {
      sparkles: true,
      neonEffects: true,
      animations: ["pulse", "glow"]
    }
  }
}
```

### 🏢 Universal Layout (`layoutType: "universal"`)

**Perfect For:**
- Service businesses (salons, auto repair, contractors)
- Professional services (legal, accounting)
- Retail stores
- Healthcare providers
- Any business not fitting restaurant/food truck categories

**Features:**
- Clean, professional design
- Service-focused content organization
- Flexible color theming
- Contact and credibility emphasis
- Adaptable to any business type

## 🚀 Adding New Businesses

### Step 1: Choose Template Type

**Decision Matrix:**
- **Restaurant** → Has a menu with categories, dine-in service
- **Food Truck** → Mobile vendor, pricing-focused, street food
- **Universal** → Everything else (services, retail, professional)

### Step 2: Configure Business

Add to `src/data/businesses.js`:

```javascript
yourbusiness: {
  // Basic Info
  title: "Your Business - Tagline",
  description: "SEO-optimized description",
  businessName: "Your Business Name",
  phone: "(269) xxx-xxxx",
  
  // Template Selection
  layoutType: "restaurant", // "restaurant", "foodtruck", or "universal"
  
  // Component Configuration
  components: {
    hero: "character", // Layout-specific hero style
    menu: "categories", // Menu/content display type
    branding: {
      // Template-specific options
      mascot: { type: "chili-pepper", accessories: ["sombrero"] },
      search: true,
      sparkles: true,
      neonEffects: true
    }
  },
  
  // Business Details
  address: { /* address object */ },
  businessType: "Restaurant",
  services: ["Service 1", "Service 2"],
  keywords: ["keyword1", "keyword2"],
  
  // Menu (for restaurants/food trucks)
  menu: {
    appetizers: [
      { name: "Item 1", price: "$8.99", description: "Description" }
    ]
  }
}
```

### Step 3: Test and Deploy

```bash
# Test locally
npm run dev
# Visit http://localhost:4321/yourbusiness

# Deploy to production
npm run build && npm run deploy
```

## 🎨 Component Configuration Options

### Restaurant Components

```javascript
components: {
  hero: "character",           // Character-based hero
  menu: "categories",          // Category-organized menu
  branding: {
    mascot: {
      type: "chili-pepper",    // Character type
      accessories: ["sombrero"], // Character accessories
      personality: "friendly"   // Character mood
    },
    search: true,              // Enable menu search
    culturalTheme: "mexican",  // Cultural styling
    numberedItems: false       // Number menu items
  }
}
```

### Food Truck Components

```javascript
components: {
  hero: "food-truck",          // Urban truck styling
  menu: "pricing",             // Price-focused display
  branding: {
    sparkles: true,            // Sparkle animations
    neonEffects: true,         // Neon text effects
    animations: ["pulse", "glow"] // Animation types
  }
}
```

### Universal Components

```javascript
components: {
  hero: "professional",        // Clean professional hero
  menu: "services",           // Service-focused display
  branding: {
    mood: "bold-urban",        // Typography mood
    // OR
    mood: "warm-traditional"   // Alternative mood
  }
}
```

## 🎯 Portfolio System

The portfolio carousel automatically generates business-specific previews:

- **Food Truck Preview**: Shows menu items with pricing in urban style
- **Restaurant Preview**: Displays menu categories with mascot
- **Universal Preview**: Shows services with professional layout

## 🔧 Development Workflow

### Adding a New Template Type

1. Create new layout component in `src/components/layouts/`
2. Add template logic to `src/pages/[business].astro`
3. Update portfolio preview in `FuturisticPortfolioCarousel.astro`
4. Document configuration options

### Testing Business Configurations

```bash
# Test specific business
npm run dev
# Visit http://localhost:4321/[business-name]

# Test all configurations
npm run build  # Catches any config errors
```

## 📊 SEO & Performance

Each template includes:
- ✅ Business-specific meta tags
- ✅ Schema.org structured data
- ✅ Local SEO optimization
- ✅ Mobile-first responsive design
- ✅ Core Web Vitals optimization
- ✅ Accessibility compliance

## 🚨 Migration Notes

**IMPORTANT**: The old static file system (`grillz.astro`, `salsas.astro`, etc.) has been replaced with this flexible template system. All business configurations are now in `src/data/businesses.js`.

### Legacy vs New System

**Old Way:**
- ❌ Separate .astro file for each business
- ❌ Code duplication across files
- ❌ Manual template creation

**New Way:**
- ✅ Single dynamic route with template selection
- ✅ Centralized business configuration
- ✅ Automatic template selection
- ✅ Component-based architecture
- ✅ Easy maintenance and scaling

## 🎯 Best Practices

1. **Template Selection**: Choose based on business operation model
2. **Component Configuration**: Use appropriate branding for business type
3. **Content Quality**: Provide detailed, local-focused content
4. **Testing**: Always test responsive design and animations
5. **SEO**: Include location-specific keywords and business details

This flexible template system provides unlimited scalability while maintaining code quality and user experience consistency across all business types.