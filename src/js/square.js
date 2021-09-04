const square={
    game: null,
    x: 0,
    y:0,
    width:100,
    height:15,
    speed: 7,
    moving : 0, // 0 = no move, 1 = left, 2 = right

    init(game){
        this.game = game;
        this.y = this.game.canvas.height - 50;
        this.x = this.game.canvas.width/2 - this.width/2;

    },
    update(){
        this.draw();

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
        this.moving = 2;
        setTimeout( ()=>{
            this.moving = 0;
        }, 500);
        // moving = 2 puis remet a 0 apres 100 milisecondes


        this.x += this.speed;
    },
    goLeft(){
        if ( this.x < 0 ){
            this.x = 0;
        }
        this.moving = 1;
        setTimeout( ()=>{
            this.moving = 0;
        }, 500);


        this.x -= this.speed;
    },
    isCollisionned(ball){
        if(ball.y+ball.height > this.y
            && ball.y+ball.height < this.y + this.height
            && ball.x > this.x
            && ball.x < this.x +this.width){

            ball.speed = -ball.speed;
            if (this.moving === 1 ){
                ball.direction += 2.5;

            }
            if (this.moving === 2 ){
                ball.direction -= 2.5;

            }
        }

    }
}
export default square;