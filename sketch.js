const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var player,ground1,bump1,ground2;

var boost = 200;

function preload(){

}

function setup(){

    var cancas = createCanvas(1900,850);

    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(1000,825,2000,50);
    ground2 = new Ground(3000,825,2000,50);

    player = new Player(100,600,200,200);

}

function draw(){

    background("white");
    Engine.update(engine);

    textSize(30);
    text("Boost"+ boost);

    if(frameCount%100===0){
        bump1=new Bump(2000,825,random(40,50));
        bump1.display();
    }

    camera.position.x = player.body.position.x+800;

    if(keyDown(RIGHT_ARROW)){
        Matter.Body.applyForce(player.body,player.body.position,{x:100,y:0});
        
    }

    if(keyDown(UP_ARROW)){
        Matter.Body.applyForce(player.body,player.body.position,{x:200,y:0});
        boost--;
        
    }

    if(keyDown(LEFT_ARROW)){
        Matter.Body.applyForce(player.body,player.body.position,{x:-100,y:0});
        
    }
  
    if(player.body.position.x>=ground2.body.position.x){
        Matter.Body.setPosition(ground1.body,{x:ground2.body.position.x+1000,y:825});
    }

    if(player.body.position.x>=ground1.body.position.x){
        Matter.Body.setPosition(ground2.body,{x:ground1.body.position.x+1000,y:825});
    }

    ground1.display();
    ground2.display();

    player.display()
    
}