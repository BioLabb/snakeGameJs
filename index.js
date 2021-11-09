$(document).ready(function(){
    // hightlight phim di chuyen khi dc nhan
$(document).keydown(function(e){
    var key = e.key.toLowerCase();
    $("."+key).toggleClass("color-yellow");
    // huy hightlight 
    setTimeout(()=>{
        $("." + key).removeClass("color-yellow")
    },200);

});

var pointBefore = 0;
var pointUpdate = setInterval(()=>{
   var pointNow = game.snake.body.length-1;
   if(pointNow > pointBefore){
       pointBefore = pointNow;
       $(".current-point").text(pointNow);
   }
   if(game.endGame()){
    clearInterval(pointUpdate);
    var maxPoint = $(".max-point");
    if(pointNow > Number(maxPoint.text())){
        maxPoint.text(pointNow);
    }

   }
   
},500)



});