let canvas;
let canvasWidth = 600;
let canvasHeight = 400;

let direction = 'right';

let xCor = 10;
let yCor = 10;

let xPos = 10;
let yPos = 10;

var peoples;

var player;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  
  peoples = new Group();
for(var i =0; i<20; i++)
{
 newPeople();
 updatePeople();
}
   player = createSprite(width/2,height/2,20,20);
}

function draw() {
   background(50);
   player.bounce(peoples);
   updateMyCoordinates();

}

function updateMyCoordinates(){
	switch(direction){
		case 'right':
		xCor += 1 ;
		break;
		case 'left':
		xCor -= 1 ;
		player.position.x -= 1 ;
		break;
		case 'up':
		player.position.y += 1 ;
		break;
		case 'down':
		yCor -= 1 ;
		break;
	}
}

function keyPressed(){
	if(keyCode ==37){
		direction ='left';
	}
	if(keyCode ==39){
		direction ='right';
	}
	if(keyCode ==38){
		direction ='down';
	}
	if(keyCode ==40){
		direction ='up';
	}
}

function drawPlayer(){
	player = createSprite(xCor,height/2,20,20);

}

function newPeople(){
this.xpos = xPos;
this.ypos = yPos;
this.size = 20;
var people = createSprite(this.xpos,this.ypos,this.size,this.size);
people.shapeColor = (200);
people.immovable =true;
peoples.add(people);

}

function updatePeople(){
xPos = random(20,canvasWidth-20);
yPos = random(20,canvasHeight-20);
}


