let canvas;
let canvasWidth = 600;
let canvasHeight = 400;

let direction = 'right';

let xPos = 10;
let yPos = 10;
let alpha =255;
let message;
var peoples;
var myPeoples;
var player;
var beforeTime;

function setup() {
  beforeTime = second();
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  myPeoples = new Group();
  peoples = new Group();

for(var i =0; i<10; i++)
{
 newPeople();
 updatePeople();

}

for(var i =0; i<5; i++)
{
  newMyPeople();
  updatePeople();

}

   player = createSprite(width/2,height/2,20,20);
   player.immovable= true;

}

function draw() {
   background(69,173,168);

   lockupPeople();
   lockUpMypeople();
   updateMyCoordinates();
   drawSprites();
   checkGameStatus();
   heal();

      player.shapeColor = color(229,252,194,alpha);

   if(player.bounce(peoples)){
    alpha -= 5;
   }
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
		 newPeople();
	}
	if(keyCode ==39){
		direction ='right';
		 newPeople();
	}
	if(keyCode ==38){
		direction ='down';
		 newPeople();
	}
	if(keyCode ==40){
		direction ='up';
		 newPeople();
	}
}

function newPeople(){
this.xpos = xPos;
this.ypos = yPos;
this.size = 20;
var people = createSprite(this.xpos,this.ypos,this.size,this.size);
people.shapeColor = color(100,202,120);
people.setCollider =('rectangle')
// people.immovable =true;
people.setSpeed(1,random(0,179));
peoples.add(people);

}

function newMyPeople(){
this.xpos = xPos;
this.ypos = yPos;
this.size = 20;


var newPeople = createSprite(this.xpos,this.ypos,this.size,this.size);
newPeople.shapeColor = color(229,252,120);
newPeople.setCollider =('rectangle')
// newPeople.immovable =true;
newPeople.setSpeed(1,random(0,179));
myPeoples.add(newPeople);

}



function lockupPeople(){
	  for(var i=0; i<peoples.length; i++) {
    var s = peoples[i];
    if(s.position.x<0) {
      s.position.x = 1;
      s.velocity.x = abs(s.velocity.x);
    }

    if(s.position.x>width) {
      s.position.x = width-1;
      s.velocity.x = -abs(s.velocity.x);
    }

    if(s.position.y<0) {
      s.position.y = 1;
      s.velocity.y = abs(s.velocity.y);
    }

    if(s.position.y>height) {
      s.position.y = height-1;
      s.velocity.y = -abs(s.velocity.y);
    }
  }
}

function lockUpMypeople(){

  	  for(var i=0; i<myPeoples.length; i++) {
    var j = myPeoples[i];
    if(j.position.x<0) {
      j.position.x = 1;
      j.velocity.x = abs(j.velocity.x);
    }

    if(j.position.x>width) {
      j.position.x = width-1;
      j.velocity.x = -abs(j.velocity.x);
    }

    if(j.position.y<0) {
      j.position.y = 1;
      j.velocity.y = abs(j.velocity.y);
    }

    if(j.position.y>height) {
      j.position.y = height-1;
      j.velocity.y = -abs(j.velocity.y);
    }
  }

}

function updatePeople(){
xPos = random(20,canvasWidth-20);
yPos = random(20,canvasHeight-20);
}

function checkGameStatus(){
if(alpha<=0){
	noLoop();
    clear();
textSize(20);
  fill(69,173,168);
     textAlign(CENTER, CENTER);
   message = text('I dont wanna do anything..',width/2,height/2);
}

}

function heal(){
if(beforeTime <= second()-2){
alpha+=5;
beforeTime = second();
if(beforeTime>=58){
  beforeTime =0;
}
}

}
