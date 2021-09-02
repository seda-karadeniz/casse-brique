import square from "./square";
const gameControllers = {
    init(game){
        window.addEventListener('keydown', (e)=>{
            if (e.key === 'ArrowLeft'){
                square.goLeft();
            }else if (e.key === 'ArrowRight'){
                square.goRight();
            }
            game.hasStarted = true;
        })
    },

}
export default gameControllers;