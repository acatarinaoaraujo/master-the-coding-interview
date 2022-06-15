function findFactorialIterative(number) { // O(n)
  let answer = 1;
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}

function findFactorialRecursive(number) { // O(n)
  if(number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1)
}

findFactorialIterative(5);
findFactorialRecursive(5);

//If you want, try to add a base case condition for the recursive solution if the parameter given is less than 2