var colors = generatedRandomColors(6);

var squares=document.querySelectorAll(".square");
var colorDisplaying = document.getElementById("colorDisplaying");
var colorChoosen=choosecolor();
var message=document.getElementById("message");

colorDisplaying.textContent = colorChoosen;


for (var i = 0; i < squares.length; i++){

  squares[i].style.background = colors[i];
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.background;
      if(clickedColor === colorChoosen){
        message.textContent="GREAT!!!";
        greatcolor(clickedColor);
      } else{
        console.log(colorChoosen, clickedColor);
        this.style.background="#000000";
        message.textContent="TRY AGAIN!!!"
      }
  });
}


function greatcolor(col){
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background=col;
  }
}

function choosecolor(){
  var randomColor=Math.floor(Math.random() * colors.length);
  return colors[randomColor];
}

function generatedRandomColors(number){
  array=[]
  for (var i = 0; i < number; i++) {
    array.push(randomColors())
  }
  return array;
}

function randomColors(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb("+ r +", "+ g +",  "+ b +")";
}
