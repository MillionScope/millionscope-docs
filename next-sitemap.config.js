module.exports = {
    siteUrl: process.env.SITE_URL || 'http://localhost:3000',
    generateRobotsTxt: true, // (Optional) to generate robots.txt
    sitemapSize: 5000, // Maximum number of URLs per sitemap file
    changefreq: 'daily', // Set the change frequency
    priority: 0.7, // Set the default priority
    sourceDir:'build'
  }
  