
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var tree,boy
function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground()
	tree=new Tree()

boy = loadImage("boy.png")
stone =new Stone()
mango1= new Mango(1200,200)
mango2= new Mango(871,250)
mango3= new Mango(949,280)
mango4= new Mango(950,170)
mango5= new Mango(1011,210)
mango6= new Mango(1064,260)
mango7= new Mango(1060,110)
mango8= new Mango(1080,180)
mango9= new Mango(1140,250)
mango10= new Mango(1210,290);
slings=new Slingshot(stone.body,{x:387,y:460})

	Engine.run(engine);
  
}


function draw() {
  
  background("225");
 
  
  drawSprites();
  ground.display()
 tree.display()
 stone.display()
image(boy,350,380,200,300)
 
 mango1.display()
 mango2.display()
 mango4.display()
 mango5.display()
 mango6.display()
 mango7.display()
 mango8.display()
 mango9.display()
 mango10.display()
 mango3.display()
 slings.display()
 stone.display()
 
 detectCollision(mango1,stone)
 detectCollision(mango2,stone)
 detectCollision(mango3,stone)
 detectCollision(mango4,stone)
 detectCollision(mango5,stone)
 detectCollision(mango6,stone)
 detectCollision(mango7,stone)
 detectCollision(mango8,stone)
 detectCollision(mango9,stone)
 detectCollision(mango10,stone)

 text(mouseX+":"+mouseY,mouseX,mouseY)
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased()
{
	slings.fly()
}

function detectCollision(a,b)
{
	
	var distance= dist(a.body.position.x,a.body.position.y,b.body.position.x,b.body.position.y)
console.log(distance)

if(distance<= a.width+b.width)
{
	Matter.Body.setStatic(a.body,false);
}

}

function keyPressed()
{
	if(keyCode===32)
	{
		slings.attach(stone.body)
	}
}



