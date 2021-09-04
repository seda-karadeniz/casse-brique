import square from "./square";
import controller from "./controller";
import Ennemie from "./Ennemie";
import ball from "./ball";

const game= {
    canvas : document.querySelector('#game'),
    ctx : null,
    hasStarted : false,
    ennemiesColomnCount : 5,
    ennemiesRowCount : 3,
    ennemiesCount : 16,
    ennemies : [],
    initialEnnemieX: 30,
    initialEnnemieY: 30,
    palierX : 70,
    palierY : 30,
    requestId : 0,

    reset(){

        this.ennemies = [];
        this.initialEnnemieX= 30;
        this.initialEnnemieY= 30;

        for (let i = 1; i < this.ennemiesCount; i++){

            this.ennemies.push(new Ennemie(this, this.initialEnnemieX, this.initialEnnemieY));
            this.initialEnnemieX += this.palierX;
            if (i % this.ennemiesColomnCount === 0 ){
                this.initialEnnemieY += this.palierY;
                this.initialEnnemieX = 30;
            }
        }

    },

    init(){

        this.ctx = this.canvas.getContext('2d');
        controller.init(this);
        square.init(this);


        for (let i = 1; i < this.ennemiesCount; i++){

            this.ennemies.push(new Ennemie(this, this.initialEnnemieX, this.initialEnnemieY));
            this.initialEnnemieX += this.palierX;
            if (i % this.ennemiesColomnCount === 0 ){
                this.initialEnnemieY += this.palierY;
                this.initialEnnemieX = 30;
            }
        }
        ball.init(this);

        this.animate();
    },
    animate(){
        this.requestId = window.requestAnimationFrame(()=>{
            this.animate();
        })
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        square.update();

        this.ennemies.forEach(ennemie=>{
            ennemie.update();

        })
        ball.update();

    },
    cancelAnimation(){
        window.cancelAnimationFrame(this.requestId);
    }


}
game.init();