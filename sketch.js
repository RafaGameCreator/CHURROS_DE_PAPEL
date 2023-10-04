
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball,groundObj,lSide,rSide;
var world;
var radius = 40;


function preload()
{
	
}

function setup() {
	// aumentar o tamanho  do canvas
	createCanvas(1500, 700);
    // faltou o rectMode
    rectMode(CENTER)
	engine = Engine.create();
	world = engine.world;

	var ballO={
		isStatic: false,
		// restirution
		restitution: 0.45,
		friction: 0.01,
		density: 1.7,
	}
	ball = Bodies.circle(260, 100, radius/2, ballO);
	World.add(world, ball);

	groundObj = new Grounderson(width/2, 670, width, 20);
	lSide = new Grounderson(1100, 600, 20, 120);
	rSide = new Grounderson(1350, 600, 20, 120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x, ball.position.y, radius, radius)
  lSide.display()
  rSide.display()
  groundObj.display()



}

// o nome da  função não muda  kp
function keyPressed(){
	if(keyCode === UP_ARROW) {
		// ball, ball.position
		Matter.Body.applyForce(ball,ball.position, {x:85, y:-85})
	}
}