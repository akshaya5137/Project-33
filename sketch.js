const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bgImg;
var boy, boyImg;
var snow = [];
var maxSnow = 10;

function preload() {
 bgImg = loadImage("snow1.jpg");
 boyImg = loadImage("Boy.png");
}

function setup() {
  createCanvas(1000,700);
  engine = Engine.create();
	world = engine.world;

  boy = createSprite(600,400);
  boy.addImage("boy",boyImg);
  boy.scale = 0.25;

  if(frameCount%180 === 0){
    for(var i=0;i<maxSnow;i++){
      snow.push(snowBody = new Snow(random(0,1000),random(-50,600)));
    }
  }
}

function draw() {
  background(bgImg);  
  Engine.update(engine);

  for(i=0;i<maxSnow;i++){
    snow[i].display();
    snow[i].repeat();
  }

  if(frameCount%180 === 0){
    for(var i=0;i<maxSnow;i++){
      snow[i].repeat();
    }
  }

  drawSprites();
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    boy.x = boy.x-50;
  } else if(keyCode === RIGHT_ARROW){
    boy.x = boy.x+50;
  }
}
