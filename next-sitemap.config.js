/**
 * @type {import('next-sitemap').IConfig}
 * @see https://github.com/iamvishnusankar/next-sitemap#readme
 */
module.exports = {
  // TODO: Change the siteUrl
  /** Without additional '/' on the end, e.g. https://watchshop.netlify.com */
  siteUrl: 'https://watchshop.netlify.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
