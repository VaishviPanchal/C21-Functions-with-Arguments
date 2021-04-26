var fixedRect,movingRect;
var car,wall;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  car=createSprite(100,100,25,25);
  wall=createSprite(500,100,30,200);
  fixedRect = createSprite(400,200,50,100);
  movingRect = createSprite(300,300,50,50)
  movingRect.shapeColor="green"
  fixedRect.shapeColor="green"

  car.velocityY = 3;
  car.velocityX =3;
    movingRect.velocityY=-3;
    movingRect.velocityX=-3;
  //wall.velocityX= -4;
}

function draw() {
  background(180);  
  //movingRect.x=mouseX
  //movingRect.y=mouseY

  //console.log(isTouching());

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  /*if(isTouching(car,wall)){
    car.velocityX = -4;
  }*/

  //argument 
  //fn_name(arg1,arg...argn)
  bounceOff(car,movingRect);

  drawSprites();
}
//(a+b)2 = a2+b2+2ab
//a= 5, b=6
//a = 4, b =8
//function fn_name(paramerter1,parm2,...paramn)
