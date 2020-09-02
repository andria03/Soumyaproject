class Story{
    constructor(){
        this.paragraph=createElement('p');
        this.start=createButton("Start")
        this.image=createImg("images/seq.png")
    }
    display(){

        this.paragraph.html("There is a group called as sad seven </br> because they never get chance to win </br>against other people so now its  up to will  </br>you make the sad seven as the lucky seven ");
        this.paragraph.position( 200,200 )
        
        this.start.position(displayWidth-900,displayHeight-450)
       // this.image.size(displayWidth,displayHeight)
        //this.image.position(0,displayHeight/2)
       // image(this.image,0,100)
        this.start.style('background-color', "lightblue")
        this.paragraph.style('font-size', '22px')
        this.paragraph.style('color', "darkblue")
        
        this.start.mousePressed(()=>{
        gamestate=1 
        this.image.hide();
        this.paragraph.hide();
        this.start.hide();
               
        })
        
    }
}