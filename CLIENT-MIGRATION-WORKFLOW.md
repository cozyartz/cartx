# 🚀 Client Migration Workflow

This document explains how to develop client sites under your main domain and easily migrate them to standalone domains when clients approve.

## 📋 Workflow Overview

1. **Development Phase**: Build client sites as subpaths (`cartfullofx.com/grillz`)
2. **Demo Phase**: Show professional demo to clients
3. **Approval Phase**: Client commits to the project
4. **Migration Phase**: Extract and deploy to standalone domain
5. **Custom Domain**: Connect client's purchased domain

## 🛠️ Commands

### Development
```bash
# Start development server (shows all sites)
npm run dev

# Visit your business demos:
# http://localhost:4321/grillz
# http://localhost:4321/salsas
```

### Client Migration
```bash
# Test migration (dry run)
npm run migrate grillz --dry-run

# Extract business to standalone project
npm run migrate:grillz

# Deploy standalone site to Cloudflare Pages
npm run deploy:grillz
```

### Quick Commands
```bash
# Individual business migration
npm run migrate:grillz          # Extract grillz to standalone
npm run migrate:salsas          # Extract salsas to standalone

# Direct deployment
npm run deploy:grillz           # Extract + deploy grillz
npm run deploy:salsas           # Extract + deploy salsas
```

## 📁 Project Structure

```
cartfullofx/
├── src/
│   ├── data/businesses.js      # All business configurations
│   ├── pages/[business].astro  # Dynamic business pages
│   └── components/             # Shared components
├── scripts/
│   └── migrate-business.js     # Migration script
├── dist/
│   ├── grillz-standalone/      # Extracted grillz project
│   └── grillz-deployment-instructions.md
└── package.json                # Migration scripts
```

## 🔄 Business Configuration

Each business in `src/data/businesses.js` includes:

```javascript
{
  // Standard business info...
  businessName: "Grillz Food Truck",
  
  // Deployment configuration
  deployment: {
    subdomain: "grillz.cartfullofx.com",
    customDomain: null,              // Set when client buys domain
    cloudflareProjectId: null,       // Set after deployment
    migrationReady: true            // Ready for standalone deployment
  }
}
```

## 🎯 Client Sales Process

### 1. Development
- Add business to `src/data/businesses.js`
- Test at `localhost:4321/grillz`
- Deploy to staging: `npm run demo-deploy`

### 2. Client Demo
- Show live demo: `https://cartfullofx.com/grillz`
- Professional presentation with your futuristic portfolio
- No domain costs yet!

### 3. Client Approval
- Run: `npm run deploy:grillz`
- Client sees preview: `https://grillz.pages.dev`
- Client purchases domain (e.g., `grillz.com`)

### 4. Domain Connection
- Go to Cloudflare Pages dashboard
- Add custom domain `grillz.com`
- Update DNS as instructed
- Site goes live on client domain!

## 🏷️ URL Behavior

The system automatically adapts URLs based on deployment mode:

- **Development**: `cartfullofx.com/grillz`
- **Standalone**: `grillz.pages.dev` → `grillz.com`
- **Portfolio**: Shows appropriate URLs in carousel

## ⚡ Migration Benefits

- ✅ **No upfront domain costs** - develop without buying domains
- ✅ **Professional demos** - high-quality client presentations  
- ✅ **Easy migration** - one command deploys standalone site
- ✅ **Configurable URLs** - portfolio adapts to deployment mode
- ✅ **Scalable workflow** - handle unlimited clients efficiently

## 🚨 Important Notes

- Set `migrationReady: true` when business is ready for standalone deployment
- The migration script preserves all business data and styling
- Each standalone deployment is completely independent
- Custom domains can be connected anytime after deployment

## 🔧 Troubleshooting

### Migration Script Issues
```bash
# Check if business exists
node scripts/migrate-business.js grillz --dry-run

# Manual deployment
cd dist/grillz-standalone
npm install
npm run build
wrangler pages deploy dist --project-name grillz
```

### Domain Connection Issues
1. Ensure domain is purchased and DNS is accessible
2. Add custom domain in Cloudflare Pages dashboard  
3. Follow exact DNS instructions provided by Cloudflare
4. SSL certificates are automatically provisioned

---

This workflow eliminates domain costs during development while providing seamless migration to professional standalone sites when clients approve! 🎉