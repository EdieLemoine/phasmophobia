<template>
  <div
    id="app"
    class="flex p-2">
    <div class="mx-auto">
      <div class="flex">
        <EntityData />

        <div class="ml-auto my-auto">
          <TButton
            ref="reset"
            class="active:bg-gray-700 h-100 hover:bg-gray-900"
            @click="$eventBus.triggerKey('r');">
            <span class="underline">R</span>eset
          </TButton>
        </div>
      </div>

      <EvidenceTable class="mt-2" />
      <Shotmophobia v-if="shotmophobia" />

      <div class="mt-2">
        <TButton
          tag-name="a"
          class="opacity-50"
          target="_blank"
          href="https://github.com/EdieLemoine/phasmophobia">
          Open on GitHub
        </TButton>
      </div>
    </div>
  </div>
</template>

<script>
import EntityData from '@/components/EntityData';
import EvidenceTable from '@/components/EvidenceTable';

export default {
  name: 'Home',
  components: {
    Shotmophobia: () => import('@/views/Shotmophobia'),
    EntityData,
    EvidenceTable,
  },

  data() {
    return {
      shotmophobia: false,
    };
  },
};
</script>
