let maxTabIndex = 1;

export const generateTabIndex = {
  methods: {
    /**
     * @returns {Number}
     */
    generateTabIndex() {
      maxTabIndex++;

      return maxTabIndex;
    },
  },
};
