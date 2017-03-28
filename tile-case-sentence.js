
function titleCase(str) {
  array = str.split(' ');
  var newArray = array.map(function(val){
    return val.charAt(0).toUpperCase() + val.slice(1);
  })
return newArray.join(' ');
}

console.log(titleCase("I'm a little tea pot"))
