class Snake{
    constructor(game){
        this.game = game;
        this.grid = GRID;

        this.x = 0;
        this.y = 0;
        this.dx = this.grid;
        this.dy = 0;

        this.body = [{x:this.x, y:this.y}]
        this.maxBody = 1;

    }

    update(){
        this.x += this.dx;
        this.y += this.dy;
    
        this.body.unshift({x:this.x, y:this.y});
        if(this.body.length > this.maxBody)
            this.body.pop();
        this.moveHandle();

    }

    draw(){

        //draw head
        this.game.context.fillStyle = "yellow";
        this.game.context.fillRect(this.body[0].x,this.body[0].y,this.grid,this.grid)
        
        //draw body
        for (let i = 1 ; i < this.body.length;i++) {
            this.game.context.fillStyle = 'red';
            this.game.context.fillRect(this.body[i].x,this.body[i].y,this.grid,this.grid);
        }
        
    }

    moveHandle(){
        document.addEventListener("keydown",(e)=>{
            var key = e.key.toLocaleLowerCase();
            if(key == 'a' && this.dx == 0){
                this.dx = -this.grid;
                this.dy = 0;
            }else if(key =='w' && this.dy == 0 ){
                this.dx = 0;
                this.dy = -this.grid;
            }else if(key == 'd' && this.dx == 0){
                this.dx = this.grid;
                this.dy = 0;
            }else if(key =='s' && this.dy == 0){
                this.dx = 0;
                this.dy = this.grid
            }
        })
        
    }

    eat(x,y){
            if(this.snake.body[0].x = x && 
                this.snake.body[0].y == y ){
                    this.snake.maxBody++;
                }
        }

    hitTheWall(){
        if(this.x > this.game.canvas.width){
                return true;
            }else if(this.x < 0){
                return true;
            }else if(this.y > this.game.canvas.height){
                return true;
            }else if(this.y < 0){
                return true;
            }
        return false;
    }

}