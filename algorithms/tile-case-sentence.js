function titleCase(str) {
    array = str.split(' ');
    var newArray = array.map(function(val) {
        return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
    });
    return newArray.join(' ');
}

console.log(titleCase("I'm a littlE tea pot"))
