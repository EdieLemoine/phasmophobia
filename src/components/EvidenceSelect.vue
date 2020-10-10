<template>
  <TSelect
    :value="mutableValue"
    :variant="mutableValue"
    :options="[
      {
        value: 'not_likely',
        text: 'Not likely',
      },
      {
        value: 'maybe',
        text: 'Maybe',
      },
      {
        value: 'confirmed',
        text: 'Confirmed',
      },
    ]"
    :tabindex="tabIndex"
    classes="focus:z-10"
    @input="mutableValue = $event">
    }
  </TSelect>
</template>

<script>
import { vModelMixin } from '@/mixins/vModel';

export default {
  name: 'EvidenceSelect',
  mixins: [
    vModelMixin,
  ],

  props: {
    value: {
      type: String,
      default: () => 'maybe',
    },
    tabIndex: {
      type: Number,
      default: () => 0,
    },
    selectClass: {
      type: String,
      default: null,
    },
  },
};
</script>
