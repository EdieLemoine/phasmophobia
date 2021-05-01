export class RandomGenerator {
  /**
   * @type {Array<String>|Array<Object>}
   */
  items = null;

  /**
   * @type {Object}
   */
  assignedItems = {};

  /**
   * @type {Boolean}
   */
  usedUp = false;

  /**
   * @param {Array<String>|Array<Object>} items
   */
  constructor(items) {
    this.items = items.map((item) => {
      if (typeof item === 'string') {
        item = {
          name: item,
        };
      }

      if (!item.name) {
        throw new Error('Item is missing name property.');
      }

      return {
        name: item.name,
        limit: item.limit ?? 1,
      };
    });
  }

  getRandomItem() {
    if (this.usedUp || this.items.every(this.itemLimitReached.bind(this))) {
      this.usedUp = true;
      return null;
    }

    const random = Math.floor(Math.random() * this.items.length);
    const randomItem = this.items[random];

    if (this.itemLimitReached(randomItem)) {
      return this.getRandomItem();
    }

    return randomItem;
  }

  generate() {
    const item = this.getRandomItem();

    if (item) {
      if (this.assignedItems.hasOwnProperty(item.name)) {
        this.assignedItems[item.name]++;
      } else {
        this.assignedItems[item.name] = 1;
      }

      return item.name;
    }

    return item;
  }

  itemLimitReached(item) {
    const amountAssigned = this.assignedItems[item.name];

    return amountAssigned && amountAssigned >= item.limit;
  }
}
