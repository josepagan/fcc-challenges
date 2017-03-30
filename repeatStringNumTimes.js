function repeatStringNumTimes(str, num) {
    // repeat after me
    var total = "";
    for (var n = 0; n < num; n++) {
        total = total + str;
    }
    return total;
}

console.log(repeatStringNumTimes("abc", -2));
