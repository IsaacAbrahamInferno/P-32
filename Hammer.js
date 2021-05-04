class Hammer{

    constructor(x,y,width,heigth){
    var options={restitution:2,friction:1,density:1
    }
    this.body=Bodies.rectangle(x,y,width,heigth,options)
    this.width=width;
    this.heigth=heigth
    World.add(world,this.body)
    
    
    }
    
    display(){
    var position=this.body.position;
    var angle=this.body.angle;
    position.x=mouseX;
    position.y=mouseY;
    fill("purple")
    push();
    translate(position.x,position.y)
    rotate(angle)
    rectMode(CENTER)
    rect(0,0,this.width,this.heigth)
    pop();
    
    
    
    }
    }