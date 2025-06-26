# Grillz - Cloudflare Pages Deployment

A modern Astro website deployed on Cloudflare Pages with custom domain support.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Cloudflare account
- Domain configured in Cloudflare (cartfullofx.com)

### Initial Setup
```bash
# Install dependencies
npm install

# Install wrangler globally (recommended)
npm install -g wrangler

# Authenticate with Cloudflare
wrangler login
```

## 📦 Development

### Local Development
```bash
# Start Astro dev server
npm run dev
# Site available at http://localhost:4321

# Build the project
npm run build

# Preview built site locally
npm run preview

# Test with Cloudflare Workers runtime
npm run wrangler:dev
```

## 🌐 Deployment Commands

### First Time Setup
```bash
# Create Cloudflare Pages project
wrangler pages project create grillz

# Create staging project (optional)
wrangler pages project create grillz-staging
```

### Deploy to Staging
```bash
# Build and deploy to staging environment
npm run build
npm run deploy:staging

# Or combine in one command
npm run build && npm run deploy:staging
```

### Deploy to Production
```bash
# Build and deploy to production (cartfullofx.com)
npm run build
npm run deploy

# Or combine in one command
npm run build && npm run deploy
```

### Quick Deploy Script
```bash
# Complete build and deploy to production
npm run build && wrangler pages deploy dist --project-name grillz
```

## 🔧 Wrangler Commands

### Project Management
```bash
# List all Pages projects
wrangler pages project list

# View project details
wrangler pages project get grillz

# Delete a project
wrangler pages project delete grillz-staging
```

### Deployment Management
```bash
# List deployments
wrangler pages deployment list --project-name grillz

# View specific deployment
wrangler pages deployment get <deployment-id> --project-name grillz

# Delete a deployment
wrangler pages deployment delete <deployment-id> --project-name grillz
```

### Domain Configuration
```bash
# Add custom domain to project
wrangler pages domain add cartfullofx.com --project-name grillz

# List custom domains
wrangler pages domain list --project-name grillz

# Remove custom domain
wrangler pages domain remove cartfullofx.com --project-name grillz
```

### Logs and Monitoring
```bash
# View real-time logs
wrangler pages deployment tail --project-name grillz

# View functions logs (if using functions)
wrangler tail --env production
```

## 🌍 Environment URLs

- **Production**: https://cartfullofx.com
- **Staging**: https://grillz-staging.pages.dev
- **Auto-generated**: https://grillz.pages.dev

## 📋 Project Structure

```
/
├── public/             # Static assets
├── src/
│   ├── pages/         # Astro pages (file-based routing)
│   └── styles/        # CSS/Tailwind styles
├── dist/              # Built site (generated)
├── astro.config.mjs   # Astro configuration
├── wrangler.toml      # Cloudflare Pages configuration
└── package.json       # Dependencies and scripts
```

## ⚙️ Configuration Files

### `wrangler.toml`
- Defines project settings and environments
- Production environment uses custom domain
- Staging environment uses pages.dev subdomain

### `astro.config.mjs`
- Configured with Cloudflare adapter
- Static site generation enabled
- Platform proxy enabled for local development

## 🔐 Environment Variables

For sensitive configuration, use Cloudflare Pages environment variables:

```bash
# Set environment variable for production
wrangler pages secret put VARIABLE_NAME --env production

# Set environment variable for staging
wrangler pages secret put VARIABLE_NAME --env staging

# List environment variables
wrangler pages secret list --env production
```

## 🛠️ Troubleshooting

### Common Issues

**Build Failures:**
```bash
# Clear cache and rebuild
rm -rf dist node_modules
npm install
npm run build
```

**Authentication Issues:**
```bash
# Re-authenticate with Cloudflare
wrangler logout
wrangler login
```

**Domain Not Working:**
1. Verify domain is added to Cloudflare
2. Check DNS settings point to Cloudflare
3. Ensure custom domain is added to Pages project:
   ```bash
   wrangler pages domain add cartfullofx.com --project-name grillz
   ```

**Deployment Stuck:**
```bash
# Check deployment status
wrangler pages deployment list --project-name grillz

# Force new deployment
npm run build && wrangler pages deploy dist --project-name grillz
```

### Performance Optimization
- Images are automatically optimized by Cloudflare
- CSS and JS are minified during build
- Global CDN provides fast loading worldwide
- Enable Browser Cache TTL in Cloudflare dashboard for static assets

## 📊 Analytics and Monitoring

Access analytics in Cloudflare Dashboard:
1. Go to Pages section
2. Select your project (grillz)
3. View Analytics tab for traffic data
4. Monitor Core Web Vitals and performance metrics

## 🔄 CI/CD Integration

For automated deployments, add to GitHub Actions:

```yaml
name: Deploy to Cloudflare Pages
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
          projectName: grillz
          directory: dist
```

## 📞 Support

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Astro Documentation](https://docs.astro.build/)
- [Wrangler CLI Reference](https://developers.cloudflare.com/workers/wrangler/)

---

**Ready to deploy?** Run `npm run build && npm run deploy` to go live on cartfullofx.com!