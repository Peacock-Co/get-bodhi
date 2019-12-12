class Obstacles {
  constructor(ctx, displacement, canvasWidth, canvasHeight) {
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.displacement = displacement;
    this.y = canvasHeight;

    this.vx = 4;

    this.image = new Image();
    this.image.src = ctx.fillRect(260, 260, 30, 30);
  }

  draw() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    this.ctx.drawImage(this.image2, this.x, this.y2, this.width, this.height);
  }
}
