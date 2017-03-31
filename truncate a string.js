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

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 100));
