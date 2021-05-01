<template>
  <div class="flex p-2">
    <div class="max-w-screen-xl mx-auto w-full">
      <div>
        <div class="flex">
          <TButton
            ref="shotmophobia"
            class="active:bg-gray-700 flex-grow-0 h-100 hover:bg-gray-900 ml-auto"
            :class="{
              'bg-green-900': shotmophobia,
            }"
            @click="shotmophobia = !shotmophobia">
            Shotmophobia mode
          </TButton>
        </div>

        <KeepAlive><Shotmophobia v-if="shotmophobia" /></KeepAlive>
      </div>

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

export default {
  name: 'App',
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
