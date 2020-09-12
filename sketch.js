var engine, world;
var platform1, platform2;
var bird, slingShot;
var box1, box_1;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    points = 0;

    ground = new Ground(600,height,1200,20);
    platform1 = new Ground(600, 300, 350, 10);
    platform2 = new Ground(980, 240, 350, 10);
    
    //platform1
    //bottom base
    box1 = new Box(530,275,30,40);
    box2 = new Box(560,275,30,40);
    box3 = new Box(590,275,30,40);
    box4 = new Box(620,275,30,40);
    box5 = new Box(650,275,30,40);
    box6 = new Box(680,275,30,40); 
    
    //lower-middle base
    box7 = new Box(570,235,30,40);
    box8 = new Box(600,235,30,40);
    box9 = new Box(630,235,30,40);
    box10 = new Box(660,235,30,40);
    
    //higher-middle base
    box11 = new Box(600,195,30,40);
    box12 = new Box(630,195,30,40);
  
    //high base
    box13 = new Box(620,155,30,40);


//platform2
    //bottom base
    box_1 = new Box(900,195,30,40);
    box_2 = new Box(930,195,30,40);
    box_3 = new Box(960,195,30,40);
    box_4 = new Box(990,195,30,40);
    box_5 = new Box(1020,195,30,40);
    box_6 = new Box(1050,195,30,40); 

    //lower-middle base
    box_7 = new Box(930,155,30,40);
    box_8 = new Box(960,155,30,40);
    box_9 = new Box(990,155,30,40);
    box_10 = new Box(1020,155,30,40);

    //higher-middle base
    box_11 = new Box(960,115,30,40);
    box_12 = new Box(990,115,30,40);

    //high base
    box_13 = new Box(975,75,30,40);



/*    //platform2
    //bottom base
    box_1 = new Box(900,195,30,40);
    box_2 = new Box(930,195,30,40);
    box_3 = new Box(960,195,30,40);
    box_4 = new Box(990,195,30,40);
    box_5 = new Box(1020,195,30,40);
    box_6 = new Box(1050,195,30,40); 

    //lower-middle base
    box_7 = new Box(930,155,30,40);
    box_8 = new Box(960,155,30,40);
    box_9 = new Box(990,155,30,40);
    box_10 = new Box(1020,155,30,40);

    //higher-middle base
    box_11 = new Box(960,115,30,40);
    box_12 = new Box(990,115,30,40);

    //high base
    box_13 = new Box(975,75,30,40);
*/
// Pentagon character
    bird = new Pentagon(200,50,50,50);

    
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background("white");
    Engine.update(engine);
    //platform 1
    fill("black");
    text("score:"+points,width-300, 50);

    text("Instructions: pull the pentagon to the left with your mouse to launch. Press space to restart",200, 50);
    fill("blue");
    box_1.display();
    box_1.score();

    box_2.display();   
    box_2.score();

    box_3.display();
    box_3.score();

    box_4.display();
    box_4.score();

    box_5.display();
    box_5.score();

    fill("red");
    box_6.display();
    box_6.score();

    box_7.display();
    box_7.score();

    box_8.display();
    box_8.score();

    box_9.display();
    box_9.score();

    box_10.display();
    box_10.score();

    fill("green");
    box_11.display();
    box_11.score();

    box_12.display();
    box_12.score();

    box_13.display();
    box_13.score();



    fill("blue");
    box1.display();
    box1.score();

    box2.display();   
    box2.score();

    box3.display();
    box3.score();

    box4.display();
    box4.score();

    box5.display();
    box5.score();

    fill("red");
    box6.display();
    box6.score();

    box7.display();
    box7.score();

    box8.display();
    box8.score();

    box9.display();
    box9.score();

    box10.display();
    box10.score();

    fill("green");
    box11.display();
    box11.score();

    box12.display();
    box12.score();

    box13.display();
    box13.score();


    //bird
    bird.display();
    
    ground.display();
    platform1.display();
    platform2.display();
 
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}