var secondes = 0;
var minutes = 0;
var click = false;
$("#play").click(function () {
  Start();
});
$("#stop").click(function () {
  Stop();
});
function chrono() {
  secondes += 1;
  if (secondes > 59) {
    minutes += 1;
    secondes = 0;
  }

  if (minutes < 10 && secondes < 10) {
    $("#timer").html("0" + minutes + " : 0" + secondes);
  }
  else if (minutes < 10 && secondes >= 10) {
    $("#timer").html("0" + minutes + " : " + secondes);
  }
  else if (minutes >= 10 && secondes < 10) {
    $("#timer").html(+minutes + " : 0" + secondes);
  }
  else if (minutes >= 10 && secondes > 10) {
    $("#timer").html(+minutes + " : " + secondes);
  }
}

function Start() {
  if (click === false) {
    timerID = setInterval(chrono, 1000);
    click = true;
  }
}

function Stop() {
  if (click === true) {
    click = false;
    clearTimeout(timerID);
  }
}

