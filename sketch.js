
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground;
var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var bob1Diameter,bob2Diameter,bob3Diameter,bob4Diameter,bob5Diameter;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Ground(600,200,270,20);
	
	bob1=new Bob(500,400,50);
	bob2=new Bob(550,400,50);
	bob3=new Bob(600,400,50);
	bob4=new Bob(650,400,50);
	bob5=new Bob(700,400,50);

	bob1Diameter=100;
	bob2Diameter=100;
	bob3Diameter=100;
	bob4Diameter=100;
	bob5Diameter=100;

	rope1=new Rope(bob1.body,roof.body,-bob1Diameter*2,0);
	rope2=new Rope(bob2.body,roof.body,-bob2Diameter*2,-3000);
	rope3=new Rope(bob3.body,roof.body,-bob3Diameter*2,-6000);
	rope4=new Rope(bob4.body,roof.body,-bob4Diameter*2,-9000);
	rope5=new Rope(bob5.body,roof.body,-bob5Diameter*2,-12000);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  if(keyCode===UP_ARROW){
	  bob1.velocityX=-10;
	  bob1.velocityY=-10;
  }
}



