<template>
  <div
    v-click-outside="() => toggle = false"
    class="inline-flex text-xl">
    <div
      :is="tag"
      v-show="!toggle"
      class="my-auto p-2"
      :class="{
        ['text-gray-700']: !mutableValue,
      }"
      @click.prevent="edit"
      v-text="mutableValue || title" />

    <TInput
      v-show="toggle"
      ref="input"
      v-model.lazy="mutableValue"
      tabindex="0"
      class="inline-block my-auto"
      type="text"
      @keyup.enter="toggle = false"
      @keyup.esc="toggle = false"
      @keyup.tab="toggle = false" />
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';
import { vModelMixin } from '@/mixins/vModel';

export default {
  name: 'TextElement',
  directives: {
    ClickOutside,
  },

  mixins: [vModelMixin],

  props: {
    tag: {
      type: String,
      default: () => 'p',
    },
    title: {
      type: String,
      default: () => 'Type something...',
    },
    text: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      toggle: false,
    };
  },

  methods: {
    async edit() {
      if (!this.toggle) {
        this.toggle = true;

        await this.$nextTick();
        this.$refs.input.focus();
      }
    },
  },
};
</script>
