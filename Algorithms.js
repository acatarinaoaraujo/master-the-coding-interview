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

  Comparison Sorts:
  - Bubble: One of the simplest, and least efficient, but it is memory efficient.
  - Selection: Similar to Bubble, it is not time efficient, but it is memory efficient.
  - Insertion: It is not one of the most efficients, but in some cases can be very fast - when the list is almost sorted you can even get linear time.
  - Merge: Divide and Conquer. Time efficient, but it needs more memory.
  - Quick: Divide and Conquer, and uses the Pivot technique. The same efficiency as Merge, but with less memory. Can be really bad when the pivot chosen is the smallest or largest, because then you are not splitting the array evenly.

  Note: mathematically it is impossible to improve O(n log n), but there is one except to this rule, if you don't make comparisons.

  Non-Comparision Sorts: the way data is stored in 0's and 1's. They only work with numbers and a small range, eg. range 0 to 100.
  - Counting and Radix.

  When to Use a sorting algorithm?
  Insertion sort should be used with small input, or values are nearly sorted.
  Bubble and selection sort you will never or rarely use it!
  Merge sort is good because of divide conquer, and we divide the list evenly. But if you are worried about space complexity is not a
  good idea.
  Quick sort is one of the most popular, but the problem is when the pivot is not chosen correctly and we cant get the worst case.
  Heap Sort sorts in place, does not have a bad worst scenery, and does not use much memory. But on average it is slower than Merge.

  1. - Sort 10 schools around your house by distance: insertion sort
  2. - eBay sorts listings by the current Bid amount: radix or counting sort
  3. - Sort scores on ESPN: quick sort.
  4. - Massive database (can't fit all into memory) needs to sort through past year's user data: merge sort.
  5. - Almost sorted Udemy review data needs to update and add 2 new reviews: insertion sort.
  6. - Temperature Records for the past 50 years in Canada: radix or counting Sort, quick sort if decimal places.
  7. - Large user name database needs to be sorted. Data is very random: quick sort.
  8. - You want to teach sorting: bubble sort

*/

/** SEARCH **/

/* Linear Search: Looking one by one in the list. Best Case: O(1), Worst Case: O(n). Thus it can cost a loy time.


 */