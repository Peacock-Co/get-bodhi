class Scoreboard {
  constructor() {
    this.ctx = ctx;
    this.score = score;
  }

  draw(score) {
    this.ctx.fillStyle = "black"
    this.ctx.font = '40px sans-serif'
    this.ctx.fillText(score, 650, 650)
  }
}