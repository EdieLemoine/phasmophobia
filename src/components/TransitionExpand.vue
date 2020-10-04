<template>
  <transition
    name="expand"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
    @after-leave="() => $emit('leave-end')">
    <slot />
  </transition>
</template>

<script>
// Credits: https://markus.oberlehner.net/blog/transition-to-height-auto-with-vue/
export default {
  name: 'TransitionExpand',

  methods: {
    enter(element) {
      this.$emit('enter-start');

      element.style.width = getComputedStyle(element).width;
      element.style.position = 'absolute';
      element.style.visibility = 'hidden';
      element.style.height = 'auto';

      const { height } = getComputedStyle(element);

      element.style.width = null;
      element.style.position = null;
      element.style.visibility = null;
      element.style.height = 0;
      // eslint-disable-next-line babel/no-unused-expressions
      getComputedStyle(element).height;
      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
      this.$emit('enter-end');
    },
    leave(element) {
      this.$emit('leave-start');

      element.style.height = getComputedStyle(element).height;

      // eslint-disable-next-line babel/no-unused-expressions
      getComputedStyle(element).height;
      setTimeout(() => {
        element.style.height = 0;
      });
    },
  },
};
</script>

<style scoped>
* {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>
