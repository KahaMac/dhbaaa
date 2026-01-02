#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting deployment build process...\n');

try {
  // Check if package.json exists
  if (!fs.existsSync('package.json')) {
    throw new Error('package.json not found. Make sure you\'re in the project root.');
  }

  console.log('📦 Installing dependencies...');
  execSync('npm install --legacy-peer-deps', { stdio: 'inherit' });

  console.log('\n🔨 Building project...');
  execSync('npm run build', { stdio: 'inherit' });

  // Check if build was successful
  if (!fs.existsSync('out')) {
    throw new Error('Build failed - output directory not found');
  }

  console.log('\n✅ Build completed successfully!');
  console.log('📁 Static files generated in: ./out/');
  
  // Display deployment options
  console.log('\n🌐 Deployment Options:');
  console.log('  • Netlify: Already configured via netlify.toml');
  console.log('  • Vercel: Run "npx vercel --prod"');
  console.log('  • GitHub Pages: Push ./out/ to gh-pages branch');
  console.log('  • Manual: Upload ./out/ folder to your hosting provider');
  
  console.log('\n🎉 Ready for deployment!');

} catch (error) {
  console.error('\n❌ Deployment build failed:');
  console.error(error.message);
  process.exit(1);
}