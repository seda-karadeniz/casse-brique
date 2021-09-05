import square from "./square";

const ball = {
    game: null,
    x:0,
    y:0,
    height: 7,
    width : 7,
    speed : 2,
    direction : 0,
    colors : ['#fc03a5','#9e3e7c', '#d18cb9','#a68a9f', '#876175','#91497e'],
    currentColor : 'black',

    init(game){
        this.game = game;
        this.x = this.game.canvas.width/2;
        this.y = this.game.canvas.height/2;

    },
    update() {
        this.draw();

        this.y+= this.speed;
        this.x+= this.direction;

        this.collisions();
    },
    draw() {

        this.game.ctx.beginPath();

        this.game.ctx.ellipse(this.x, this.y, this.width, this.height, 0, 0, Math.PI * 2/*tout le cercle math.pi = demi cercle *2 = entier*/, false);
        this.game.ctx.fillStyle = this.currentColor;
        this.game.ctx.fill();
        this.game.ctx.fillStyle = 'black';
        this.game.ctx.closePath();
    },
    changeColor(){
        let colorsWithoutCurrent = [...this.colors];
        colorsWithoutCurrent.splice(colorsWithoutCurrent.indexOf(this.currentColor), 1);
        this.currentColor = colorsWithoutCurrent[Math.floor(Math.random()*colorsWithoutCurrent.length)];

    },
    collisions(){
        this.bottomCollision();
        this.topCollision();
        this.borderCollision();
        square.isCollisionned(this);
        this.brickCollision();

    },
    bottomCollision(){
        if (this.y+this.height > this.game.canvas.height){
            this.x = this.game.canvas.width/2;
            this.y = this.game.canvas.height/2;
            this.direction = 0;
            this.speed = 2;
            this.game.reset()

        }
    },
    topCollision(){
        if (this.y<=0){
            ball.speed = -ball.speed;
        }
    },
    borderCollision(){
        if (this.x <= 0 || this.x + this.width >= this.game.canvas.width){
            this.direction = -this.direction;
        }
    },
    brickCollision(){
        for (const ennemie of this.game.ennemies) {
            ennemie.isCollisionned(this);
        }

    }


}
export default ball;