<template>
  <div>
    <div class="border border-gray-600 grid grid-cols-7 inline-block mx-auto p-2 relative rounded">
      <TButton
        class="border border-transparent hover:border-gray-600 px-2 py-1 rounded"
        @click="reset">
        Reset
      </TButton>
      <div
        v-for="evidenceItem in evidence"
        :key="'evidence__' + evidenceItem.key"
        class="flex py-2 text-center">
        <span
          class="m-auto"
          v-text="evidenceItem.name" />
      </div>
      <div />
      <div
        v-for="evidenceItem in evidence"
        :key="evidenceItem.key">
        <EvidenceSelect
          v-model="evidenceModel[evidenceItem.key]"
          class="w-full" />
      </div>

      <TransitionGroup
        tag="div"
        class="col-span-7 relative"
        name="list"
        mode="out-in">
        <div
          v-for="entity in entities"
          :key="'entity--' + entity.key"
          class="entity__details relative"
          :class="{
            'opacity-75': getLikelihood(entity) === -1,
            'opacity-50': getLikelihood(entity) === -2,
            'opacity-25': getLikelihood(entity) < -2,
          }">
          <div :key="entity.key + `__data`">
            <div
              class="col-span-7 cursor-pointer duration-100 duration-150 grid grid-cols-7 hover:bg-gray-900 relative transition-colors"
              @click="() => toggleDetails(entity)">
              <div
                v-show="isPossible(entity)"
                class="flex px-3"
                :class="{
                  'bg-gray-900': shownDetails === entity.key,
                }">
                <h4
                  class="ml-auto my-auto"
                  v-text="entity.name" />
              </div>
              <div
                v-for="evidenceItem in evidence"
                v-show="isPossible(entity)"
                :key="'entity--' + entity.key + '--' + evidenceItem.key"
                class="py-3 text-center"
                :class="{
                  'bg-green-900': entityHasEvidence(entity, evidenceItem),
                  'bg-red-900': !entityHasEvidence(entity, evidenceItem),
                }">
                <span
                  v-if="entityHasEvidence(entity, evidenceItem)"
                  class="text-green-300">
                  ✓
                </span>
                <span
                  v-else
                  class="text-red-300">
                  ✗
                </span>
              </div>
              <TransitionExpand
                :key="entity.key + `__data`"
                class="col-span-7">
                <div
                  v-show="isPossible(entity) && shownDetails === entity.key"
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
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie';
import EvidenceSelect from '@/components/EvidenceSelect';
import TransitionExpand from '@/components/TransitionExpand';
import { details } from '@/data/details';
import { entities } from '@/data/entities';
import { evidence } from '@/data/evidence';
import { options } from '@/data/options';
import smoothReflow from 'vue-smooth-reflow';

const cookies = Cookies.get('settings');

export default {
  name: 'EvidenceTable',
  components: { TransitionExpand, EvidenceSelect },
  mixins: [smoothReflow],

  data() {
    return {
      details,
      entities,
      evidence,
      options,
      evidenceModel: cookies ? JSON.parse(cookies) : {},
      shownDetails: null,
    };
  },

  watch: {
    evidenceModel: {
      handler(value) {
        Cookies.set('settings', value);
      },
      deep: true,
    },
  },

  mounted() {
    this.$smoothReflow();
    this.evidenceModel = JSON.parse(Cookies.get('settings'));
  },

  methods: {
    reset() {
      this.shownDetails = null;
      this.evidenceModel = {};
    },

    /**
     * @param {Object} entity
     *
     * @returns {Number}
     */
    getLikelihood(entity) {
      let possibility = 0;

      Object
        .keys(this.evidenceModel)
        .forEach((setEvidence) => {
          const hasEvidence = entity.evidence.includes(setEvidence);
          const current = this.evidenceModel[setEvidence];

          if (hasEvidence && current === 'not_likely') {
            possibility -= 1;
          }
        });

      return possibility;
    },

    /**
     * @param {Object} entity
     * @param {Object} evidence
     *
     * @returns {Boolean}
     */
    entityHasEvidence(entity, evidence) {
      return entity.evidence.includes(evidence.key);
    },

    /**
     * @param {Object} entity
     * @returns {Boolean}
     */
    isPossible(entity) {
      return evidence
        .every((setEvidence) => {
          return this.entityHasEvidence(entity, setEvidence) || this.evidenceModel[setEvidence.key] !== 'confirmed';
        });
    },

    /**
     * @param {Object} entity
     */
    toggleDetails(entity) {
      this.shownDetails = this.shownDetails === entity.key ? null : entity.key;
    },
  },
};
</script>
