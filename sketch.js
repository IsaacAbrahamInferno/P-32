const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine;
var world;
var Ground1;
var Hammer1;
var Box1;
var Box2;
var Box3;
var Box4;



function setup() {
  createCanvas(800,400);

 engine=Engine.create();
 world=engine.world;

Box1=new Box(400,200,50,50)
Ground1=new Ground(400,380,800,20)
Hammer1=new Hammer(200,200,150,50)
Box2=new Box(100,200,50,50)
Box3=new Box(600,200,50,50)
Box4=new Box(300,200,50,50)
}

function draw() {
  background("green");  
  Engine.update(engine)

  Box1.display();
  Ground1.display();
  Hammer1.display();
  Box2.display();
  Box3.display();
  Box4.display();
}