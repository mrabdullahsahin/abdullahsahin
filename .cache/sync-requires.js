const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-js": hot(preferDefault(require("/Users/abdullah/Desktop/Github/mrabdullahsahin.github.io/src/templates/blog.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/abdullah/Desktop/Github/mrabdullahsahin.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/abdullah/Desktop/Github/mrabdullahsahin.github.io/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/abdullah/Desktop/Github/mrabdullahsahin.github.io/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/abdullah/Desktop/Github/mrabdullahsahin.github.io/src/pages/blog.js"))),
  "component---src-pages-comingsoonpage-js": hot(preferDefault(require("/Users/abdullah/Desktop/Github/mrabdullahsahin.github.io/src/pages/comingsoonpage.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/abdullah/Desktop/Github/mrabdullahsahin.github.io/src/pages/index.js"))),
  "component---src-pages-openstartup-js": hot(preferDefault(require("/Users/abdullah/Desktop/Github/mrabdullahsahin.github.io/src/pages/openstartup.js"))),
  "component---src-pages-yearlygoal-js": hot(preferDefault(require("/Users/abdullah/Desktop/Github/mrabdullahsahin.github.io/src/pages/yearlygoal.js")))
}

