<template>
  <div
    id="app"
    class="flex p-2">
    <EvidenceTable class="mt-8 mx-auto" />
  </div>
</template>

<script>
import EvidenceTable from '@/components/EvidenceTable';

export default {
  name: 'App',
  components: {
    EvidenceTable,
  },
};
</script>
