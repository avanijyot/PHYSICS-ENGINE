


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, game_world,ball, ground;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  game_world = engine.world;

  var ball_options =  {
    isStatic:false, 
    restitution:0.5
  }

  var ground_options = {
    isStatic:true
  }

  ball = Bodies.circle(100,100, 30, ball_options);
  World.add(game_world,ball);

  ground = Bodies.rectangle(400,380, 800, 20, ground_options);
  World.add(game_world, ground);
  console.log(ball);
 
}

function draw() {
  background("red");  
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);

  rect(ground.position.x, ground.position.y, 800, 20);

}