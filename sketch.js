
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var groundImg;
var ground;

var star,starImg;
var groundImage;

function preload(){
  starImg = loadImage("images/cute star.png")
  groundImage = loadImage("images/background.jpg")
}

function setup(){
  createCanvas(1200,600);
  
  backgr=createSprite(0,0,1200,600);
  backgr.addImage(groundImage);
  //backgr.scale=1.5;
  backgr.x = backgr.width/2;
  backgr.velocityX=-4;
  
  
  ground = createSprite(1400,600,1400,10);
  ground.x=ground.width/2;
  ground.visible=false;
  
  star = createSprite(500,530,20,50);
  star.addImage(starImg);
  star.scale = 0.1;
  star.x = 50

  star.depth = star.depth + 2;
  
}


function draw(){
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }

  ground.velocityX = -6;
  
  if(ground.x <0){
    ground.x = 900;
  }
  
  if(keyDown("space")){
    star.velocityY = -10;
  }

  if(keyDown(RIGHT_ARROW)){
    star.velocityX =+ 2;
  }

  if(keyDown(LEFT_ARROW)){
    star.velocityX =+ -2;
  }

  
  
  star.velocityY = star.velocityY + 0.5;
  
  
  star.collide(ground);
  drawSprites();
}




  
  
  

  
