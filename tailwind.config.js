module.exports = {
  future: {
    purgeLayersByDefault: true,
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
        'Share Tech',
        'sans-serif',
      ],
    },
  },
};
