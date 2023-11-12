/**
 * @type {import('next-sitemap').IConfig}
 * @see https://github.com/iamvishnusankar/next-sitemap#readme
 */
module.exports = {
  // TODO: Change the siteUrl
  /** Without additional '/' on the end, e.g. https://yoursite.netlify.com */
  siteUrl: 'https://peaceful-vacherin-ca0e33.netlify.app/',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
