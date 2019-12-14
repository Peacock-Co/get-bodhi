class Birds {
  constructor(ctx) {
    this.img = new Image();
    this.img.src = "./img/bird.png";
    this.ctx = ctx;

    this.x = 0;
    this.y = 0;
    this.width = 50;
    this.height = 40;

    this.x = Math.floor(Math.random() * (canvas.width - this.width));
    this.y = this.height - -700;

    this.y0 = this.height * 0.6;

    this.vx = 6;
  }

  drawBirds() {
    this.ctx.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  moveBirds() {
    this.y -= 6; //velocidad de movimiento
  }
}
