<template>
  <Grid>
    <div class="mb-3">
      <TButton
        class="mr-2"
        @click="configure = !configure">
        <template v-if="configure">
          Close
        </template>
        <template v-else>
          Configure
        </template>
      </TButton>
    </div>
    <div
      v-show="configure"
      class="border p-3 rounded">
      <ListTextArea
        title="Names"
        :items="names"
        @save="saveNames" />
      <ListTextArea
        title="Models"
        :items="models"
        @save="saveModels" />
      <ListTextArea
        title="Real Estate Agent traits"
        :items="agentTraits"
        @save="saveAgentTraits" />
      <ListTextArea
        title="Guest traits"
        :items="guestTraits"
        @save="saveGuestTraits" />
    </div>

    <Grid
      v-if="ready"
      cols="5">
      <!-- row -->
      <span class="border-b py-2">Naam</span>
      <span class="border-b py-2">Goestoe keuze</span>
      <span class="border-b py-2">Model keuze</span>
      <span class="border-b py-2">Job</span>
      <span class="border-b py-2">Trait</span>
      <!-- /row-->

      <!-- row -->
      <template v-for="person in people">
        <span
          :key="person.name + '_name'"
          class="my-auto"
          v-text="person.name" />
        <TSelect
          :key="person.name + '_ghostChoice'"
          v-model="person.ghostChoice"
          :class="{
            'text-yellow-400': person.ghostChoice !== 'none',
          }"
          :options="ghostNames" />
        <TSelect
          :key="person.name + '_modelChoice'"
          v-model="person.modelChoice"
          :class="{
            'text-yellow-400': person.modelChoice !== 'none',
          }"
          :options="models" />
        <span
          :key="person.name + '_job'"
          class="my-auto"
          :class="{
            'text-yellow-400': person.job === 'agent',
          }"
          v-text="person.job" />
        <span
          :key="person.name + '_trait'"
          class="my-auto"
          v-text="person.trait" />
      </template>
      <!-- /row-->
    </Grid>
  </Grid>
</template>

<script>
import { EventBus } from '@/EventBus';
import Grid from '@/views/Grid';
import ListTextArea from '@/views/ListTextArea';
import { RandomGenerator } from '@/services/RandomGenerator';
import { entities } from '@/data/entities';

const names = EventBus.load('shotmophobia_names') || [];
const guestTraits = EventBus.load('shotmophobia_guest_traits') || [];
const agentTraits = EventBus.load('shotmophobia_agent_traits') || [];
const models = EventBus.load('shotmophobia_models') || [];

const ghostNames = [
  { text: 'None', value: 'none' },
  ...entities.map((entity) => ({
    text: entity.name,
    value: entity.key,
  })),
];

export default {
  name: 'Shotmophobia',
  components: { ListTextArea, Grid },

  data() {
    return {
      generators: {},
      configure: !names.length || !guestTraits.length || !agentTraits.length || !models.length,
      names,
      guestTraits,
      agentTraits,
      ghostNames,
      models,
    };
  },

  computed: {
    ready() {
      return this.names.length
          && this.models.length
          && this.agentTraits.length
          && this.guestTraits.length;
    },

    people() {
      return this.names.map((name) => {
        const job = this.generators.jobs.generate();
        const traitGenerator = job === 'agent' ? this.generators.agentTraits : this.generators.guestTraits;

        const trait = traitGenerator.generate();

        return {
          name,
          ghostChoice: 'none',
          modelChoice: 'none',
          trait,
          job,
        };
      });
    },
  },

  beforeMount() {
    this.createGenerators();
  },

  methods: {
    createGenerators() {
      this.generators.jobs = new RandomGenerator([
        { name: 'agent' },
        { name: 'guest', limit: Infinity },
      ]);
      this.generators.agentTraits = new RandomGenerator(this.agentTraits);
      this.generators.guestTraits = new RandomGenerator(this.guestTraits);
    },

    /**
     * @param {Array<String>} event
     */
    saveNames(event) {
      this.names = event;
      this.$eventBus.save('shotmophobia_names', event);
    },

    /**
     * @param {Array<String>} event
     */
    saveAgentTraits(event) {
      this.agentTraits = event;
      this.$eventBus.save('shotmophobia_agent_traits', event);
    },

    /**
     * @param {Array<String>} event
     */
    saveGuestTraits(event) {
      this.guestTraits = event;
      this.$eventBus.save('shotmophobia_guest_traits', event);
    },

    /**
     * @param {Array<String>} event
     */
    saveModels(event) {
      event.unshift({ text: 'None', value: 'none' });

      this.models = event;
      this.$eventBus.save('shotmophobia_models', event);
    },
  },
};
</script>
