class Ground{

    constructor(x,y,width,heigth){
    var options={isStatic:true}
    
    this.body=Bodies.rectangle(x,y,width,heigth,options)
    this.width=width;
    this.heigth=heigth
    World.add(world,this.body)
    
    
    }
    
    display(){
    var position=this.body.position;
    var angle=this.body.angle;
    fill("brown")
    push();
    translate(position.x,position.y)
    rotate(angle)
    rectMode(CENTER)
    rect(0,0,this.width,this.heigth)
    pop();
    
    
    
    }
    }