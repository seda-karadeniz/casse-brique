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
    p : null,
    pColor : null,
    pinkMode : false,

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
        this.p = document.createElement('p');
        this.p.textContent ='appuyez sur la touche espace pour débuter le jeu';
        document.body.appendChild(this.p);
        this.p.style.textAlign = 'center';
        this.pColor = document.createElement('p');
        this.pColor.textContent = 'Vous pouvez switcher entre deux couleur en appuyant sur la touche D'
        this.p.insertAdjacentElement('afterend',this.pColor);
        this.pColor.style.textAlign = 'center';
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
        if (this.hasStarted){
            this.p.remove();
            square.update();

            this.ennemies.forEach(ennemie=>{
                ennemie.update();

            })
            ball.update();
        }


    },
    cancelAnimation(){
        window.cancelAnimationFrame(this.requestId);
    }


}
game.init();