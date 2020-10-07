var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var leftboxSprite, rightboxSprite, bottomboxSprite;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	leftboxSprite=createSprite(200, 550, 20, 200);
	bottomboxSprite=createSprite(300, 650, 200, 20);
	rightboxSprite=createSprite(400, 550, 20, 200);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	leftBody = Bodies.rectangle(200, 550, 20, 200, {isStatic:true});
	World.add(world, leftBody);
	rightBody = Bodies.rectangle(400, 550, 20, 200, {isStatic:true});
	World.add(world, rightBody);
	bottomBody = Bodies.rectangle(300, 650, 200, 20, {isStatic:true});
	World.add(world, bottomBody);

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 

	


	Engine.run(engine);

	
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
  }

  if (keyCode === LEFT_ARROW) {
	  helicopterSprite.x-=10
	  packageSprite.x-=10
	  Matter.Body.translate (packageBody, {

	   x:-10, y:0 }) 
		  
	  }



  if (keyCode === RIGHT_ARROW) {
	helicopterSprite.x+=10
	packageSprite.x+=10
	Matter.Body.translate (packageBody, {

		x:+10, y:0 }) 
		   
	}



}


