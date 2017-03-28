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

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
