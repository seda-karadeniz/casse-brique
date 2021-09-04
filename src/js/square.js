const square={
    game: null,
    x: 0,
    y:0,
    width:100,
    height:15,
    speed: 5,

    init(game){
        this.game = game;
        this.y = this.game.canvas.height - 50;
        this.x = this.game.canvas.width/2 - this.width/2;

    },
    update(){
        this.draw();
        this.goLeft();
        this.goRight();
    },
    draw(){
        this.game.ctx.beginPath();
        this.game.ctx.rect(this.x, this.y, this.width, this.height);
        this.game.ctx.fill();
        this.game.ctx.closePath();
    },
    goRight(){
        if (this.x + this.width > this.game.canvas.width ){
            this.x = this.game.canvas.width - this.width;
            //pour qu'il reste dans sont coin
        }


        this.x += this.speed;
    },
    goLeft(){
        if ( this.x < 0 ){
            this.x = 0;
        }


        this.x -= this.speed;
    }
}
export default square;