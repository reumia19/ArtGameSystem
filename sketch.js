let canvas;
let canvasWidth = 600;
let canvasHeight = 400;
let paddle,wallTop,wallBottom;
var s;


function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);

 paddle = createSprite(0, height/2, 10, height);
 paddle.immovable = true;

  wallTop = createSprite(width/2, -30/2, width, 30);
  wallTop.immovable = true;

  wallBottom = createSprite(width/2, height+30/2, width, 30);
  wallBottom.immovable = true;

}

function draw() {
  background(255, 255, 255);
   fill(0);
  textAlign(CENTER);
  text('Click to create a new sprite', width/2, height/2);
 
  drawSprites();
}

function mousePressed() {
  //create a sprite at the mouse position and store it in a temporary variable
  s = createSprite(mouseX, mouseY, 30, 30);

  //if no image or animation is associated it will be a rectancle of the specified size
  //and a random color
  //now you can use the variable to set properties
  //e.g. a random velocity on the x and y coordinates
  s.bounce(paddle);
  s.velocity.x = random(-5, 5);
  s.velocity.y = random(-5, 5);
  ;
    
}

