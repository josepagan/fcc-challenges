function sumAll(arr) {
    arr.sort((a,b)=> a - b)
  if (arr[0] === arr[1]) return arr[1];
  else return arr[0] + sumAll([arr[0] + 1, arr[1]]);
}

console.log(sumAll([4, 1]));
