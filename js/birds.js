class Birds {
  constructor(ctx) {
    this.img = new Image();
    this.img.src = "./img/bird.png";
    this.ctx = ctx;

    this.x = 0;
    this.y = 0;
    this.width = 30;
    this.height = 50;

    this.x = Math.floor(Math.random() * (canvas.width - this.width));
    this.y = canvas.height - 700;

    this.y0 = canvas.height * 0.8;

    this.vx = 8;
  }

  drawBirds() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  moveBirds() {
    this.y += 8; //velocidad de movimiento
  }
}
