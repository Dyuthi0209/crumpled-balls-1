const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(1100, 600);


	engine = Engine.create();
	world = engine.world;



	 paper = new Paper(300, 100, 20);
	 dustbin = new Bin(900, 593);
	 ground = new Ground(width/2, 593, 1600, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
 ground.display();
  dustbin.display();
  

  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  
	}
}