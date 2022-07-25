class Game{
    constructor(){
        this.canvas = null;
        this.context = null;
        
        this.init();
        this.loop();
    }

    // khơi tạo game
    init(){
        this.canvas = document.querySelector("canvas");
        this.context = this.canvas.getContext("2d");
        this.canvas.width = WIDTH;
        this.canvas.height = HEIGHT;

        this.snake = new Snake(this);
        this.food = new Food(this);
    }

    // tạo vòng lặp cho game chạy liên tục
    loop(){
       if(!this.endGame()){
            this.update();
            this.draw();
            setTimeout(()=>this.loop(),200);
       }else{
            this.drawEnd();
       }
    }
    
    update(){
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height)

        
        this.snake.update();
         if(this.snake.body[0].x == this.food.x && 
            this.snake.body[0].y == this.food.y ){
                // nếu food trùng với snake thì up lại
                this.food.update();
                this.snake.maxBody++;
            }
    }

    draw(){
        this.snake.draw();
        this.food.draw();
    }

    drawEnd(){
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height)
        this.context.fillStyle = "aqua"
        this.context.font = "30px Georgia";
        this.context.fillText("Ban da Thua",this.canvas.width/3,this.canvas.height/2)
    }

    endGame(){
        // dung tuong
        if(this.snake.hitTheWall())
            return true;

            // can duoi
        for (let i=1;i < this.snake.body.length; i++) {
            if(this.snake.body[0].x == this.snake.body[i].x &&
                this.snake.body[0].y == this.snake.body[i].y ){
                    return true;
                }
            }
        return false;
    }
}

var game = new Game();
