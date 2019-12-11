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
  draw() {
    this.background.draw();
    // this.johnny.draw(this.framesCounter);
  }

  redenring() {
    this.interval = setInterval(() => {
      this.framesCounter++;

      this.draw();

      this.framesCounter =
        this.framesCounter > 1000
          ? (this.framesCounter = 0)
          : this.framesCounter;
    }, 1000 / this.fps);
  }
}
