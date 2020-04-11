// Intermediate Algorithm Scripting: Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note
// You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
  const diffArrayPartial = (arr1, arr2) =>
    //we create a empty array, then if the array2 includes the current, we
    //will concat the current to the accumulator, if not we just return
    //the previous accumulator.
    arr1.reduce(
      (prev, current) => !arr2.includes(current) ? [...prev,current] : prev,
      []
    );

  return [...diffArrayPartial(arr1,arr2),...diffArrayPartial(arr2,arr1)];
}

console.log(diffArray([1, 2, 3, 5, 6, 0], [1, 2, 3, 4, 5, 9, 25]));
