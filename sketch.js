
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject, groundObject, dustbinObject;
var dustbinObject1, dustbinObject2,dustbinObject3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	dustbinObject1 = createSprite(500, 700, 80, 90);
	dustbinObject2 = createSprite(600, 540, 800, 90);
	dustbinObject3= cteateSprite(630, 560, 90, 80);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   groundObject = new groundObject(800, 670, 800, 20);
   paperObject= new paperObject(200, 450, 40);
   dustbinObject = new dustbinObject(700, 800, 60, 80);
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObject.display()
  paperObject.display()
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85, y:-85});
	}
}

