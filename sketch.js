const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground1, ground2;

var bgColor;

function preload() {
  getBackgroundImg();
}

function setup() {
  createCanvas(1200, 500);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground1 = new Ground(510, 400, 320, 25);
  ground2 = new Ground(1000, 250, 250, 25);

  box1 = new Box(390, 350, 40, 60);
  box2 = new Box(430, 350, 40, 60);
  box3 = new Box(470, 350, 40, 60);
  box4 = new Box(510, 350, 40, 60);
  box5 = new Box(550, 350, 40, 60);
  box6 = new Box(590, 350, 40, 60);
  box7 = new Box(630, 350, 40, 60);

  box8 = new Box(430, 290, 40, 60);
  box9 = new Box(470, 290, 40, 60);
  box10 = new Box(510, 290, 40, 60);
  box11 = new Box(550, 290, 40, 60);
  box12 = new Box(590, 290, 40, 60);
  box13 = new Box(470, 230, 40, 60);
  box14 = new Box(510, 230, 40, 60);
  box15 = new Box(550, 230, 40, 60);
  box16 = new Box(510, 170, 40, 60);

  box17 = new Box(915, 200, 40, 60);
  box18 = new Box(955, 200, 40, 60);
  box19 = new Box(995, 200, 40, 60);
  box20 = new Box(1035, 200, 40, 60);
  box21 = new Box(1075, 200, 40, 60);
  box22 = new Box(955, 140, 40, 60);
  box23 = new Box(995, 140, 40, 60);
  box24 = new Box(1035, 140, 40, 60);
  box25 = new Box(995, 80, 40, 60);

  mainBox = new Rock(100, 300, 40, 40);

  slingshot = new SlingShot(mainBox.body, { x: 120, y: 300 });
}

function draw() {
  if (bgColor) {
    background(bgColor);
  }

  ground1.display();
  ground2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  mainBox.display();

  slingshot.display();

  drawSprites();
}

function keyPressed() {
  if (keyCode === 32) {
    slingshot.attach(mainBox.body);
  }
}

function mouseDragged() {
  Matter.Body.setPosition(mainBox.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  slingshot.fly();
}

async function getBackgroundImg() {
  var response = await fetch(
    "http://worldtimeapi.org/api/timezone/Asia/Kolkata"
  );
  var responseJSON = await response.json();
  console.log(responseJSON);
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11, 13);
  if (hour >= 06 && hour <= 18) {
    bgColor = "#f7f7f7";
  } else {
    bgColor = "#333";
  }
}
