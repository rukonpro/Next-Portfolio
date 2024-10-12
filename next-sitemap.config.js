/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://rukonpro.vercel.app', // Replace with your actual site URL
    generateRobotsTxt: true, // (optional) Generate a robots.txt file
    changefreq: 'weekly', // Define how often the content changes
    priority: 0.7, // Default priority of all pages
    sitemapSize: 5000, // Maximum number of entries per sitemap
    autoLastmod: true, // Automatically add lastmod timestamp
    exclude: ['/dashboard/*'], // Example of excluding paths
    transform: async (config, path) => {
      return {
        loc: path, // The page URL
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    },
  };
  