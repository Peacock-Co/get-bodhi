let game;
class GameCanvas {
  constructor() {
    this.canvasWidth = 700;
    this.canvasHeight = 700;
    this.ctx = document.getElementById("canvas").getContext("2d");

    this.background = new Background(
      this.ctx,
      this.canvasWidth,
      this.canvasHeight
    );

    this.johnny = new Johnny(this.ctx, this.canvasHeight);

    this.obstaclesCreated = [];

    this.fps = 60;
    this.framesCounter = 0;
    this.score = 0;
  }

  drawAll() {
    this.background.draw();

    this.johnny.draw(this.framesCounter);
  }

  redenring() {
    this.interval = setInterval(() => {
      this.framesCounter++;

      this.clear();
      this.drawAll();
      this.moveAll();

      this.framesCounter =
        this.framesCounter > 1000
          ? (this.framesCounter = 0)
          : this.framesCounter;
    }, 1000 / this.fps);
  }

  moveAll() {
    this.background.move();
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  }
}
