
/** Method 1 **/
function reverse(str){
  if(!str || typeof str != 'string' || str.length < 2 ) return str;

  const backwards = [];
  const totalItems = str.length - 1;
  for(let i = totalItems; i >= 0; i--){
    backwards.push(str[i]);
  }
  return backwards.join('');
}

/** Method 2 **/
function reverse2(str){
  return str.split('').reverse().join('');
}

/** Method 3 **/
const reverse3 = str => [...str].reverse().join('');  // spread operator

/** Method 4 **/
const reverse3 = str => str.split().reverse().join('');

reverse('Timbits Hi')
reverse('Timbits Hi')
reverse3('Timbits Hi')