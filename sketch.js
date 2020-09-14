var thickness, wall;
var speed, bullet, weight;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(200, 200, 50, 20);
  bullet.shapeColor = color(255,255,255);
  color(80,80,80);
  
  speed = random(223,321);
  weight = random(30,31);
  bullet.velocityX = speed;

  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
 
}

function draw() {
  background(0,0,0); 
  textSize(30);
  if (wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX = 0;
    var deformation = 0.5*speed*speed*weight/thickness*thickness*thickness;
    if(deformation>10){
      wall.shapeColor = color(255,0,0);
    }
    
    if(deformation<10){
      wall.shapeColor = color(0,255,0);
     
    }
  }
  

  drawSprites();

}