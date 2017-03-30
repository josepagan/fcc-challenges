
function repeatStringNumTimes(str, num) {
  // repeat after me
  for (var n=1;n<num;n++){
    str = str + str
  }
 return str
}

console.log(repeatStringNumTimes("abc", 3));
