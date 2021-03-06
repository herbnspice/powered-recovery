const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './dist/*.html'
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  ...[purgecss],
}
