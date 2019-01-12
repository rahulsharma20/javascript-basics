// Local scope

function defineX() {
    var x = 5; // x has a local scope and can only be accessed within the function defineX()

    document.write('x has a local scope and can only be accessed within defineX function. Value of x is ' + x + '<br>');
}
defineX();

try {
    document.write('value of x here is ' + x);
} catch (e) {
    document.write(e + '. x is not accessible outside defineX function');
}