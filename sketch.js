var trex, trex_running;
var edges;
var ground, ground_image;

function preload(){
  trex_running = loadAnimation('trex1.png','trex3.png','trex4.png');
  ground_image = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running" ,trex_running);

  ground = createSprite(300, 180, 600, 20);
  ground.velocityX = -2;
  ground.addImage(ground_image);
  edges = createEdgeSprites();
}

function draw(){
  background("white");

  if(keyDown("space")){
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY+0.5;
  
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  trex.collide(ground);

  drawSprites();
}
