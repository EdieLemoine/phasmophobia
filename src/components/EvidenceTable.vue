<template>
  <Grid cols="8">
    <div class="border-b" />
    <div
      v-for="evidenceItem in evidence"
      :key="`evidence--${evidenceItem.key}__title`"
      class="border-b flex py-2 text-center">
      <span
        class="m-auto"
        :class="{
          'opacity-50': !possibleEvidence.includes(evidenceItem.key),
        }"
        v-text="evidenceItem.name" />
    </div>
    <div />
    <EvidenceSelect
      v-for="evidenceItem in evidence"
      :key="`evidence--${evidenceItem.key}__select`"
      v-model="evidenceModel[evidenceItem.key]"
      :class="{
        'opacity-50': !possibleEvidence.includes(evidenceItem.key),
      }"
      :disabled="possibleEvidence.includes(evidenceItem.key) ? null : 'disabled'"
      class="w-full" />

    <div class="col-span-8 entity__row">
      <TransitionGroup
        tag="div"
        class="relative"
        name="list"
        mode="out-in">
        <div
          v-for="(entity, index) in possibleEntities"
          :key="`entity--${entity.key}`"
          tabindex="0"
          :data-index="index"
          class="duration-100 entity__details focus:outline-none focus:shadow-outline focus:z-10 group hover:bg-gray-900 relative transition-colors"
          @keyup.up.prevent="(event) => selectNextElement(event, entity, index)"
          @keyup.down.prevent="(event) => selectNextElement(event, entity, index)"
          @keyup.enter.prevent="() => toggleDetails(entity)"
          @keyup.space.prevent="() => toggleDetails(entity)"
          @click="() => possibleEntities.length > 1 ? toggleDetails(entity) : null">
          <div
            :key="`${entity.key}__data`"
            class="col-span-8 cursor-pointer duration-150 entity__row grid grid-cols-8 relative transition-colors">
            <div
              class="flex px-3"
              :class="{
                'bg-gray-900': shownDetails === entity.key,
                'opacity-75': getEntityLikelihood(entity) === -1,
                'opacity-50': getEntityLikelihood(entity) === -2,
                'opacity-25': getEntityLikelihood(entity) < -2,
              }">
              <h4
                class="ml-auto my-auto"
                v-text="entity.name" />
            </div>
            <div
              v-for="evidenceItem in evidence"
              v-show="entityIsPossible(entity)"
              :key="`entity--${entity.key}--${evidenceItem.key}`"
              class="duration-100 py-2 text-center transition-colors"
              :class="calculateEvidenceClasses(evidenceItem, entity)">
              <Icon
                v-if="entityHasInconclusiveEvidence(entity, evidenceItem)"
                icon="tilde"
                class="text-yellow-300" />
              <Icon
                v-else-if="entityHasEvidence(entity, evidenceItem)"
                icon="check"
                class="text-green-300" />
              <Icon
                v-else
                icon="times"
                class="text-red-300" />
            </div>

            <TransitionExpand
              :key="`${entity.key}__data`"
              class="col-span-8">
              <div
                v-show="entityIsPossible(entity) && shownDetails === entity.key"
                class="bg-gray-900">
                <div
                  v-for="type in details"
                  :key="`${entity.key}__${type.key}`"
                  class="p-4">
                  <h3
                    class="text-gray-300"
                    v-text="type.name" />
                  <ul>
                    <li
                      v-for="(text, i) in entity[type.key]"
                      :key="`${entity.key}__${type}--${i}`"
                      v-text="text" />
                  </ul>
                </div>
              </div>
            </TransitionExpand>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </Grid>
</template>

<script>
import Cookies from 'js-cookie';
import Grid from '@/views/Grid';
import { details } from '@/data/details';
import { entities } from '@/data/entities';
import { evidence } from '@/data/evidence';
import { generateTabIndex } from '@/mixins/generateTabIndex';
import { options } from '@/data/options';
import smoothReflow from 'vue-smooth-reflow';

const cookies = Cookies.get('evidence');

