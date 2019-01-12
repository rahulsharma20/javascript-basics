// Onmouseover event

var numberOfTimes = 0;
function increment() {
    numberOfTimes++;
    document.getElementById("showNumberOfTimesHovered").innerHTML = "You have hovered " + numberOfTimes + " time" + (numberOfTimes > 1 ? 's' : '');
}