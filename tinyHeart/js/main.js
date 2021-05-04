var can1;
var can2;

var ctx1;
var ctx2;

document.body.onload = game;
function game() {
  console.log("load");
}

function init() {
  can1 = document.getElementById("canvas1"); //fishes dust, ui, circle
  ctx1 = can1.getContext();

  can2 = document.getElementById("canvas2"); //background, ane, fruits
  ctx2 = can2.getContext();
}

function gameloop() {
  requestAnimationFrame(gameloop);
}
