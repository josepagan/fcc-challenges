function repeatStringNumTimes(str, num) {
  // repeat after me
  let resultString = "";
  for (let i=0;i<num;i++){
    resultString += str
  }
  return resultString
}

console.log(repeatStringNumTimes("abc", 0));
