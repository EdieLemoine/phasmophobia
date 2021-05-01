module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    ...process.env.NODE_ENV === 'production'
      ? [
        require('@fullhuman/postcss-purgecss')({
          css: ['./assets/style.css'],
          content: [
            './public/**/*.html',
            './src/**/*.vue',
            './src/**/*.js',
          ],
          defaultExtractor(content) {
            const contentWithoutStyleBlocks = content.replace(
              /<style[^]+?<\/style>/gi,
              '',
            );
            return (
              contentWithoutStyleBlocks.match(
                /[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g,
              ) || []
            );
          },
          safelist: [
            // Elements used from vue-tailwind
            /button|select|input|textarea|p/,
            /-(leave|enter|appear)(|-(to|from|active))$/,
            /^(?!(|.*?:)cursor-move).+-move$/,
            /^router-link(|-exact)-active$/,
            /data-v-.*/,
          ],
        }),
      ]
      : [],
    require('autoprefixer'),
  ],
};
