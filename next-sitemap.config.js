/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://pubcrawl-pi.vercel.app',
    generateRobotsTxt: true, // automatski generira robots.txt
    sitemapSize: 5000,
    generateIndexSitemap: false, // koristiš samo jedan sitemap jer si SPA
  };
  