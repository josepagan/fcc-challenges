// Intermediate Algorithm Scripting: Steamroller
// Flatten a nested array. You must account for varying levels of nesting.



function steamrollArray(arr) {
    const newArr = [];
    arr.forEach(element => {
        if (Array.isArray(element)) newArr.push(...steamrollArray(element))
        else newArr.push(element)
    });
    return newArr
}
  console.log(steamrollArray([1, [2], [3, [[4]]]]));