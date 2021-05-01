/* eslint-disable max-len,vue/max-len,no-console */

/**
 * For easier handling of PurgeCSS's limitation regarding programmatically referenced classes.
 *
 * @see https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html
 */
export class ClassMap {
  /**
   * Should contain string keys. Values can be anything that goes in a `:class=""` attribute.
   *
   * @type {Object<String, String|String[]|Object>}
   */
  #classes;

  /**
   * @param {String[]|Object<String, String|String[]|Object>} classes
   */
  constructor(classes) {
    this.#classes = classes;
  }

  /**
   * Checks whether a key is present in the classMap. This can be used with prop validators, for example.
   *
   * @param {String} key
   *
   * @returns {Boolean}
   */
  check(key) {
    let hasKey;

    if (Array.isArray(this.#classes)) {
      hasKey = this.#classes.includes(key);
    } else {
      hasKey = this.#classes.hasOwnProperty(key);
    }

    if (!hasKey) {
      this.logError(key);
    }

    return hasKey;
  }

  /**
   * @param {String} key
   *
   * @returns {String|String[]|Object}
   */
  get(key) {
    this.check(key);
    return this.#classes[key];
  }

  /**
   * Throws an error saying the key has to be in the class map.
   *
   * @param {String} key
   */
  logError(key) {
    const array = Array.isArray(this.#classes) ? this.#classes : Object.keys(this.#classes);
    const classList = array.join(', ');

    console.error(
      `Did not find "${key}" in the class map. You have to manually add this class to the map or use an existing one instead: ${classList}.`,
    );
  }
}
