// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-about-css-modules-js": preferDefault(require("/Users/jleatham/Documents/Programming/gatsby/gatsby-hello-world-v2/src/pages/about-css-modules.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/jleatham/Documents/Programming/gatsby/gatsby-hello-world-v2/src/pages/about.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/jleatham/Documents/Programming/gatsby/gatsby-hello-world-v2/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/jleatham/Documents/Programming/gatsby/gatsby-hello-world-v2/src/pages/index.js"))
}

