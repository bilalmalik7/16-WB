// Builds www/: the folder served by Vercel and packaged into the Android app.
// Copies the game and privacy policy, swapping Google Fonts for the bundled copies so it works offline.
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs';

let html = readFileSync('index.html', 'utf8');
html = html
  .replace(/<link rel="preconnect"[^>]*>\s*/g, '')
  .replace(/<link rel="stylesheet" href="https:\/\/fonts\.googleapis\.com[^>]*>/, '<link rel="stylesheet" href="fonts/fonts.css">');
if (html.includes('fonts.googleapis.com')) throw new Error('Google Fonts link was not replaced');
mkdirSync('www', { recursive: true });
writeFileSync('www/index.html', html);
copyFileSync('privacy.html', 'www/privacy.html');
console.log(`www/index.html written (${(html.length / 1024).toFixed(0)} KB)`);
