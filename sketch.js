
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,boyIMG
var tree,treeIMG
var mango,stone
var ground;
var chain;
var m1,m2,m3,m4,m5;
function preload()
{
boyIMG=loadImage("sprites/boy.png")
treeIMG=loadImage("sprites/tree.png")

}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

tree=createSprite(1400,450);
tree.addImage(treeIMG);
tree.scale=0.5

boy=createSprite(400,650);
boy.addImage(boyIMG)
boy.scale=0.1

ground=new Ground(800,690,1600,10)
stone=new Stone(350,500,100)
chain=new Chain(stone.body,{x:325,y:600})
m1= new Mango(1450,400,100);
m2= new Mango(1400,350,100);
m3= new Mango(1450,350,100);
m4= new Mango(1400,400,100);
m5= new Mango(1500,450,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  drawSprites();
  ground.display();
  stone.display();
  chain.display();
  m1.display();
  detect(stone,m1);
  m2.display();
  detect(stone,m2);
  m3.display();
  detect(stone,m3);
  m4.display();
  detect(stone,m4);
  m5.display();
  detect(stone,m5);
 
}


function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
  
  
  
  }
  function mouseReleased() {
      chain.fly()
    }
  function keyPressed(){
  if(keyCode===32){
  chain.attach(stone.body)
  }
  
  
  
  
  }
function detect(Lstone,Lmango){
  mangoBodyPosition=Lmango.body.position
  stoneBodyPosition=Lstone.body.position

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=Lmango.r+Lstone.r){
    Matter.Body.setStatic(Lmango.body,false);
  }
}