const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
var engine,world;
var box1,box2,box3,box4,box5,box6,box7;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new box(200,300,70,300);
  box2 = new box(270,350,70,250);
  box3 = new box(340,350,70,250);
  box4 = new box(410,350,70,250);
  box5 = new box(480,300,70,300);
  box6 = new box(480,116,10,70);
  box7 = new box(520,106,70,50);
  box8 = new box(200,116,10,70);
  box9 = new box(160,106,70,50);
  
}

function draw() {
  background(0);  
     box1.display();
     box2.display();
     box3.display();
     box4.display();
     box5.display();
     box6.display();
     box7.display();
     box8.display();
     box9.display();
     

     
  drawSprites();
}