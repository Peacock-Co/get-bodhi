document.addEventListener("keydown", function moveRight(evento) {
  if (evento.keyCode === 39) {
    console.log("right");
  }
});

document.addEventListener("keydown", function moveLeft(evento) {
  if (evento.keyCode === 37) {
    console.log("left");
  }
});

let imgJonny, imgNube, imgBirds;

function loadImg() {
  imgJonny = new Image();
}

let width = 700;
let height = 700;

let canvas, ctx;

function inicialize() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  loadImg();
}

function clear() {
  canvas.width = height;
  canvas.height = height;
}

// Rendering
let FPS = 10;
setInterval(() => {
  main();
}, 1000 / 10);

function main() {
  clear();
}
