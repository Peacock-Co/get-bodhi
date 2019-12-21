class Bodhi {
  constructor(ctx) {
    this.img = new Image();
    this.img.src = "./img/bodhi.png";
    this.ctx = ctx;

    this.x = 0;
    this.y = 0;
    this.width = 150;
    this.height = 150;

    this.x = Math.floor(Math.random() * (canvas.width - this.width));
    this.y = this.height - -700;

    this.y0 = this.height * 0.6;
    this.vx = 6;

    this.framesIndex = 0;

  }

  drawBodhi() {
    this.ctx.drawImage(
      this.img,
      this.framesIndex * Math.floor(this.img.width / this.frames),
      100,
      Math.floor(this.img.width / this.frames),
      this.img.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  moveBodhi() {
    this.y -= 6; //velocidad de movimiento
  }
}