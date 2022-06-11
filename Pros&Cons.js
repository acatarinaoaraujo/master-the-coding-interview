/* Comparision of programming language:
   https://en.wikipedia.org/wiki/Comparison_of_programming_languages_(associative_array) */

/** ARRAYS **/

/* GOOD: fast lookups, fast push/pop, ordered.
   BAD: slow inserts, slow deletes, fixed size*.
   We have to shift the array. You have to declare the size ahead,
   however, it can be solved using dynamic array in some modern programming languages */

/** HASH TABLES (or HASH MAPS, MAPS, UNORDERED MAPS, OBJECT, DICTIONARIES **/

/* python: dictionary | js: objects | java: maps | ruby: hashs | c++: unordered maps

   Hash Function: given an input, the function generates a random pattern and map it to a memory address where we want to store our data. Time complexity of O(1).

   GOOD: fast lookups - if no collisions, fast inserts, flexible keys, optimize for loops.
   BAD: hash collisions, loop though to find the keys - slow key iteration, unordered, more memory - space is O(n).

   Hash Collision: https://www.cs.usfca.edu/~galles/visualization/OpenHash.html
   We can't avoid collisions. Theoretically when you have a collision, it slows down reading
   and writing with a hash table with O(n/k), k is the size of the table.

  Benefits of Map over Object: 1) Map allows you to save any data type with a key, with an object only a
  string - values are stringfied. 2) Map maintains insertion order.


  Sets is very similar to Map, but it only stores the key */

/** LINKED LIST **/

/* Some languages do not have Linked List, but they can be built, such as JS
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

/* They are linear data structures, allow us to traverse data sequentially, which only one data element
   can be reached. They can be implemented in a similar way. Unlikely arrays and linked lists, we have
   less methods or actions. Sometimes it is good to have those high-level data structures that are build
   on top of low-level ones like arrays and lists to limit the operations you can do with them.

   Stacks - Last In, First Out (LIFO):
   ~ Arrays vs Linked List: Arrays allow caching locality, making it faster to access elements in memory,
   while Linked List have it scattered all over the memory - extra memory needed. On the other hand, they
   have more dynamic memory.

   Queues - First In, First out (FIFO):
   ~ Arrays vs Linked List: Not a good idea to implement with Arrays, since we have indices, and we have to
   traverse after deleting an item.






   */


