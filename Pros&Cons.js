/* Comparision of programming language:
   https://en.wikipedia.org/wiki/Comparison_of_programming_languages_(associative_array) */

/** ARRAYS **/

/* GOOD: fast lookups, fast push/pop, ordered.
   BAD: slow inserts, slow deletes, fixed size*.
   We have to shift the array. You have to declare the size ahead,
   however, it can be solved using dynamic array in some modern programming languages */

/** HASH TABLES (or HASH MAPS, MAPS, UNORDERED MAPS, OBJECT, DICTIONARIES **/

/* python: dictionary | js: objects | java: maps | ruby: hashs | c++: unordered maps */

/* Hash Function: given an input, the function generates a random pattern and map it to a memory address where we want to store our data. Time complexity of O(1).  */

/* GOOD: fast lookups - if no collisions, fast inserts, flexible keys, optimize for loops.
   BAD: hash collisions, loop though to find the keys - slow key iteration, unordered, more memory - space is O(n).  */

/* Hash Collision: https://www.cs.usfca.edu/~galles/visualization/OpenHash.html
   We can't avoid collisions. Theoretically when you have a collision, it slows down reading
   and writing with a hash table with O(n/k), k is the size of the table. */

/* Benefits of Map over Object: 1) Map allows you to save any data type with a key, with an      object only a string - values are stringfied. 2) Map maintains insertion order. */

/* Sets is very similar to Map, but it only stores the key */


