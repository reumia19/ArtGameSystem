let canvas;
let canvasWidth = 600;
let canvasHeight = 400;
var s;


function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  
  var s = new Group();


}

function draw() {
  background(255, 255, 255);
   fill(0);
  textAlign(CENTER);
  text('Click to create a new sprite', width/2, height/2);

  for(var i=0; i<allSprites.length; i++) {
    var s = allSprites[i];
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

    drawSprites();

}

function mousePressed() {

  //create a sprite at the mouse position and store it in a temporary variable

  s = createSprite(mouseX, mouseY, 30, 30);
  s.setCollider('circle', -2, 2, 55);
  s.scale = random(0.5, 1);


  //if no image or animation is associated it will be a rectancle of the specified size
  //and a random color

  //now you can use the variable to set properties
  //e.g. a random velocity on the x and y coordinates
  s.velocity.x = random(-5, 5);
  s.velocity.y = random(-5, 5);
}
