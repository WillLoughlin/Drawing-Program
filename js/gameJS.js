var canvasElement = document.getElementById("ctx");
var ctx = document.getElementById("ctx").getContext("2d");
var canDraw = false;
var mouseX;
var mouseY;

var eraseMode = false;
var canErase = false;
var eraseWidth = 50;
var eraseHeight = 50;

var mouseOffsetX = -12;
var mouseOffsetY = -12;

var drawSize = 10;

var fStyle = 'red';

ctx.fillStyle = fStyle;

ctx.fillRect(50, 50, 50, 50);

document.onmousemove = function(mouse){
  mouseX = mouse.clientX + mouseOffsetX;
  mouseY = mouse.clientY+ mouseOffsetY;

  if (eraseMode && canErase){
    erase(mouseX, mouseY);
  } else if (canDraw) {
    draw(mouseX, mouseY);
  }

  if (canDraw) draw(mouseX, mouseY);
}

canvasElement.addEventListener("mousedown", function (evt) {

    if (eraseMode){
      canErase = true;
      erase(mouseX, mouseY);
    } else {
      canDraw = true;
      draw(mouseX, mouseY);
    }
}, false);

canvasElement.addEventListener("mouseup", function (evt) {
    canDraw = false;
    canErase = false;
}, false);

draw = function(x,y){
  if (fStyle == 'red'){
    fStyle = 'blue';
  } else {
    fStyle = 'red';
  }
  ctx.fillStyle = fStyle;
  ctx.beginPath();
  ctx.arc(x, y, drawSize, 0, 2 * Math.PI);
  ctx.fill();
}

erase = function(x,y){
  ctx.clearRect(x - eraseWidth/2,y - eraseHeight/2, eraseWidth, eraseHeight);
}


document.onkeydown = function(event){
  //if(document.activeElement.id !== "usermsg"){
    event.preventDefault();
    if(event.keyCode === 68){
      if (eraseMode){
        eraseMode = false;
      } else {
        eraseMode = true;
      }
  }
}
