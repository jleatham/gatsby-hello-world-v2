// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-index-js": preferDefault(require("/Users/jleatham/Documents/Programming/gatsby/gatsby-hello-world-v2/src/pages/index.js"))
}

