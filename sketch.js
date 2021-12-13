const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var earth, earthImg, bgImg, M_earth, D_earth, SpaceShip, SpaceShipImg, weapon, weaponImg;



function preload(){

  //Loading all the image files for the game

  M_earth=loadAnimation("MovingEarth.gif", "Earth.gif", "EarthM.gif");
  D_earth=loadAnimation("earth-destroyed.gif", "giphy.gif", "Earth-Died.gif");
  bgImg=loadImage("SpaceImg.jpg");
  earthImg=loadImage("EarthImg.jpg");
  SpaceShipImg=loadImage("Spaceship.jpg");
  weaponImg=loadImage("weapon.jpg");


}

function setup() {
  createCanvas(1708,800);
  
  earth=createSprite(300, 300, 50, 50);
  earth.addImage(earthImg);
  earth.addAnimation('M-earth', M_earth);
  earth.addAnimation('D-earth', D_earth);

  SpaceShip=createSprite(825, 650, 50, 50);
  SpaceShip.addImage(SpaceShipImg);
  SpaceShip.scale=0.35;
  SpaceShip.velocityX=0;

  weapon=createSprite(800, 580, 50, 50);
  weapon.addImage(weaponImg);
  weapon.scale=0.68;
  weapon.visible=false;

}

function draw() {


  background(51);
  image(bgImg, 0, 0, 1730, 900);
  earth.scale=0.75;
  earth.changeAnimation(M_earth);
  keyPressed();
  drawSprites();
}


function keyPressed(){
  if(keyCode === RIGHT_ARROW && SpaceShip.x<1580){
    SpaceShip.x=SpaceShip.x+5;
  }

  if(keyCode ===LEFT_ARROW && SpaceShip.x<1580){
    SpaceShip.x=SpaceShip.x-5;
  }
  
  if(keyCode === "s"){
    SpaceShip.x=0;
  }

}


//Still in progress
/*function Weapon(){
  if(keyCode === "space"){
    
  }

}*/


