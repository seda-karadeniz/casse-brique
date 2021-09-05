import square from "./square";
const gameControllers = {
    init(game){
        window.addEventListener('keydown', (e)=>{
            if (e.key === 'd'){
                if (game.pinkMode === false){
                    document.body.style.backgroundColor = 'pink';
                    game.pinkMode = true;
                }
                else if (game.pinkMode === true){
                    document.body.style.backgroundColor = '#da8fdd';
                    game.pinkMode = false;
                }
            }
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