// Intermediate Algorithm Scripting: Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be
//  evenly divided by both, as well as by all sequential numbers in the range
//   between these parameters.

// The range will be an array of two numbers that will not necessarily be in
//  numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both
//  1 and 3 that is also evenly divisible by all numbers between 1 and 3.
//  The answer here would be 6.

function smallestCommons(arr) {
    arr = arr.sort((a,b)=>a-b)
  const newArr = new Array(arr[1] - arr[0]+1)
    .fill(null)
    .map((el, i) => i + arr[0]);
  console.log(newArr);
  let x = newArr[0];
  while (!newArr.every((el) => x % el === 0)) {
    x++;
  }
  return x;
}

console.log(smallestCommons([23,18]));
