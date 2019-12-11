class Johnny {
  constructor(ctx, canvasWidth) {
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;

    this.width = 58;
    this.height = 38;
    this.x = 350;
    this.y = this.canvasWidth / 2 - this.width / 2;

    this.image = new Image();
    this.image.src = "./img/skydiver.png";

    this.frames = 3;
    this.framesIndex = 0;
    this.vx = 40;

    this.birds = [];

    this.hasGameStarted = false;

    this.setListener();
  }

  draw(framesCounter) {
    this.ctx.drawImage(
      this.image,
      this.framesIndex * Math.floor(this.image.width / this.frames),
      0,
      Math.floor(this.image.width / this.frames),
      this.image.height,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
    this.animate(framesCounter);
  }

  animate(framesCounter) {
    if (framesCounter % 10 === 0) {
      this.framesIndex++;

      if (this.framesIndex > 2) this.framesIndex = 0;
    }
  }

  setListener() {
    document.addEventListener(
      "keydown",
      function moveRight(e) {
        if (e.keyCode === 39) {
          if (!this.hasGameStarted) this.hasGameStarted = true;
          this.x += this.x;
          console.log("Right");
        }
      }.bind(this)
    );
    document.addEventListener(
      "keydown",
      function moveLeft(e) {
        if (e.keyCode === 37) {
          this.x += this.x;
          console.log("Left");
        }
      }.bind(this)
    );
  }
}
