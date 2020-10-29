var PLAY=1;
var END=0;
var gameState=PLAY;

var monkey,monkeyImg;

var ground;

var bananaImg;
var obstacleImg;

var survivaltime;

var jumpsound;

function preload()
{
  monkeyImg = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImg=loadImage("banana.png");
  
  obstacleImg=loadImage("obstacle.png");
  
  jumpsound = loadSound("maro-jump-sound-effect_1.mp3")
}

function setup ()
{
  monkey= createSprite(60,340,20,20);
  //monkey.velocityX = -3;
  monkey.addAnimation("monkey",monkeyImg)
  monkey.scale=0.1;
  
  ground=createSprite(200,360,800,05);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  

  
  survivaltime=0;
}

function draw() {
  background("white");
  
  survivaltime=0;
  survivaltime= Math.ceil(World.frameCount/World.frameRate);
  text("Survival Time: "+survivaltime,100,50);
 
    if (ground.x < 0)
    {
      ground.x = ground.width/2;
    }
    
  
  if (keyDown("space")&&monkey.y>=319)
  {
    monkey.velocityY=-15;
    jumpsound.play(); 
  }
  
  monkey.velocityY=monkey.velocityY+0.6;
  monkey.collide(ground);
  
  Banana();
  Obstacle();
  drawSprites();
}

function Banana()
{
  if(World.frameCount%80===0)
  {
  banana= createSprite(400,random(160,240),20,20);
  banana.addImage(bananaImg);
  banana.velocityX=-4;
  banana.scale=0.05;
  
  }
}

function Obstacle()
{
  if (World.frameCount%200===0)
  {
    obstacle= createSprite(400,350,20,20);
  obstacle.addImage(obstacleImg);
   obstacle.velocityX=-4;
    obstacle.scale=0.15;
    
  }
}


  
