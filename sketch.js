const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var  heli,soldier;
var  rope,ground;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
  heli = new Helicopter(200,130, 400,200);
  soldier = new Soldier(25,10,138,178);
  rope = new Rope(heli.body,soldier.body);
  ground = createSprite(190,550,800,10);
  ground.shapeColor = "red";
  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0,0,0);
  Engine.update(engine);
  console.log("mouseX "+ mouseX + "mouseY "+ mouseY);
  heli.display();
  soldier.display();
  rope.display();
  if(ground.x<0) {
    ground.x = ground.width/2;
    }
    drawSprites();
}
