<template>
  <div class="flex flex-col">
    <TextElement
      v-model="entityName"
      title="Entity name..." />

    <ToggleableText
      v-model="alone"
      class="pl-2">
      <template #one>
        Responds to everyone
      </template>
      <template #two>
        Only responds to people who are alone
      </template>
    </ToggleableText>
  </div>
</template>

<script>
export default {
  name: 'EntityData',
  components: {
    TextElement: () => import('@/components/TextElement'),
    ToggleableText: () => import('@/components/ToggleableText'),
  },

  data() {
    return {
      entityName: null,
      alone: null,
    };
  },

  watch: {
    entityName() {
      this.$eventBus.save('entity-name', this.entityName);
    },
    alone() {
      this.$eventBus.save('alone', this.alone);
    },
  },

  created() {
    this.alone = this.$eventBus.load('alone');
    this.entityName = this.$eventBus.load('entity-name');

    this.$eventBus.$on('key:r', this.reset);
  },

  beforeDestroy() {
    this.$eventBus.$off('key:r', this.reset);
  },

  methods: {
    reset() {
      this.alone = false;
      this.entityName = null;
    },
  },
};
</script>
