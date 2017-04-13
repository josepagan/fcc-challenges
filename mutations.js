// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
//
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
//
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
//
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".


function mutation(arr) {
  var a = arr[0].toLowerCase();
  var b = arr[1].toLowerCase();
    for (var n = 0; n < b.length; n++) {
      console.log(b[n],a.indexOf(b[n])); //we loop through every letter from the second element
        if (a.indexOf(b[n])<0) {    //we try to find that letter on first element, if we get negative that means that the letter is not there, we return false
          console.log(false);
          return false;
        }
    }
    console.log(true);  //if it pass trhough the loop without loop
    return true;
}

mutation(["hello", "Hello"])
