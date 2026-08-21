#!/usr/bin/env node
/**
 * Vercel Deployment Helper Script for Storybook Design System
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const staticDir = path.join(rootDir, 'storybook-static');

console.log('🚀 Starting Storybook build & Vercel deployment check...\n');

try {
  // 1. Build Storybook
  console.log('📦 Step 1: Building static Storybook bundle...');
  execSync('npm run build-storybook', { cwd: rootDir, stdio: 'inherit' });

  // 2. Validate output directory
  if (!fs.existsSync(staticDir)) {
    throw new Error('❌ storybook-static directory was not created!');
  }
  const files = fs.readdirSync(staticDir);
  console.log(✅ Build successful! Generated  output files/folders in storybook-static.\n);

  // 3. Deployment status
  console.log('🌐 Step 2: Vercel Deployment Ready');
  console.log('----------------------------------------------------');
  console.log('• To deploy manually with Vercel CLI:');
  console.log('    npx vercel --prod');
  console.log('• Or link your Git repository to Vercel.');
  console.log('  Configuration in vercel.json is already optimized for Storybook static hosting.');
  console.log('----------------------------------------------------\n');

  if (process.env.VERCEL_TOKEN) {
    console.log('🔑 VERCEL_TOKEN detected. Triggering automated deployment...');
    execSync(
px vercel --token  --prod --yes, {
      cwd: rootDir,
      stdio: 'inherit',
    });
  } else {
    console.log('💡 Note: Set VERCEL_TOKEN environment variable or run npx vercel to deploy directly.');
  }
} catch (error) {
  console.error('\n❌ Deployment failed with error:', error.message);
  process.exit(1);
}
