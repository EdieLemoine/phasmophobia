import Cookies from 'js-cookie';
import Vue from 'vue';

const GLOBAL_HOTKEYS = [
  'r',
];

const MODIFIER_KEYS = [
  'Tab',
  'Shift',
  'Meta',
  'Alt',
  'Control',
];

const IGNORE_ELEMENTS = [
  HTMLInputElement,
  HTMLSelectElement,
];

export const EventBus = new Vue({
  name: 'EventBus',

  data() {
    return {
      data: null,
    };
  },

  created() {
    this.data = Cookies.get('data');
    window.addEventListener('keydown', this.globalKeyDown);
  },

  beforeDestroy() {
    window.removeEventListener('keydown', this.globalKeyDown);
  },

  methods: {
    /**
     * @param {String} key
     */
    triggerKey(key) {
      this.globalKeyDown({ key });
    },

    /**
     * Emit a key event. Supports manual triggering like `{key: 'r'}` and `Event`.
     *
     * Event is not emitted if it's an Event and the current target element is in IGNORE_ELEMENTS or if any modifier
     *  keys are pressed.
     *
     * @param {KeyboardEvent|Object} event
     */
    globalKeyDown(event) {
      if (event instanceof Event) {
        const shouldBeIgnored = IGNORE_ELEMENTS.some((element) => event.target instanceof element);
        const anyModifierPressed = MODIFIER_KEYS.some((key) => event.getModifierState(key));

        if (shouldBeIgnored || anyModifierPressed) {
          return;
        }
      }

      if (GLOBAL_HOTKEYS.includes(event.key)) {
        this.$emit(`key:${event.key}`);
      }
    },

    /**
     * Save data to cookies.
     *
     * @param {String} name
     * @param {any} value
     */
    save(name, value) {
      Cookies.set(name, value);
    },

    /**
     * Load data from cookies.
     *
     * @param {String} name
     *
     * @returns {any}
     */
    load(name) {
      let data = Cookies.get(name);

      if (data) {
        // Test if it's JSON data.
        try {
          data = JSON.parse(data);
        } catch (err) {
          // It's not valid JSON.
        }

        return data;
      }

      return null;
    },
  },
});
