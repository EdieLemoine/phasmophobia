<template>
  <div>
    <TTag
      v-if="title"
      tag-name="h2"
      variant="title">
      <span v-text="title" />
    </TTag>
    <TTextarea
      v-model="value"
      tabindex="0"
      placeholder="one entry per line or comma separated"
      name=""
      rows="4"
      @keydown.enter="save" />
  </div>
</template>

<script>
export default {
  name: 'ListTextArea',

  props: {
    title: {
      type: String,
      default: null,
    },
    items: {
      type: Array,
      default: null,
    },
  },

  data() {
    return {
      value: '',
      split: null,
    };
  },

  beforeMount() {
    if (this.items) {
      this.value = this.items.map((item) => {
        if (typeof item !== 'string') {
          return item.text;
        }

        return item;
      })
        .join('\n');
    }
  },

  methods: {
    save(event) {
      if (event) {
        if (event.shiftKey || event.ctrlKey) {
          return;
        }
        event.preventDefault();
      }

      let separator;

      if (this.value.includes('\n')) {
        separator = '\n';
      } else {
        separator = ',';
      }

      const split = this.value.split(separator).filter(Boolean);

      if (split.length) {
        this.split = split;
        this.$emit('save', split);
      }
    },
  },
};
</script>
