<template>
  <div class="flex">
    <button
      class="duration-100 flex-grow p-2 transition-colors"
      :class="{
        'text-red-500 hover:text-red-100 hover:bg-red-500': 'not_likely' !== value && !disabled,
        'text-red-100 bg-red-800': 'not_likely' === value,
      }"
      type="button"
      @click="onClick('not_likely')">
      <Icon icon="times" />
    </button>

    <button
      class="duration-100 flex-grow p-2 transition-colors"
      :class="{
        'text-gray-500 hover:text-gray-100 hover:bg-gray-500': 'maybe' !== value && !disabled,
        'text-gray-100 bg-gray-900': 'maybe' === value && !disabled,
      }"
      type="button"
      @click="onClick('maybe')">
      <Icon icon="tilde" />
    </button>

    <button
      class="duration-100 flex-grow p-2 transition-colors"
      :class="{
        'text-green-500 hover:text-green-100 hover:bg-green-500': 'confirmed' !== value && !disabled,
        'text-green-100 bg-green-800': 'confirmed' === value,
      }"
      type="button"
      @click="onClick('confirmed')">
      <Icon icon="check" />
    </button>
  </div>
</template>

<script>
import Icon from '@/components/Icon';
import { vModelMixin } from '@/mixins/vModel';

export default {
  name: 'EvidenceSelect',
  components: { Icon },
  mixins: [
    vModelMixin,
  ],

  props: {
    disabled: {
      type: Boolean,
    },

    value: {
      type: String,
      default: () => 'maybe',
    },
  },

  methods: {
    onClick(type) {
      if (this.disabled) {
        return;
      }

      if (type !== 'maybe' && this.mutableValue === type) {
        type = 'maybe';
      }

      this.mutableValue = type;
    },
  },
};
</script>
