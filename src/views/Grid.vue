<template>
  <div
    class="bg-black border grid inline-block mb-5 mt-2 overflow-hidden p-2 relative rounded w-full"
    :class="colsClass">
    <slot />
  </div>
</template>

<script>
import { gridColsClassMap } from '@/services/tailwind/GridColsClassMap';

export default {
  name: 'Grid',
  props: {
    cols: {
      type: [Number, String],
      default: 1,
    },
  },

  computed: {
    colsClass() {
      return gridColsClassMap.get(this.cols);
    },
  },
};
</script>
