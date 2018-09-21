class Sorter {
  
  constructor() {
    this.m = [];
    this.compareFunction = function(a, b){return a-b};
  }

  add(element) {
    this.m.push(element);
  }

  at(index) {
    return this.m[index];
  }

  get length() {
    return this.m.length;
  }

  toArray() {
    return this.m;
  }

  sort(indices) {
    let newArr = [];

    for(let i = 0; i < indices; i++) {
      newArr.push(this.m[indices[i]]);
    }

    newArr.sort(this.compareFunction);

    for(let i = 0; i < indices; i++) {
      this.m[indices[i]] = newArr[i];
    }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;
