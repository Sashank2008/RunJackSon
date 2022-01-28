var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var Jake1,Jake2,Jake3,Jake3,Jake4,Jake5
function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Jake1.png","Jake2.png","Jake3.png","Jake4.png","Jake5.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=1;
boy.addAnimation("Jake1",boyImg);
  

leftBoundary=createSprite(0,0,100,800);

leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

  if(path.y > 400 ){
    path.y = height/2;
  }


  drawSprites();
}
