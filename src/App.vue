<template>
  <div class="flex p-2">
    <div class="max-w-screen-xl mx-auto w-full">
      <ShotmophobiaBanner />

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

      <EvidenceTable />

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
import ShotmophobiaBanner from '@/components/ShotmophobiaBanner';

export default {
  name: 'App',
  components: {
    ShotmophobiaBanner,
    EntityData,
    EvidenceTable,
  },
};
</script>
