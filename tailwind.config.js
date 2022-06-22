module.exports = {
  // Purging is handled in postcss.config.js
  purge: false,
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  variants: {
    backgroundColor: [
      'active',
      'focus',
      'group-focus',
      'group-hover',
      'hover',
      'responsive',
    ],
    zIndex: [
      'hover',
      'focus',
    ],
    boxShadow: [
      'hover',
      'focus',
    ],
    scale: [
      'active',
      'focus',
      'group-hover',
      'hover',
      'responsive',
    ],
  },

  theme: {
    borderColor: (theme) => ({
      ...theme('colors'),
      default: theme('colors.gray.600', 'currentColor'),
    }),
    borderRadius: {
      default: '8px',
    },
    boxShadow: {
      outline: '0 0 0 3px rgb(255 255 255 / 0.75)',
    },
    fontFamily: {
      sans: [
        'Rajdhani',
        'sans-serif',
      ],
    },
  },
};
