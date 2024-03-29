const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Name Here for County', // Navigation and Site Title
  siteTitleAlt: 'Name for DA', // Alternative Site title for SEO
  siteTitleShort: 'name_for_da', // short_name for manifest
  siteHeadline: 'Join Name Here in reforming criminal justice', // Headline for schema.org JSONLD
  siteUrl: 'https://datest.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'The campaign website for Name Here',
  author: 'NameforDA', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@...', // Twitter Username
  ogSiteName: '...', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: '...',

  // Manifest and Progress color
  themeColor: tailwind.colors.red,
  backgroundColor: tailwind.colors.blue,
}
