// Copies the game into www/ for the Android app, swapping Google Fonts for the bundled copies
// so the app works offline.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

let html = readFileSync('index.html', 'utf8');
html = html
  .replace(/<link rel="preconnect"[^>]*>\s*/g, '')
  .replace(/<link rel="stylesheet" href="https:\/\/fonts\.googleapis\.com[^>]*>/, '<link rel="stylesheet" href="fonts/fonts.css">');
if (html.includes('fonts.googleapis.com')) throw new Error('Google Fonts link was not replaced');
mkdirSync('www', { recursive: true });
writeFileSync('www/index.html', html);
console.log(`www/index.html written (${(html.length / 1024).toFixed(0)} KB)`);