export default {
  name: 'EvidenceTable',
  components: {
    Grid,
    Icon: () => import('@/components/Icon'),
    TransitionExpand: () => import('@/components/TransitionExpand'),
    EvidenceSelect: () => import('@/components/EvidenceSelect'),
  },

  mixins: [
    generateTabIndex,
    smoothReflow,
  ],

  data() {
    return {
      details,
      entities,
      evidence,
      options,
      evidenceModel: cookies || {},
      shownDetails: null,
    };
  },

  computed: {
    possibleEvidence() {
      return evidence
        .map((evidenceItem) => evidenceItem.key)
        .filter((evidenceKey) => this.possibleEntities.some((entity) => {
          return entity.evidence.includes(evidenceKey);
        }));
    },

    possibleEntities() {
      return this.entities
        .filter(this.entityIsPossible)
        .sort((entityA, entityB) => {
          return this.getEntityLikelihood(entityB) - this.getEntityLikelihood(entityA);
        });
    },
  },

  watch: {
    /**
     * When filtering entities and there's only one left, open it. Otherwise close any open details whenever the
     *  entities that are shown change.
     */
    possibleEntities() {
      if (this.possibleEntities.length === 1) {
        this.toggleDetails(this.possibleEntities[0]);
      } else {
        this.shownDetails = null;
      }
    },

    evidenceModel: {
      handler(value) {
        this.$eventBus.save('evidence', value);
      },

      deep: true,
    },
  },

  created() {
    this.$eventBus.$on('key:r', this.reset);
  },

  beforeUnmount() {
    this.$eventBus.$off('key:r', this.reset);
  },

  mounted() {
    this.$smoothReflow({
      el: '.entity__wrapper',
      transitionEvent: {
        selector: 'div',
        propertyName: 'opacity',
      },
    });
    this.evidenceModel = this.$eventBus.load('evidence') ?? {};
  },

  methods: {
    /**
     * @param {Evidence} evidence
     * @param {Entity} entity
     *
     * @returns {string[]}
     */
    // eslint-disable-next-line complexity
    calculateEvidenceClasses(evidence, entity) {
      const hasEvidence = this.entityHasEvidence(entity, evidence);
      const hasInconclusive = this.entityHasInconclusiveEvidence(entity, evidence);
      const isPossible = this.possibleEvidence.includes(evidence.key);
      const likelihood = this.getEntityLikelihood(entity);

      return [
        hasEvidence && 'bg-green-900 group-hover:bg-green-800 group-focus:bg-green-800',
        hasInconclusive && 'bg-yellow-900 group-hover:bg-yellow-800 group-focus:bg-yellow-800',
        !hasEvidence && 'bg-red-900 group-hover:bg-red-800 group-focus:bg-red-800',
        isPossible && likelihood === -1 && 'opacity-75',
        isPossible && likelihood === -2 && 'opacity-50',
        isPossible && likelihood < -2 && 'opacity-25',
        !isPossible && 'opacity-20',
      ].filter(Boolean).join(' ');
    },

    /**
     * @param {Entity} entity
     *
     * @returns {number}
     */
    getEntityLikelihood(entity) {
      let possibility = 0;

      Object
        .keys(this.evidenceModel)
        .forEach((setEvidence) => {
          const hasEvidence = this.entityHasEvidence(entity, { key: setEvidence });
          const current = this.evidenceModel[setEvidence];

          if (hasEvidence && current === 'not_likely') {
            possibility -= 1;
          }
        });

      return possibility;
    },

    /**
     * @param {Entity} entity
     * @param {Evidence} evidence
     *
     * @returns {boolean}
     */
    entityHasEvidence(entity, evidence) {
      return entity.evidence.includes(evidence.key);
    },

    /**
     * @param {Entity} entity
     * @param {Evidence} evidence
     *
     * @returns {boolean}
     */
    entityHasInconclusiveEvidence(entity, evidence) {
      return Boolean(entity.inconclusiveEvidence?.includes(evidence.key));
    },

    /**
     * @param {Entity} entity
     * @returns {boolean}
     */
    entityIsPossible(entity) {
      return evidence
        .every((setEvidence) => {
          return this.entityHasInconclusiveEvidence(entity, setEvidence)
              || this.entityHasEvidence(entity, setEvidence)
              || this.evidenceModel[setEvidence.key] !== 'confirmed';
        });
    },

    /**
     * @param {Entity} entity
     */
    toggleDetails(entity) {
      this.shownDetails = this.shownDetails === entity.key ? null : entity.key;
    },

    /**
     * @param {KeyboardEvent} event
     * @param {Entity} entity
     * @param {number} index
     */
    selectNextElement(event, entity, index) {
      const isUp = event.key === 'ArrowDown';
      const entries = document.querySelectorAll('.entity__details');
      const increment = isUp ? 1 : -1;

      entries.forEach((entry) => {
        const currentIndex = Number(entry.getAttribute('data-index'));

        if (entry.tabIndex === 0 && index + increment === currentIndex) {
          entry.focus();
        }
      });
    },

    reset() {
      this.shownDetails = null;
      this.evidenceModel = {};
    },
  },
};
</script>
