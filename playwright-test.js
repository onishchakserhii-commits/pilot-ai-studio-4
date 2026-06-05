const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('PAGE ERROR LOG:', msg.text());
    }
  });
  page.on('pageerror', error => {
    console.log('PAGE EXCEPTION:', error.message);
  });
  
  console.log('Navigating to site...');
  await page.goto('https://pilot-ai-studio.vercel.app/', { waitUntil: 'networkidle' });
  await new Promise(r => setTimeout(r, 3000));
  
  await browser.close();
  console.log('Done');
})();
