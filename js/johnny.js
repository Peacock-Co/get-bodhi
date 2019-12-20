class Johnny {
  constructor(ctx) {
    this.ctx = ctx;

    this.width = 68;
    this.height = 48;
    this.x = 325;
    this.y = 325;


    this.image = new Image(150, 35);
    this.image.src = "./img/johnny.png";

    this.frames = 3;
    this.framesIndex = 0;

    this.vx = 30; //velocidad de movimiento
    this.hasGameStarted = false;
    this.moveLeft = 37;
    this.moveRight = 39;
    this.moveUp = 38;
    this.moveDown = 40;
    this.setListener();
  }

  draw() {
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
            if (this.x - this.vx >= -20) {
              this.x -= this.vx;
              console.log("Right");
            }
            break;

          case this.moveRight:
            if (this.x + this.vx <= 654) {
              //movimiento drch y le restas ls px de la figura
              this.x += this.vx;
              console.log("Left");
            }
            break;

          case this.moveUp:
            if (this.y + this.vx <= 700) {
              //movimiento drch y le restas ls px de la figura
              this.y -= this.vx;
              console.log("Up");
            }
            break;

          case this.moveDown:
            if (this.y + this.vx <= 680) {
              //movimiento drch y le restas ls px de la figura
              this.y += this.vx;
              console.log("Down");
            }
            break;
        }
      }.bind(this)
    );
  }
}