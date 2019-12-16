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
    this.time = 3;
    this.birds = [];
    this.counter = 0;
    this.intervalId;
  }

  redenring() {
    this.interval = setInterval(() => {
      this.framesCounter++;

      this.drawAll();
      this.moveAll();
      this.moveBirds();

      this.stop();
      //if (this.checkCollision()) this.gameOver();

      if (this.framesCounter % 60 == 0) {
        //velocidad de la aparición de pajaros
        this.time--;
        this.generateBird();
      }
      this.checkCollision(this.birds, "bird");
      this.clearBird();

      //this.clearBirds(); //lo nombras para que te haga caso limpiar
      //if (this.isCollision()) this.gameOver();

      this.framesCounter =
        this.framesCounter > 1000
          ? (this.framesCounter = 0)
          : this.framesCounter;
    }, 1000 / this.fps);
  }

  checkCollision(arrayColision, value) {
    if (this.isCollision(arrayColision)) {
      //añadir todo lo que quieras que pase cuando haga colision
      if (value == "bird") {
        this.time -= 1; //resta -1 la vida
        this.johnny.framesCounter = 1;
        this.stop();
      }
    }
    setTimeout(
      function() {
        //reciba la segunda imagen y le aplica el tiempo en cambiar
        this.johnny.framesCounter = 0;
      }.bind(this),
      500
    );
  }

  isCollision(arrayCollision) {
    //pinta las colisiones
    // (p.x + p.w > o.x && o.x + o.w > p.x && p.y + p.h > o.y && o.y + o.h > p.y )
    return arrayCollision.some(
      function(birds) {
        var collision =
          this.johnny.x + this.johnny.width >= birds.x &&
          this.johnny.x <= birds.x + birds.width &&
          this.johnny.y + this.johnny.height >= birds.y &&
          birds.y + birds.height >= this.johnny.y;
        if (collision) {
          birds.hit = true;
          this.score++;
          console.log(this.score);
        }
        return collision;
      }.bind(this)
    );
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

  clearBird() {
    this.birds = this.birds.filter(
      function(birds) {
        return birds.y < this.canvasHeight, this.canvasWidth && !birds.hit;
      }.bind(this)
    );
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  }

  stop() {
    if (this.time <= 0) {
      clearInterval(this.intervalId);
    }
  }

  gameOver() {
    clearInterval(this.interval);
  }
}
