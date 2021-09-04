export default class Ennemie {
    constructor(game,x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 10;

    }
    update(){
      this.draw();

    }
    draw(){
        this.game.ctx.beginPath();

        //this.x += 20;
        this.game.ctx.rect(this.x, this.y, this.width, this.height);
        this.game.ctx.fill();

        this.game.ctx.closePath();
    }
}