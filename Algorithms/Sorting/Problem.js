const letters = ['a', 'b', 'd', 'v', 'n'];
const basket = [1, 5, 78, 23, 79, 34, 12, 9, 8];
const spanish = ['único', 'cosas', 'árbol'];

console.log(letters.sort())
console.log(basket.sort())  //  1, 12, 23, 34, 5, 78, 79, 8, 9
console.log(spanish.sort()) // 'cosas', 'árbol', 'único'

/* This happens due to the UNICODE character order. how to solve? */

basket.sort(function (a, b) {
  return a - b;
});

spanish.sort(function (a, b) {
  return a.localeCompare(a);
});

