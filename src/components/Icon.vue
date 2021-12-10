<template>
  <span v-text="getIcon(icon)" />
</template>

<script>
const icons = {
  times: '✗',
  check: '✓',
  tilde: '～',
};

export default {
  name: 'Icon',

  props: {
    icon: {
      type: String,
      default: () => '',
    },
  },

  methods: {
    getIcon(name) {
      if (icons.hasOwnProperty(name)) {
        return icons[name];
      }

      return name;
    },
  },
};
</script>
