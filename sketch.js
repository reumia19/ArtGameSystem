let canvas;
let canvasWidth = 600;
let canvasHeight = 400;

let direction = 'right';

let xCor = 10;
let yCor = 10;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  
}

function draw() {
   background(50);
   rect(xCor,yCor,20,20);
   updateMyCoordinates();
}

function updateMyCoordinates(){
	switch(direction){
		case 'right':
		xCor += 1 ;
		break;
		case 'left':
		xCor -= 1 ;
		break;
		case 'up':
		yCor += 1 ;
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

function newPeople(){
this.xpos = random(20,canvasWidth-20);
this.ypos = random(20,canvasHeight-20);
this.size = 20;

rect(this.xpos,this.ypos,this.size,this.size);
}
