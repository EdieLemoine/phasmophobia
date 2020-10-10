<template>
  <div @click="click">
    <slot
      v-if="mutableValue"
      name="two" />
    <slot
      v-else
      name="one" />
  </div>
</template>

<script>
import { vModelMixin } from '@/mixins/vModel';

export default {
  name: 'ToggleableText',
  mixins: [vModelMixin],
  methods: {
    click() {
      this.mutableValue = !this.mutableValue;
    },
  },
};
</script>
