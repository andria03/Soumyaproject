//var canvas
var gamestate=3;
var board;
var bg;

var playercreated=false;
function setup(){
   createCanvas(displayWidth,displayHeight)
 //  createCanvas(screen.width,screen.height)
    //story=new Story()
    board=new Board();
    board.setcards();
      bg= loadImage("images/background2.jpg")
   
 }
    function draw(){
       background(bg);
      if( gamestate===0){
      //  story.display();
     }
     else if(gamestate===1){


       
     }

     if (gamestate===3){
        
        board.display();
        drawSprites();
      //   if(!playercreated){
      //      player1=new Player();
      //      player2= new Player();
      //   }



     }
     }