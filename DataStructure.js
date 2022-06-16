/* Comparision of programming language:
   https://en.wikipedia.org/wiki/Comparison_of_programming_languages_(associative_array) */

/* Big O: https://www.bigocheatsheet.com/ */

/** ARRAYS **/

/* GOOD: fast lookups, fast push/pop, ordered.
   BAD: slow inserts, slow deletes, fixed size*.
   We have to shift the array. You have to declare the size ahead, however, it can be solved using dynamic array in some modern programming
   languages

   With arrays we have random access, it allows us to access any element within them using an index. */

/** HASH TABLES (or HASH MAPS, MAPS, UNORDERED MAPS, OBJECT, DICTIONARIES **/

/* python: dictionary | js: objects | java: maps | ruby: hashs | c++: unordered maps

   Hash Function: given an input, the function generates a random pattern and map it to a memory address where we want to store our data.
   Time complexity of O(1).

   GOOD: fast lookups - if no collisions, fast inserts, flexible keys, optimize for loops.
   BAD: hash collisions, loop though to find the keys - slow key iteration, unordered, more memory - space is O(n).

   Hash Collision: https://www.cs.usfca.edu/~galles/visualization/OpenHash.html
   We can't avoid collisions. Theoretically when you have a collision, it slows down reading and writing with a hash table with O(n/k), k is
   the size of the table.

  Benefits of Map over Object: 1) Map allows you to save any data type with a key, with an object only a string - values are stringfied.
  2) Map maintains insertion order.


  Sets is very similar to Map, but it only stores the key */

/** LINKED LIST **/

/* Some languages do not have Linked List, but they can be built, such as JS. In Linked List, we can change things dynamically unlike array, but
   finding something within them O(n).
   ~ Doubly: Used when there is no limitation for memory, and searching.
   GOOD: prev - traverse from back to front.
   BAD: complex to implement, more memory and storage, extra operations.

   ~ Singly: Used when there is less memory, main goal is to do fast insertion and deletion, no much searching.
   GOOD: simple implementation - less memory, faster.
   BAD: cannot be traversed from back to front.

   https://visualgo.net/en/list?slide=1

   GOOD: fast insertion and deletion, ordered, flexible size.
   BAD: slow lookup, more memory */

/** STACKS AND QUEUES **/

/* They are linear data structures, allow us to traverse data sequentially, which only one data element can be reached. They can be implemented
   in a similar way. Unlikely arrays and linked lists, we have less methods or actions. Sometimes it is good to have those high-level data structures
   that are build on top of low-level ones like arrays and lists to limit the operations you can do with them.

   Stacks - Last In, First Out (LIFO):
   ~ Arrays vs Linked List: Arrays allow caching locality, making it faster to access elements in memory,
   while Linked List have it scattered all over the memory - extra memory needed. On the other hand, they
   have more dynamic memory.

   Queues - First In, First out (FIFO):
   ~ Arrays vs Linked List: Not a good idea to implement with Arrays, since we have indices, and we have to
   traverse after deleting an item.

   */

/** TREES **/

/*
   https://visualgo.net/en/bst

   1. Binary Tree: Each node can only have 0, 1, or 2 child nodes, and each child can only have one parent.
   ~ Perfect Binary Tree: All the leaf nodes are full and there is no node that has only 1 child.
     Properties: 1) The number of total nodes on each level doubles as we move down the tree.
                 2) The number of nodes on the last level is equal to the number of nodes on all the others levels plus 1.
     Thus, half of nodes are in the last level, which makes it more efficient as we may not need to go all the way up.

   ~ Full Binary Tree: A node has either 0 or 2 children, but never 1 child.

   How to calculate how many nodes are? 2h - 1. Level 0: 2^0 = 1; Level 1: 2^1 = 2 ; Level 2: 2^2 = 4; Level 3: 2^3 = 8.
   How to calculate the height of the tree? The height of a node in a binary tree is the largest number of edges in a path from a leaf node to a
   target node.

   Balanced vs Unbalanced: Instead of Olog(n) in balanced binary trees, now we have O(n) in unbalanced binary trees. Thus, we want to balance our
   unbalanced tree so it has a better performance. How we do it? Luckily, they are build in in many programming languages.

   GOOD: better than O(n), ordered, flexible size.
   BAD: no O(1) operations.

   2. Binary Heap: Commonly used in Priority Queues. You can't do random access like in Arrays or Hash Tables, as we know about trees, we have do do
   a traversal. Binary Heap is less ordered than a Binary Search Trees - the left is smaller and the right is larger than the parent, thus the lookup
   is O(n). Heaps add values on the tree from left to right, and bubbles up if it is not in the same priority order. Binary Heap is memory efficient!

   GOOD: better than O(n), priority, flexible size, fast insert.
   BAD: slow lookup.

   Why use Binary Heap then? They are very good when doing comparative operations.
   - Max Heap: The root is the bigger node, and the consecutive nodes are smaller (from top to bottom).
   - Min Heap: The root is the smaller node, and the consecutive nodes are larger (from top to bottom).

   3. Trie (Prefix Tree): Specialized tree used in searching, most often with text. And in most cases, it can outperform binary search tree hash tables,
    and most data structures. A Trie has a start point which is empty. The benefit is speed -O(length of the word), and space - because we use prefixes,
    we don't have to store multiple times.  */


/** GRAPHS **/

/* https://visualgo.net/en/graphds?slide=1

  BAD: scaling is hard.
  GOOD: relationships - some data need to be in a graph form.

  Ways to describe a graph:
  - Directed/Undirected: In directed you can only go in one direction.
  - Weighted/Unweighted: Values can be applied in the edges of the graph, not only in the nodes. Ex: What is the shortest graphs?
  - Cyclic/Acyclic: Cyclic is when the graph contains a circle - when you go from one node and is able to return.

  Graph Data
  - Edge List:
    const graph = [[0, 2], [2, 3], [2, 1], [1, 3]];

  - Adjacent List:
    const graph = [[2], [2, 3], [0, 1, 3], [1, 2]];

  - Adjacent Matrix:
    const graph = {0: [0, 0, 1, 0], 1: [0, 0, 1, 1], 2: [1, 1, 0, 1], 3: [0, 1, 1, 0]};


 */


