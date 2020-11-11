
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bullet;
var wall;

var speed;
var weight;
var thickness;

function preload()
{

}

function setup() {
	createCanvas(1600, 400);

	speed = random(223 , 321);
	weight = random(32 , 52);
	thickness = random(22 , 83);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bullet = createSprite ( 50,200,50,30);
	bullet.velocityX = speed;

	wall = createSprite(1400,200,thickness,height/2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
if(hasCollided(bullet , wall)){
	bullet.velocityX = 0;
	var damage = 0.5 * weight * speed * speed /(thickness * thickness * thickness)

	if(damage > 10)
	{
		bullet.shapeColor = color(255 ,0 ,0)
	}

	if(damage < 10 ){
		bullet.shapeColor = color(0,255,0);
	}
}

  drawSprites();
 
}

function hasCollided(lbullet , lwall)
{
	bulletRightEdge = lbullet.x + lbullet.width;
	wallLeftEdge = lwall.x;
	if(bulletRightEdge +60 >= wallLeftEdge)
	{
		return true
	}
	return false;
}

