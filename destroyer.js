// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.



function destroyer(arr) {
    // Remove all the values

    var lista = [];
    var numeros = [];
    for (var i = 1; i < arguments.length; i++) {
        numeros.push(arguments[i]);
    }
    for (var p = 0; p < arguments[0].length; p++) {
        lista.push(arguments[0][p]);
    }
    var procesada = lista.filter(function(value) {
        return (numeros.indexOf(value) == -1);
    });
    return procesada;
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
