/** O(1) **/
function boooo(n) {
  for (let i = 0; i < n; i++) {
    console.log('booooo');
  }
}

/** O(n) **/
function arrayOfHiNTimes(n) {
  var hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi';
  }
  return hiArray;
}

arrayOfHiNTimes(6)

/** Depends on the language and how it builds. For JS, it is a simple lookup, O(1).  **/
'hello'.length


