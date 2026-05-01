import fs from 'fs';
import path from 'path';
import { localNotes } from './src/lib/localNotes.js';

const DOMAIN = 'https://www.mateapp.tech';

function generateSitemap() {
    const urls = [];

    // Core static pages
    const corePages = ['/', '/contact', '/notes', '/dashboard', '/favorites', '/about', '/upload'];
    
    corePages.forEach(page => {
        urls.push(`
  <url>
    <loc>${DOMAIN}${page === '/' ? '' : page}</loc>
    <changefreq>daily</changefreq>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>`);
    });

    // Dynamic Subject pages based on localNotes
    localNotes.forEach(subject => {
        urls.push(`
  <url>
    <loc>${DOMAIN}/subject/${subject.id}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`);
    });

    const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join('')}
</urlset>`;

    // Write to the public folder
    const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemapXML);
    
    console.log(`✅ Sitemap automatically generated with ${urls.length} URLs!`);
}

generateSitemap();
