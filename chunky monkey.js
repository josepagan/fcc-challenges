
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var tempOut;
  var newArray = [];
while (arr.length>0){
    tempOut = arr.splice(0,size);
    newArray.push(tempOut);
  }
  console.log(newArray);
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d","e","f"], 2);
