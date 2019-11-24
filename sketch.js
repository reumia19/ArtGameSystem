let canvas;
let canvasWidth = 600;
let canvasHeight = 400;

let frog;
let car1;
let car2;
let car3;
let car4;
let car5;

let goal;
let sound_hit;

// 개구리 색 설정할 변수
let cR = 100;
let cG = 200;


function preload() {
  // sound_hit = loadSound('hit.wav');
}

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);

  
  resetGame();

}

function draw() {
   background(220);
  
  
  if (car1.position.x >= width) {
    car1.position.x = 0;
    car1.setVelocity(random(3, 10), 0);
  }
  

  
  if (frog.bounce(car1) && cR != 255 && cG != 0) {
    // sound_hit.play();
      cR = cR + 50;
      cG = cG - 50;
      frog.shapeColor = color(cR,cG,100);
  }
  
  // 충돌 시 사운드 효과에 대한 또 다른 방법
  // frog.collide(car1, playHitSound);
  // frog.bounce(car1);
  
  
  if (frog.overlap(goal)) {
    nextLevel();
  }
  
  drawSprites();
  checkGameOver();
 
}

function resetGame() {
  

  frog = createSprite(width/2, height-30, 20, 40);
  frog.shapeColor = color(cR,cG,100);

  goal = createSprite(width/2, 0, width, 4);
  car1 = createSprite(0, height/2, 60, 30);
  car1.setVelocity(random(3, 10), 0);


}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    frog.position.y -= 50;
  }
}


function checkGameOver() {
  if (frog.position.x <= 0 || width <= frog.position.x) {
    fill(255, 0, 0);
    textSize(60);
    textAlign(CENTER);
    text("GAME OVER", width/2, height/2);
    
  }
}


function nextLevel() {
  frog.position.x = width/2;
  frog.position.y = height-30;
}


function playHitSound() {
  sound_hit.play();
}

