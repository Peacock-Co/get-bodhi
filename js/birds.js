class Birds {
  constructor(ctx) {
    this.img = new Image();
    this.img.src = "./img/birds.png";
    this.ctx = ctx;

    this.x = 0;
    this.y = 0;
    this.width = 150;
    this.height = 150;

    this.x = Math.floor(Math.random() * (canvas.width - this.width));
    this.y = this.height - -700;

    this.y0 = this.height * 0.6;

    this.vx = 6;

    this.frames = 4;
    this.framesIndex = 0;
  }

  drawBirds(framesCounter) {
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
    this.animate(framesCounter);
  }

  moveBirds() {
    this.y -= 6; //velocidad de movimiento
  }

  animate(framesCounter) {
    if (framesCounter % 10 === 0) {
      this.framesIndex++;

      if (this.framesIndex > 3) this.framesIndex = 0;
    }
  }
}