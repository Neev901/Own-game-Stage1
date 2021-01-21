var bg, player_img, button, state;


function preload(){
  bg = loadImage("./Images/Starter - Copy.jpg")
  player_img = loadImage("/Images/hero.png")
}

function setup(){
  var canvas = createCanvas(displayWidth-4,displayHeight-151)
}

function draw(){
  background(bg)
  image(player_img, displayWidth/200, displayHeight/12, displayWidth/3, displayHeight/2.5)
}