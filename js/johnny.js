class Johnny {
  constructor(ctx, canvasHeight) {
    this.ctx = ctx;
    this.canvasHeight = canvasHeight;

    this.width = 68;
    this.height = 48;
    this.x = 325;
    this.y = this.canvasHeight / 2 - this.height / 2;

    this.image = new Image();
    this.image.src = "./img/skydiver.png";

    this.frames = 3;
    this.framesIndex = 0;

    this.vx = 40; //velocidad de movimiento
    this.hasGameStarted = false;
    this.moveLeft = 37;
    this.moveRight = 39;
    this.setListener();
  }

  draw(frameCounter) {
    this.ctx.drawImage(
      this.image,
      this.framesIndex * Math.floor(this.image.width / this.frames),
      0,
      Math.floor(this.image.width / this.frames),
      this.image.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  setListener() {
    document.addEventListener(
      "keydown",
      function move(e) {
        e.preventDefault();

        /* switch(e.keyCode) {                        // movimiento en x del arbolito
               case izq: this.x -= this.vx;
               break;
               case drch: this.x += this.vx;
               break;*/
        switch (e.keyCode) {
          case this.moveLeft:
            if (this.x - this.vx >= 0) {
              this.x -= this.vx;
            }
            break;

          case moveRight:
            if (this.x + this.vx + this.width <= this.game.canvas.width) {
              //movimiento drch y le restas ls px de la figura
              this.x += this.vx;
            }
            break;
        }
      }.bind(this)
    );
  }
}
