function findLongestWord(str) {
    var array = str.split(' ');
    var max = array.reduce(function(previous, current) {
        if (current.length > previous.length) {
            return current;
        } else {
            return previous;
        }
    });
    return max.length
}


//much shorter version first mappig into lenghts and then returning the max value.
function findLongestWordLength(str) {
  let array = str.split(' ').map(value=>value.length);
  return Math.max(...array);

}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
