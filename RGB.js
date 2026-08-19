var numSquares = 6; // default: Hard
var colors = [];
var colorChoosen;

var squares = document.querySelectorAll(".square");
var colorDisplaying = document.getElementById("colorDisplaying");
var message = document.getElementById("message");
var resetBtn = document.getElementById("reset");
var easyBtn = document.getElementById("easybtn");
var mediumBtn = document.getElementById("mediumbtn");
var hardBtn = document.getElementById("hardbtn");

// Difficulty buttons
easyBtn.addEventListener("click", function () {
  numSquares = 3;
  setActiveButton(this);
  reset();
});

mediumBtn.addEventListener("click", function () {
  numSquares = 6;
  setActiveButton(this);
  reset();
});

hardBtn.addEventListener("click", function () {
  numSquares = 9;
  setActiveButton(this);
  reset();
});

// Reset / New Colors button
resetBtn.addEventListener("click", function () {
  reset();
});

function setActiveButton(btn) {
  var buttons = document.querySelectorAll("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("level");
  }
  btn.classList.add("level");
}

function reset() {
  colors = generatedRandomColors(numSquares);
  colorChoosen = choosecolor();
  colorDisplaying.textContent = colorChoosen;
  message.textContent = "";

  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
    } else {
      squares[i].style.background = "transparent";
      squares[i].style.display = "none";
    }
  }
}

// Attach click listeners to all squares
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function () {
    var clickedColor = this.style.background;
    if (clickedColor === colorChoosen) {
      message.textContent = "GREAT!!!";
      greatcolor(clickedColor);
    } else {
      this.style.background = "#232323";
      message.textContent = "TRY AGAIN!!!";
    }
  });
}

function greatcolor(col) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = col;
  }
}

function choosecolor() {
  var randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function generatedRandomColors(number) {
  var array = [];
  for (var i = 0; i < number; i++) {
    array.push(randomColors());
  }
  return array;
}

function randomColors() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Init
reset();
