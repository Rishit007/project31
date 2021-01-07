const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, wall1, wall2, wall3;

var divisions = [];
var particles = [];
var plinkos = [];

var divisionHieght = 250;

function setup() {
	createCanvas(400, 600);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(200,600,400,10);
	wall1 = new Ground(0,300,10,600);
	wall2 = new Ground(200,0,400,10);
	wall3 = new Ground(400,300,10,600);

	for(var k = 0;k <=width; k =k + 50){
		divisions.push(new Division(k , height-divisionHieght/2, 6, divisionHieght))
	}
	
	for(var j = 40;j <=width-10;j = j+40){
		plinkos.push(new Plinko(j,50));
		plinkos.push(new Plinko(j,130));
		plinkos.push(new Plinko(j,210));
		plinkos.push(new Plinko(j,290));
	}

	for(var l = 20;l <=width-10;l = l+40){
		plinkos.push(new Plinko(l,90));
		plinkos.push(new Plinko(l,170));
		plinkos.push(new Plinko(l,250));
	}
	
    for(var p = 190;p<=210;p++){
		particles.push(new Particles(p,20));
	}

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();
 
  for(var k = 0; k < divisions.length; k++){
	  divisions[k].display();
  }

  for(var j = 0; j < plinkos.length; j++){
	plinkos[j].display();
  }

  for(var l = 0; l < plinkos.length; l++){
	plinkos[l].display();
  }

  for(var p = 0; p < particles.length; p++){
	particles[p].display();
  }

}