function largestOfFour(arr) {
    var max = arr.map(function(val) {    //we itinerate over the four elements val is each subarray
        return val.reduce(function(lot, next) { //we want to return the biggest in each, so we apply a reduce to val
            if (lot > next) {
                return lot;
            } else {
                return next;
            }
        });
    });
    return max;
}
//much simpler version just with math max and map, and arrow functions.
function largestOfFour(arr) {
  // You can do this!
  return arr.map(innerArr=>Math.max(...innerArr));
}


largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);
