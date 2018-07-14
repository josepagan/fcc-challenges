// Reverse the provided string.
//
// You may need to turn the string into an array before you can reverse it.
//
// Your result must be a string.

//
// function reverseString(str) {
//   return str;
// }
//
// reverseString("hello");
//


function reverseString(str) {
  var splitted = str.split('');
  var reversed = splitted.reverse();
  var rejoined = reversed.join('');
  return rejoined;
}


//Alternative version  without using reverse array method. Instead using map with value and index arguments. Just for fun.
function reverseStringAlt(str) {
  let array = str.split('');
  let mappedArray = array.map((value,index)=>array[array.length - 1 - index])
  return mappedArray.join('')
}

console.log(reverseString("hello"));

reverseString("hello")
