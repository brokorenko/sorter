class Sorter {

    constructor() {
        this.arr = [];
        this.compareFunction = (a, b) => a - b;
    }

    add(element) {
        this.arr.push(element);
    }

    at(index) {
        return this.arr[index];
    }

    get length() {
        return this.arr.length;
    }

    toArray() {
        return this.arr;
    }

    sort(indices) {
        let newArr = [];

        for (let i = 0; i < indices.length; i++) {
            newArr.push(this.arr[indices[i]]);
        }

        newArr.sort(this.compareFunction, );

        indices.sort((a, b) => a - b);

        for (let i = 0; i < indices.length; i++) {
            this.arr[indices[i]] = newArr[i];
        }

    }

    setComparator(compareFunction) {
        this.compareFunction = compareFunction;
    }
}

module.exports = Sorter;
