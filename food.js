function randomNum(min,max){
    return Math.floor(Math.random() *(max-min)) + min ;
}

class Food{
    constructor(game){
        this.game = game;
        this.body = GRID;
        this.x = randomNum(0,this.game.canvas.width/this.body-1) * this.body ;
        this.y = randomNum(0,this.game.canvas.height/this.body-1) * this.body;
    }

    update(){

        this.x = randomNum(0,this.game.canvas.width/this.body-1) * this.body ;
        this.y = randomNum(0,this.game.canvas.height/this.body-1) * this.body;

        for(let i in this.game.snake.body){
            if(this.x == this.game.snake.body[i].x &&
                 this.y == this.game.snake.body[i].y)
                 this.update();
        }
    }

    draw(){
        this.game.context.fillStyle = "red";
        this.game.context.fillRect(this.x,this.y,this.body,this.body);
    }
}