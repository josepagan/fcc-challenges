// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.




function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    arr.push(num);
    console.log(arr);
    arr.sort(function(a,b){   //function a-b to sort by number instead of unicode
      return a-b;
    });
    console.log(arr);
     return arr.findIndex(function(val){ //findIndex also requires function to determine index, simple equality will work
      return val==num;
    });

}

console.log(getIndexToIns([3, 10, 5], 3));
