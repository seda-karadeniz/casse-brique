import square from "./square";
import controller from "./controller";

const game= {
    canvas : document.querySelector('#game'),
    ctx : null,
    hasStarted : false,

    init(){
        this.ctx = this.canvas.getContext('2d');
        controller.init(this);
        square.init(this);
        this.animate();
    },
    animate(){
        window.requestAnimationFrame(()=>{
            this.animate();
        })
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        square.update();
    },


}
game.init();