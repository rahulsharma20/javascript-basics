// Declaring function with constructor

var result;
var x = new Function("a", "b", "result=a*b");

x(4,5);
document.write('4 * 5 = ' + result);