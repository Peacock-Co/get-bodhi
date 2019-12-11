class Johnny {
  constructor(ctx) {
    this.ctx = ctx;

    this.width = 58;
    this.height = 38;
    this.x = 350;
    this.y = 200;

    this.image = new Image();
    this.image.src = "./img/SkyDiver.png";

    this.frames = 3;
    this.framesIndex = 0;

    this.hasGameStarted = false;

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
