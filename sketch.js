let canvas;
let canvasWidth = 600;
let canvasHeight = 400;
var s;
var sp;
var imageSprite;


function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);

var image = loadImage('image/picxenk.png');
 imageSprite = createSprite(mouseX, mouseY);
 imageSprite.addImage(image);

}

function draw() {
  background(255, 255, 255);
   fill(0);
  textAlign(CENTER);
  text('Click to create a new sprite', width/2, height/2);
 
  drawSprites();

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

    s.bounce(allSprites);
  }

}

function mousePressed() {

    sp = createSprite(mouseX, mouseY,30,30);
    sp.shapeColor = color(random(200,255),random(100,120),random(100,150));
    sp.setCollider("rectangle");
    sp.setSpeed(random(2, 3), random(0, 360));
    sp.scale = random(0.5, 1);
    sp.mass = sp.scale;
}

