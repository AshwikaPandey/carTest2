
var wall, car
var speed,weight,deformation
gameState=0
safety=0
function preload(){
  carImg= loadImage("car2.png")
  bg = loadImage("cargame.png")
  wll= loadImage("wallImage.png")
 brickImage= loadImage("brickgroup.png")
}
function setup() {
  createCanvas(1600,900);
  car =createSprite(50,200,50,50)
  wall = createSprite(700,200,60,400)
  brick= new Group()
  bricks= createSprite(700,100,60,380)
  bricks.addImage(brickImage)
  brick.add(bricks)
  badTint=color("red")
  goodTint=color("green")
  ehTint=color("yellow")
  speed=random(55,90)
  weight=random(400,1500)
   car.addImage("color",carImg)
  
   wall.addImage('walll',wll)   
}

function draw() {
  background("pink");
  
  brickss()
  

 
  console.log(car)
 console.log(wall)
  drawSprites();
}
function brickss(){
  car.velocityX= speed;

  if(car.x-wall.x < car.width/2 + wall.width/2 && wall.x-car.x<wall.width/2+car.width/2 &&
    car.y-wall.y<car.height/2+wall.height/2 && wall.y-car.y<wall.height/2+car.height/2
  ){
    deformation= .5 *  weight * speed* speed /22500
    car.velocityX=0
    if(deformation<100){
    image(bg,0,0)  
 tint(204,255,153)
 text("SAfE",100,150)
 fill("green")
 END()
  
  brick.setVelocityEach(random(1,4), random(-2,4))
  
 } else  if ( deformation <180 || deformation>100){

    image(bg,0,0)  
  tint(255,102,102)
  text("FAILED",100,150)
  fill("red")
  END()
  
  
  brick.setVelocityEach(random(1,4), random(-4,4))
  END()
 }
  else if (deformation>180){

   image(bg,0,0)
  tint(204,255,255)
  text("EXPECTATIONS ARE REACHED",150,200)
  fill("yellow")
  
  
  group.setVelocityEach(random(1,4), random(-4,4))
  END()
 }



  }
}
function END(){
  text("END",100,40)
  textSize(20)
  
}