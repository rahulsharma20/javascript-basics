// Onmouseout event

number = 0;
function increment() {
    number++;
    document.getElementById("showNumberOfTimesLeft").innerHTML = "You have moved your mouse away " + number + " time" + (number > 1 ? 's' : '');
}