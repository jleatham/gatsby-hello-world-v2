// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-about-js": () => import("/Users/jleatham/Documents/Programming/gatsby/gatsby-hello-world-v2/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-contact-js": () => import("/Users/jleatham/Documents/Programming/gatsby/gatsby-hello-world-v2/src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("/Users/jleatham/Documents/Programming/gatsby/gatsby-hello-world-v2/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import("/Users/jleatham/Documents/Programming/gatsby/gatsby-hello-world-v2/.cache/data.json")

