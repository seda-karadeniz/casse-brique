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

        this.game.ctx.rect(this.x, this.y, this.width, this.height);
        this.game.ctx.fill();

        this.game.ctx.closePath();
    }
    isCollisionned(ball) {
        if (ball.y > this.y
            && ball.y - ball.height < this.y + this.height
            && ball.x > this.x
            && ball.x < this.x + this.width) {

            ball.speed = -ball.speed;
            delete this.x;
            delete this.y;
        }
    }


}