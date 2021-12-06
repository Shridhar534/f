var hen,henImage,b1,b2,b3,b4,ctrl,back1,back2,back3
var GS1=1,GS2=2,GS3=3
var gameState=1
var lol,box1,box2
var wall1,wall2,wall3,wall4,wall5,wall6
var wall7,wall8,wall9,wall10,wall11,wall12

function preload(){
  henImage2 = loadImage("2.png")
  henImage4 = loadImage("4.png")
  henImage1 = loadImage("1.png")
  henImage3 = loadImage("3.png")
  bgImage1 = loadImage("bg1.png")
  bgImage2 = loadImage("bg2.png")
  bgImage3 = loadImage("bg3.png")
  ctrlImg = loadImage("control.png")
}

function setup(){
  createCanvas(600,600)

  lol = createSprite(300,300,30,30)
  lol.visible=false

  b1=createSprite(99,461,25,25)
  b2=createSprite(145,506,25,25)
  b3=createSprite(98,555,25,25)
  b4=createSprite(53,509,25,25)

  wall1 = createSprite(109,400,300,5) 
  wall2 = createSprite(300,540,600,5)
  wall3 = createSprite(250,200,5,400)
  wall4 = createSprite(337,340,5,380)
  wall5 = createSprite(450,30,600,5)
  wall6 = createSprite(490,150,300,5) 

  wall7=createSprite(72,283,100,5)

  back1=createSprite(300,300)
  back1.addImage("back1",bgImage1)
  back1.scale=1.8

  back2=createSprite(300,300)
  back2.addImage("back2",bgImage2)
  back2.scale=0.6
  back2.visible=false

  back3=createSprite(300,300)
  back3.addImage("back3",bgImage3)
  back3.scale=0.6
  back3.visible=false

  ctrl=createSprite(100,515,10,10)
  ctrl.addImage("ctrl",ctrlImg)
  ctrl.scale=0.3

  hen=createSprite(20,500,50,50)
  hen.addImage("hen",henImage2)
  hen.scale=0.2
 
  box1 = createSprite(599,87,50,50)
  box1.visible=false

  box2=createSprite(599,430,50,50)

}

function draw(){
background("white")
//hen.isStatic=false;


if (gameState == GS1){
back1.visible=true
hen.collide(wall1)
hen.collide(wall2)
hen.collide(wall3)
hen.collide(wall4)
hen.collide(wall5)
hen.collide(wall6)

}



//-------------------------------------------------------------------------------------------------------------//
if (hen.isTouching(box1)){
  back1.visible=false 
  back2.visible=true
  hen.x=1
  hen.y=249
  box1.destroy()
  wall6.destroy()
  wall5.destroy()
  wall4.destroy()
  wall3.destroy()
  wall2.destroy()
  wall1.destroy()
  gameState = GS2
//------------------------------------------------------------------------------------------------------------//

box2.depth=hen.depth
//hen.depth=hen.depth+1

if(hen.isTouching(box2)){
  box2.visible=false
  bg3.visible=true
  bg2.visible=false
  }
 




}
    
  //console.log(mouseX,mouseY)
  console.log(gameState)
  
  countroller()
  drawSprites()
}
//********************function draw ends here*********************//


function countroller(){

  if(keyDown("up_Arrow")){
    hen.position.y=hen.position.y-8
    hen.addImage("hen",henImage2)
    }
  
 if(keyDown("down_Arrow")){
    hen.position.y=hen.position.y+8
    hen.addImage("hen",henImage4)
      }
  
  if(keyDown("right_Arrow")){
    hen.position.x=hen.position.x+8
    hen.addImage("hen",henImage1)
    }    
  if(keyDown("left_Arrow")){
    hen.position.x=hen.position.x-8
    hen.addImage("hen",henImage3)
    }
 //---------------------------------------------------------------------------------------------------------*/
if(mousePressedOver(b1)){
  hen.position.y=hen.position.y-8
  hen.addImage("hen",henImage2)
}

if(mousePressedOver(b2)){
  hen.position.x=hen.position.x+8
  hen.addImage("hen",henImage1)
}

if(mousePressedOver(b3)){
  hen.position.y=hen.position.y+8
  hen.addImage("hen",henImage4)
}

if(mousePressedOver(b4)){
  hen.position.x=hen.position.x-8
  hen.addImage("hen",henImage3)
}
//-------------------------------------------------------------------------------------------------------------------------//
/*if(touches.length>0){
  hen.position.y=hen.position.y-8
  hen.addImage("hen",henImage2) 
  touches=[]
}*/

lol.x=mouseX
lol.y=mouseY

if(lol.isTouching(b1)){
  hen.position.y=hen.position.y-8
  hen.addImage("hen",henImage2)
}

if(lol.isTouching(b2)){
  hen.position.x=hen.position.x+8
  hen.addImage("hen",henImage1)
}

if(lol.isTouching(b3)){
  hen.position.y=hen.position.y+8
  hen.addImage("hen",henImage4)
}

if(lol.isTouching(b4)){
  hen.position.x=hen.position.x-8
  hen.addImage("hen",henImage3)
}


}
//************************************************countrol function ends here*********************************************//

