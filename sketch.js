let canvas;
let canvasWidth = 600;
let canvasHeight = 400;

let direction = 'right';

let xPos = 10;
let yPos = 10;
let alpha =255;
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
   background(69,173,168);
   player.shapeColor = color(229,252,194,alpha);

   if(player.bounce(peoples)){
   	alpha -= 5;
   }
   updateMyCoordinates();
   drawSprites();
   checkGameStatus();
}

function updateMyCoordinates(){
	switch(direction){
		case 'right':
		player.position.x +=1;
		break;
		case 'left':
		player.position.x -= 1 ;
		break;
		case 'up':
		player.position.y += 1 ;
		break;
		case 'down':
		player.position.y -= 1 ;
		break;
	}

	if(player.position.x>= width){
	player.position.x = 20;
	}
	if(player.position.x<= 0){
	player.position.x = width-20;
	}
	if(player.position.y>= height){
	player.position.y = 20;
	}
	if(player.position.y<= 0){
	player.position.y = height-20;
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

function newPeople(){
this.xpos = xPos;
this.ypos = yPos;
this.size = 20;
var people = createSprite(this.xpos,this.ypos,this.size,this.size);
people.shapeColor = color(100,202,120);
people.setCollider =('rectangle')
people.immovable =true;
peoples.add(people);

}

function updatePeople(){
xPos = random(20,canvasWidth-20);
yPos = random(20,canvasHeight-20);
}

function checkGameStatus(){
if(alpha<=0){
	noLoop();

}

}
