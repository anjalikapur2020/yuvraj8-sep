gamestate="wait"

function preload(){

    waitimg=loadImage("movingbackground.gif")

    boyknifeimg = loadAnimation(
        "knife.png",
        "KNIFE2.png",
        "KNIFE3.png",
        "KNIFE4.png",
        "KNIFE6.png"
      );
    
    img=loadImage("video.gif")
    leftbuttonimg=loadImage("dancingleftarrow.gif")
    rightbuttonimg=loadImage("dancingrightarrow.gif")

    startimg= loadImage("start.gif")

      boyjetpackimg = loadAnimation("JETPACK1.png", "JETPACK2.png", "JETPACK3.png");
      boygunimg = loadAnimation("GUN1.png", "GUN2.png", "GUN3.png");
      jetpackimg = loadImage("JETPACKICON.png");
      knifeimg = loadImage("KNIFEICON.png");
      gunimg = loadImage("GUNICON.png");
      boyimg = loadAnimation(
        "RUNNING1.png",
        "RUNNING2.png",
        "RUNNING3.png",
        "RUNNING4.png",
        "RUNNING5.png",
        "RUNNING6.png",
        "RUNNING7.png"
      );
}

function setup(){
createCanvas(windowWidth,windowHeight)

wait= createSprite(windowWidth/2,windowHeight/2)
wait.addImage(img)
wait.visible=false
wait.scale=3

leftbutton=createSprite(100,100,50,50)
leftbutton.addImage(leftbuttonimg)
leftbutton.scale=0.5
leftbutton.visible=false

rightbutton=createSprite(windowWidth-100,100,50,50)
rightbutton.addImage(rightbuttonimg)
rightbutton.scale=0.5


startbutton=createSprite(windowWidth/2,windowHeight-windowHeight/4,50,50)
startbutton.addImage(startimg)
startbutton.scale=0.5
startbutton.visible=false

}

function draw(){

if (gamestate==="wait"){
   wait.visible=true
     rightbutton.visible=true
     leftbutton.visible=false
     startbutton.visible=false
    
}

if (mousePressedOver(rightbutton)){
    gamestate="next"
    
}

if (mousePressedOver(leftbutton)){
    gamestate="wait"
    
}


if (mousePressedOver(startbutton)){
    gamestate="play"
    
}


if (gamestate==="next"){
    background("pink")
    
    leftbutton.visible=true
    wait.visible=false
    startbutton.visible=true
}

if (gamestate==="play"){
    background("yellow")
    
    //leftbutton.visible=false
    rightbutton.visible=false

    wait.visible=false
    startbutton.visible=false
    
}


drawSprites()

}