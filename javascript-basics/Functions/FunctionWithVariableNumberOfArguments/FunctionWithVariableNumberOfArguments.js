// Function with variable number of arguments

function add() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    return result;
}

var addition = add(1,2,3,4,5,6);

document.write('Final sum is ' + addition);