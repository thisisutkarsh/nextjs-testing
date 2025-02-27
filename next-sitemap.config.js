/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://holisticpediatrician.in/',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  transform: async (config, path) => {
    return {
      loc: path.endsWith('/') ? path.slice(0, -1) : path, // Remove trailing slash
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
