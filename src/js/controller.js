import square from "./square";
const gameControllers = {
    init(game){
        window.addEventListener('keydown', (e)=>{
            if (e.key === ' '){

                game.hasStarted = true;
            }
            if (e.key === 'ArrowLeft'){
                square.goLeft();
            }else if (e.key === 'ArrowRight'){
                square.goRight();
            }

        })
    },

}
export default gameControllers;