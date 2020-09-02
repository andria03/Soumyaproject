class Board{
    constructor(){
            this.board = new Array(10);
            this.image= new Array(10);

            for (var i = 0; i <10; i++) { 
                this.image[i] = new Array(10); 
            }

            for (var i = 0; i <10; i++) { 
                this.board[i] = new Array(10); 
            }
            
             var y=((displayHeight/4)/2);
             //var y=0;
            for(var i=0;i<10;i++){
             var  x=(displayWidth/10)/2;
             console.log(x);
                 for(var j=0;j<10;j++){
                    
                   
                     this.board[i][j]=createSprite(x,y,displayWidth/10,displayHeight/10);
                      stroke("yellow");
                      x=x+(displayWidth/14)+2;
                     // console.log("i="+i,"j="+j)
                      
                      
                      
                    //  console.log(this.board[i][j]);
                    //  console.log("x"+this.board[i][j].position.x)
                    //  console.log("y"+ this.board[i][j].position.y)
                      
                }
                y=y+((displayHeight/12)+2);
             }
             this.deck=createSprite(displayWidth-100,displayHeight/2);
             this.deckimage=loadImage("images/deck.png");
             this.selectedcard=createSprite(displayWidth-250,displayHeight/2);
             
        
    }

  setcards(){
        for(var i=0;i<10;i++){
              for(var j=0;j<10;j++){
                  this.image[i][j]=loadImage("BoardCards/"+i+j+".jpg",displayWidth/10,displayHeight/10);
                 // console.log(this.image[i][j]);
              }
         }

    } 

    display(){
        for(var i=0;i<10;i++){
          
            for(var j=0;j<10;j++){
                if( j%2===0){
                    this.board[i][j].shapeColor="red";
                  }
                  else{
                    this.board[i][j].shapeColor="blue";
                  }
                 this.board[i][j].addImage(this.image[i][j]);
               //  this.board[i][j].debug=true;
                 this.board[i][j].rotation=90
           //     imageMode(CENTER);
           //    image(this.image[i][j],this.board[i][j].position.x,this.board[i][j].position.y,50,150);
            
        }
        
    }
    this.deck.addImage(this.deckimage);
    if(mouseIsPressed){
        var rand1= Math.round(random(0,99));
        var card=loadImage("CardsSet/"+rand1+".jpg")
        this.selectedcard.addImage(card);
    }

    }
    
}