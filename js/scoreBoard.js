class Scoreboard {
  constructor(ctx, score) {
    this.ctx = ctx;
    this.score = score;
  }

  draw(score) {
    this.ctx.fillStyle = "black"
    this.ctx.font = '50px sans-serif'
    this.ctx.fillText(score, 640, 60)
  }
}