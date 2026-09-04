#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const staticDir = path.join(rootDir, 'storybook-static');

console.log('🚀 Starting Storybook build and Vercel readiness check...\n');

try {
  console.log('📦 Step 1: Building static Storybook bundle...');
  execSync('npm run build-storybook', { cwd: rootDir, stdio: 'inherit' });

  if (!fs.existsSync(staticDir)) {
    throw new Error('❌ storybook-static directory was not created.');
  }

  const files = fs.readdirSync(staticDir);
  console.log('✅ Build successful. Generated static Storybook files.');
  console.log(`Files found: ${files.slice(0, 10).join(', ')}${files.length > 10 ? '...' : ''}\n`);

  console.log('🌐 Step 2: Vercel deployment is ready');
  console.log('----------------------------------------------------');
  console.log('• Manually deploy with: npx vercel --prod');
  console.log('• Or link this repo in the Vercel dashboard.');
  console.log('----------------------------------------------------\n');

  if (process.env.VERCEL_TOKEN) {
    console.log('🔑 VERCEL_TOKEN detected. Triggering automated deployment...');
    execSync(`npx vercel --token ${process.env.VERCEL_TOKEN} --prod --yes`, {
      cwd: rootDir,
      stdio: 'inherit',
    });
  } else {
    console.log('💡 Set VERCEL_TOKEN to trigger a production deploy automatically.');
  }
} catch (error) {
  console.error('\n❌ Deployment failed with error:', error.message);
  process.exit(1);
}