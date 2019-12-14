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

    this.birds = new Birds(this.ctx, this.canvasWidth);

    this.fps = 60;
    this.framesCounter = 0;
    this.score = 0;
    this.time = 99;
    this.birds = [];
  }

  redenring() {
    this.interval = setInterval(() => {
      this.framesCounter++;

      this.clear();
      this.drawAll();
      this.moveAll();
      this.moveBirds();

      if (this.counter % 60 == 0) {
        //velocidad de la aparición de pajaros
        this.time--;
        this.generateBird();
      }

      this.framesCounter =
        this.framesCounter > 1000
          ? (this.framesCounter = 0)
          : this.framesCounter;
    }, 1000 / this.fps);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  }

  drawAll() {
    this.background.draw();

    this.johnny.draw(this.framesCounter);

    this.birds.forEach(function(e) {
      e.drawBirds();
    });
  }

  moveAll() {
    this.background.move();
  }

  moveBirds() {
    //Array de los pajaros
    this.birds.forEach(
      function(e) {
        e.moveBirds();
      }.bind(this)
    );
  }

  generateBird() {
    this.birds.push(new Birds(this)); //dibuja el array vacio this.birds[]
  }
}
