var virusBlock;
var gameViruses = [];

function startGame() {
  // virusBlock = new component(50, 50, 'green', 300, 120);
  myGameArea.start();
}

let myGameArea = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 480;
    this.canvas.height = 800;
    this.canvas.style = "border: 2px solid"
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.frameNo = 0;
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

function everyinterval(n) {
  if ((myGameArea.frameNo / n) % 1 == 0) { return true; }
  return false;
}

function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function () {
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.newPos = function () {
    this.x += this.speedX;
    this.y += this.speedY;
  }
}

function updateGameArea() {
  var x, y;

  myGameArea.clear();
  myGameArea.frameNo += 1;
  if (myGameArea.frameNo == 1 || everyinterval(300)) {
    x = 300;
    y = 10;
    gameViruses.push(new component(100, 100, "green", x, y));
  } else if (everyinterval(200)) {
    x = 50;
    y = 10;
    gameViruses.push(new component(100, 100, "red", x, y));
  }

  for (i = 0; i < gameViruses.length; i += 1) {
    gameViruses[i].y += 1;
    gameViruses[i].update();
  }
}

window.addEventListener('load', () => {
  startGame();
});