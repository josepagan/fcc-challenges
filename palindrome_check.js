function palindrome(str) {
  var strLowCase = str.toLowerCase();
  var arrayed = strLowCase.split(''); //converted to array
  var filtered = arrayed.filter(function(val){
    return (96<val.charCodeAt(0) && val.charCodeAt(0)<123) || (47<val.charCodeAt(0) && val.charCodeAt(0)<58);
}); // we filter using charcode at between the specific ranges so only lowcase alphabet and number will pass

  var normalStr = filtered.join(''); //we make string in straight
  filtered.reverse();
  var reversedStr = filtered.join('');//we make string out of reversed
  return normalStr == reversedStr; //we compare

}
