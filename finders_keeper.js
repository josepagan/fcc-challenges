function findElement(arr, func) {
  let index = 0;
  while ((func(arr[index])) == false) {
    index++
  }
  return arr[index]
}


console.log(findElement([1, 2, 3, 4], num => num % 2 === 0))
