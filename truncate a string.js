function truncateString(str, num) {
    if (num>=str.length) {  //if number is big enough no need to truncate
      return str;
    } else {

    var dotspace = 0;  //if truncation leave only 3 or less extra space is allowed
    if (num > 3) {
        dotspace = 3;
    }
    return str.slice(0, num - dotspace) + "...";
  }
}

//revisiting old exercises... this function is too conplicated.
//newer is much simpler... just i use substr and if it matches the original i leave it
// if it doesnt I just add '...'

function truncateStringNew(str, num) {
  // Clear out that junk in your trunk
  let x = str.substr(0,num);
  if (x!==str){
    x += "..."
  }
  return x
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 100));
