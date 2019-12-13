class Background {
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.image = new Image();
    this.image.src = "./img/sky.png";

    this.posX = 0;
    this.posY = 0;

    this.vx = 2;
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      this.height,
      this.width
    ),
      this.ctx.drawImage(
        this.image,
        this.posX + this.width,
        this.posX,
        this.height,
        this.width
      );
  }

  move() {
    this.posY -= this.vx;

    if (this.posY <= -this.height) this.posY = 700;
  }
}
