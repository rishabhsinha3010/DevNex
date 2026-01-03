import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import { preview } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dist = path.join(__dirname, 'dist');

const routes = [
    '/',
    '/about',
    '/services/web-dev',
    '/services/app-dev',
    '/portfolio',
    '/pricing',
    '/labs',
    '/coming-soon',
    '/start'
];

(async () => {
    console.log('Starting prerender...');

    // Start the preview server
    const server = await preview({
        root: __dirname,
        build: { outDir: 'dist' },
        preview: { port: 3000 }
    });

    const browser = await puppeteer.launch({ headless: true });

    try {
        for (const route of routes) {
            console.log(`Prerendering ${route}...`);
            const page = await browser.newPage();
            await page.goto(`http://localhost:3000${route}`, { waitUntil: 'networkidle0' });

            // Allow a bit of extra time for hydration if needed
            await new Promise(r => setTimeout(r, 500));

            const content = await page.content();

            // Manipulate content: replace localhost with production domain
            const finalHtml = content
                .replace(/http:\/\/localhost:3000/g, 'https://devnex.in')
                .replace(/localhost:3000/g, 'devnex.in');

            // Ensure directory exists
            const routePath = route === '/' ? '/index.html' : `${route}/index.html`;
            const filePath = path.join(dist, routePath);
            const dirPath = path.dirname(filePath);

            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath, { recursive: true });
            }

            fs.writeFileSync(filePath, finalHtml);
            console.log(`Saved ${filePath}`);
            await page.close();
        }
    } catch (e) {
        console.error('Error during prerender:', e);
        process.exit(1);
    } finally {
        await browser.close();
        server.httpServer.close();
        console.log('Prerender complete.');
        process.exit(0);
    }
})();
