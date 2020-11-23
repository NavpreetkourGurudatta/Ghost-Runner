var ghost,ghostImage
var door,doorImage,doorGroup
var climber,climberImage,climberGroup
var tower,towerImage
var spookySound
var invisibleBlock,invisibleBlockGroup
var gameState = 'PLAY';
function preload (){
  ghostImage = loadImage('ghost-standing.png')
  doorImage = loadImage('door.png')
  climberImage = loadImage('climber.png')
  towerImage = loadImage('tower.png')
  spookySound = loadSound('spooky.wav');
}
function setup(){
  createCanvas(600,600)
 
  tower = createSprite(300,300);
  tower.addImage(towerImage);
  tower.velocityY = 1;
   ghost = createSprite(200,200,0,0);
  ghost.addImage(ghostImage);
  ghost.scale = 0.2;
  spookySound.loop()
  doorGroup = new Group();
  climberGroup = new Group()
  invisibleBlockGroup = new Group();
  
}
function draw(){
  background(220);
  if(gameState==='PLAY'){
  if(keyDown('space')){
    ghost.velocityY = -10;
  }
  
  ghost.velocityY++
  if(keyDown('left_arrow')){
    ghost.x = ghost.x-3;
  }
   if(keyDown('right_arrow')){
    ghost.x = ghost.x-3;
  }
  if(tower.y>400){
    tower.y = 300;
  }
  spawndoor()
  drawSprites();
}
 if(gameState==='END'){
   stroke('yellow');
   fill('yellow');
   textSize(30);
   text('GAME OVER',230,250);
 } 
}
function spawndoor(){
  if(frameCount%40===0){
     door = createSprite(200,-50);
    door.addImage(doorImage);
    climber = createSprite(200,10);
    climber.addImage(climberImage);
    invisibleBlock = createSprite(200,15,climber.width,2);
    door.x = Math.round(random(120,400))
    climber.x = door.x;
    invisibleBlock.x = door.x;
    door.velocityY = 1;
        invisibleBlock.velocityY = 1;
    climber.velocityY = 1;
door.depth = door.depth-1;
    climber.lifetime = 100
      door.lifetime = 100
    invisibleBlock.lifetime = 100;
doorGroup.add(door);
    climberGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlockGroup);
  }
}