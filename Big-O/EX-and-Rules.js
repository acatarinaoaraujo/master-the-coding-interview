/** Rule Book
 * 1: Worst Case
 *  2: Remove Constants
 *    3: Different terms for inputs
 *      4: Drop Non Dominants**/

/** What is the Big O of the below function? (Hint, you may want to go line by line) **/
function funChallenge(input) {
  let a = 10; //  O(1)
  a = 50 + 3; //  O(1)

  for (let i = 0; i < input.length; i++) {  //  O(n)
    anotherFunction();  //  O(n)
    let stranger = true;  //  O(n)
    a++;  //  O(n)
  }
  return a; //  O(1)
}
/* 3 + n + n + n + n = 3 + 4n = O(n). */

/** What is the Big O of the below function? (Hint, you may want to go line by line) **/
function anotherFunChallenge(input) {
  let a = 5;  //  O(1)
  let b = 10; //  O(1)
  let c = 50; //  O(1)
  for (let i = 0; i < input; i++) { //  O(n)
    let x = i + 1;  //  O(n)
    let y = i + 2;  //  O(n)
    let z = i + 3;  //  O(n)

  }
  for (let j = 0; j < input; j++) { //  O(n)
    let p = j * 2;  //  O(n)
    let q = j * 2;  //  O(n)
  }
  let whoAmI = "I don't know";  //  O(1)
}
/* 4 + 5n = O(n) linear time. */

/** Part 2: Big O Rules 2 **/

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (var i = 0; i < 100; i++) {
    console.log('hi');
  }
}
/* 1 + n/2 + 100 = O(n) linear time. As n increases, dividing by 2 becomes insignificant.*/

function sameBox(boxes) {
  boxes.forEach(function (boxes) {
    console.log(boxes);
  });

  boxes.forEach(function (boxes) {
    console.log(boxes);
  });
}

/* O(2n) = O(n) Linear Time, we don't care how steep the line is. */

function differentBoxes(boxes, boxes2) {
  boxes.forEach(function (boxes) {
    console.log(boxes);
  });

  boxes2.forEach(function (boxes) {
    console.log(boxes);
  });
}
/* O(a + b), different inputs. */

const boxes = ['a', 'b', 'c', 'd', 'e'];
function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j])
    }
  }
}

logAllPairsOfArray(boxes)

/* O(n * n) = O(n^2) Quadratic Time. If it is nested, you multiply. */

function printAllNumbersThenAllPairSums(numbers) {

  console.log('these are the numbers:');
  numbers.forEach(function(number) {
    console.log(number);
  });

  console.log('and these are their sums:');
  numbers.forEach(function(firstNumber) {
    numbers.forEach(function(secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1,2,3,4,5])

/* O(n + n^2) = O(n^2), keep dominant term. */
