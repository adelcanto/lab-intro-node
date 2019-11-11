class SortedList {
    constructor() {
      this.items = [];
      this.length = this.items.length;
    }
    add(item) {
      this.items.push(item);
      this.items.sort((a,b) => a-b)
      this.length = this.items.length;
    }
    get(pos) {
      return this.items[pos]
    }
    max() {
      if (this.items.length === 0) throw new Error ('EmptySortedList');
      return Math.max(...this.items)

    }
    min() {
      if (this.items.length === 0) throw new Error ('EmptySortedList');
      return Math.min(...this.items)
    }
    average() {
      if (this.items.length === 0) throw new Error ('EmptySortedList');
      return this.items.reduce((ac, cv) => ac+cv)/this.items.length
      
    }
    sum() {
      if (this.items.length === 0) return 0;
      return this.items.reduce((ac, cv) => ac+cv)
    }
  };
  
  module.exports = SortedList;