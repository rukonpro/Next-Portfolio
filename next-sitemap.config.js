const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://rukonpro.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  autoLastmod: true,
  exclude: [
    '/dashboard',
    '/dashboard/*',
    '/blogForm',
    '/blogForm/*',
    '/api/*',
    '/not-found',
  ],

  // Generate dynamic paths from the database
  additionalPaths: async (config) => {
    try {
      const blogs = await prisma.blog.findMany({
        select: {
          id: true,
          updatedAt: true,
        },
      });

      const projects = await prisma.project.findMany({
        select: {
          id: true,
        },
      });

      const blogPaths = blogs.map((blog) => ({
        loc: `/blogs/${blog.id}`,
        lastmod: blog.updatedAt.toISOString(),
        changefreq: 'monthly',
        priority: 0.8,
      }));

      const projectPaths = projects.map((project) => ({
        loc: `/portfolios/${project.id}`,
        lastmod: new Date().toISOString(), // Fallback since no updatedAt
        changefreq: 'monthly',
        priority: 0.8,
      }));

      return [...blogPaths, ...projectPaths];
    } catch (error) {
      console.error('Error fetching dynamic paths for sitemap:', error);
      return [];
    } finally {
      await prisma.$disconnect();
    }
  },

  // Transform is now simpler, only for static pages
  transform: async (config, path) => {
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (['/blogs', '/portfolios'].includes(path)) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (
      ['/about', '/contact', '/services', '/skills', '/price'].includes(path)
    ) {
      priority = 0.7;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/dashboard', '/blogForm'],
      },
    ],
    additionalSitemaps: [
      `${process.env.SITE_URL || 'https://rukonpro.vercel.app'}/sitemap.xml`,
    ],
  },
};
  