const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world, object,ground,ball;
var groundOption; 
var ball

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

 groundOption={
  isStatic:true
}
  
 ground=Bodies.rectangle(200,360,400,20,groundOption);
 World.add(world,ground);

  ballOption={
   restitution:1
 }
 ball=Bodies.circle(200,200,20,ballOption);
 World.add(world,ball);

}

function draw() {
  background(0); 
  Engine.update(engine);
  
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400,20) 
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
  drawSprites();
}