/** RECURSION & ITERATIVE **/

/* Recursive: A function that refers to itself inside a function. Anything that can be implemented recursive can be implemented
   iteratively (loop). Iterative functions tend to be more efficient because they don't make those function calls, but can be not
   as readable. Why use recursion?

  GOOD: readability, dry.
  BAD: large stack - the computer needs to allocate memory to remember things, stack overflow can occur when we have recursion and
  there is no way to stop the recursive call.

  When to use recursion? Recursion tends to be better when we have  complicated problems like traversing or searching through trees or graphs, such as when using BFS, DFS, and sorting as well.

  I Rules:
  1. Identify the base case - when to stop.
  2. Identify the recursive case.
  3. Get closer and closer and return when needed. Usually you have two returns.

  II Rules:
  Every time you are using a tree or converting something to a tree use recursion.
  1. Divided into a number of subproblems that are smaller instances of the same problem.
  2. Each instance of the subproblem is identical in nature.
  3. The solutions of each subproblem can be combined to solver the problem at hand.

*/

/** SORTING **/

/*
  https://www.toptal.com/developers/sorting-algorithms

  A sorting algorithm is said to be stable if two objects with equal keys appear in the same order in sorted output as they appear in the input array to be sorted. Some sorting algorithms are stable by nature like Insertion sort, Merge Sort, Bubble Sort, etc. And some sorting algorithms are not, like Heap Sort, Quick Sort, etc.

  - Bubble: One of the simplest, and least efficient, but it is memory efficient.
  - Selection: Similar to Bubble, it is not time efficient, but it is memory efficient.
  - Insertion: It is not one of the most efficients, but in some cases can be very fast - when the list is almost sorted you can even get linear time.
  - Merge Sort: Divide and Conquer. Time efficient, but it needs more memory.
  - Quick Sort: Divide and Conquer.


*/