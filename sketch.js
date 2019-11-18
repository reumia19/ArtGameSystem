let canvas;
let canvasWidth = 600;
let canvasHeight = 400;
var s;
var sp;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);

}

function draw() {
  background(255, 255, 255);
   fill(0);
  textAlign(CENTER);
  text('Click to create a new sprite', width/2, height/2);
 
  drawSprites();

  for(var i=0; i<allSprites.length; i++) {
    var s = allSprites[i];
  
    if(s.position.y<0) {
      s.position.y = 1;
      s.velocity.y = abs(s.velocity.y);
    }

    if(s.position.y>height) {
      s.position.y = height-1;
      s.velocity.y = 0;
    }

    s.bounce(allSprites);
  }

}

function mousePressed() {

    sp = createSprite(mouseX, mouseY,30,30);
    sp.shapeColor = color(random(200,255),random(100,120),random(100,150));
    sp.setCollider("rectangle");
    sp.setSpeed(random(2, 3),90 );
    sp.scale = random(0.2, 0.5);
    sp.mass = sp.scale;
}

