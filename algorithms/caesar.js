function rot13(str) { // LBH QVQ VG!
    //converting to array
    var arrayed = str.split('');
    //converting to unicode
    var arrayedUnic = arrayed.map(function(val) {
        return val.charCodeAt();
    });
    //if value is not capital letter(unicode<65 or>90) return same otherwise process
    var arrayedUnicProcessed = arrayedUnic.map(function(val) {
        if ((val < 65) || (val > 90)) {
            return val;
        } else {
            return processed(val);
        }
    });
    //processed is the calculation of the unicode
    function processed(x) {
        if ((x - 13) >= 65) {
            return x - 13;
        } else {
            return x + 13;
        }
    }

    //getting letters back!!!
    var arrayDecoded = arrayedUnicProcessed.map(function(val) {
        return String.fromCharCode(val);
    });
    //back to string!!!
    var stringDecoded = arrayDecoded.join('');
    return stringDecoded;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
