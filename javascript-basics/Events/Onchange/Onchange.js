// Onchange Event

function changeDetected() {
    var x = document.getElementById("carSelector").value;
    document.getElementById("showResult").innerHTML = "You selected: " + x;
}