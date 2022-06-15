class HashTable {
  constructor(size){
    this.data = new Array(size);
    // this.data = [];
  }

  /* O(1), even though we are looping over the elements, hash function is very fast. */
  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  /* O(1) */
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  /* If no collisions, O(1) */
  get(key){
    const address = this._hash(key);
    const currentBucket = this.data[address]
    if (currentBucket) {
      for(let i = 0; i < currentBucket.length; i++){
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    }
    return undefined;
  }

  /* If we do this.data[i], we get arrays within arrays because of the set method where we do
  this.data[address] = 0, ex: [['apples, 54]]. Thus, we use this.data[i][0][0] instead, the first
   [0] to remove the outter array, ex:['apples, 54], and the second [0] for the first index.  */

  keys() {
    if (!this.data.length) {
      return undefined
    }
    let result = []
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
      // if it's not an empty memory cell
      if (this.data[i] && this.data[i].length) {
        // but also loop through all the potential collisions
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            result.push(this.data[i][j][0])
          }
        } else {
          result.push(this.data[i][0])
        }
      }
    }
    return result;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')
console.log(myHashTable.keys())