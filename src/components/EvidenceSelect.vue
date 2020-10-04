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
  },
};
</script>
