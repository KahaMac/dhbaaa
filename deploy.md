# Deployment Guide

This Next.js project is configured for static export and can be deployed to multiple platforms.

## Current Configuration

- **Output**: Static export (`output: 'export'`)
- **Build Command**: `npm run build`
- **Output Directory**: `out/`
- **Node Version**: 18+

## Deployment Options

### 1. Netlify (Current Setup)

The project is already configured for Netlify deployment via `netlify.toml`.

**Automatic Deployment:**
1. Connect your repository to Netlify
2. Netlify will automatically use the `netlify.toml` configuration
3. Build command: `npm install --legacy-peer-deps && npm run build`
4. Publish directory: `out`

**Manual Deployment:**
```bash
npm install --legacy-peer-deps
npm run build
# Upload the 'out' folder to Netlify
```

### 2. Vercel

**Automatic Deployment:**
1. Connect repository to Vercel
2. Vercel will auto-detect Next.js configuration
3. No additional configuration needed

**Manual Deployment:**
```bash
npm install --legacy-peer-deps
npm run build
npx vercel --prod
```

### 3. GitHub Pages

**Setup:**
1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"

**Manual Deployment:**
```bash
npm install --legacy-peer-deps
npm run build
# Push the 'out' folder to gh-pages branch
```

### 4. AWS S3 + CloudFront

**Manual Deployment:**
```bash
npm install --legacy-peer-deps
npm run build
aws s3 sync out/ s3://your-bucket-name --delete
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

### 5. Firebase Hosting

**Setup:**
```bash
npm install -g firebase-tools
firebase init hosting
```

**Deploy:**
```bash
npm install --legacy-peer-deps
npm run build
firebase deploy
```

## Build Process

The build process creates a static export in the `out/` directory:

1. **Install dependencies**: `npm install --legacy-peer-deps`
2. **Build project**: `npm run build`
3. **Output**: Static files in `out/` directory

## Environment Variables

If your project uses environment variables, make sure to configure them in your deployment platform:

- `NEXT_PUBLIC_*` variables for client-side
- Server-side variables for API routes (if any)

## Troubleshooting

### Common Issues:

1. **Peer dependency warnings**: Use `--legacy-peer-deps` flag
2. **Image optimization**: Disabled via `unoptimized: true`
3. **TypeScript errors**: Ignored via `ignoreBuildErrors: true`
4. **Trailing slashes**: Enabled for static hosting compatibility

### Build Verification:

```bash
npm run build
cd out
npx serve .
```

## Quick Deploy Commands

**For Netlify:**
```bash
npm install --legacy-peer-deps && npm run build
```

**For other platforms:**
```bash
npm install --legacy-peer-deps
npm run build
# Deploy the 'out' folder
```