import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/web-development', changefreq: 'weekly', priority: 0.8 },
  { url: '/digital-marketing', changefreq: 'weekly', priority: 0.8 },
  { url: '/data-analytics', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
];

async function generateSitemap() {
  const stream = new SitemapStream({ hostname: 'https://innoversedigital.in' });
  const writeStream = createWriteStream('./public/sitemap.xml');

  stream.pipe(writeStream);

  links.forEach(link => stream.write(link));

  stream.end();
  await streamToPromise(stream);
}

generateSitemap();
