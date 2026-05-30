"use strict";

const object1 = {
  num: [2, 25, 51, 8, 7, 80, 10],
  getSum() {
    return this.num.reduce((sum, num) => sum + num, 0);
  },
};

const object2 = {
  num: [11, 28, 55, 6, 5, 70, 3],
  getProduct(min, max) {
    return this.num
      .filter((num) => num >= min && num <= max)
      .reduce((prod, num) => prod * num, 1);
  },
};
// apply передає їх масивом
console.log(object1.getSum());
console.log(object2.getProduct(5, 55));

console.log(object1.getSum.call(object2));
console.log(object1.getSum.apply(object2));

console.log(object2.getProduct.call(object1, 5, 55));
console.log(object2.getProduct.apply(object1, [5, 55]));
