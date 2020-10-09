const purgeCss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'
      ? [
        purgeCss({
          content: [
            './public/*.html',
            './src/**/*.html',
            './src/**/*.js',
            './src/**/*.vue',
          ],

          defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
        }),
      ]
      : [],
  ],
};
