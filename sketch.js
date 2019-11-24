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
   background(50);
  
  
  if (car1.position.x >= width) {//                  차 1 ~ 5 까지 화면 끝에 닿으면 돌아오게 해주었다.
    car1.position.x = 0;
    car1.setVelocity(random(3, 10), 0);
  }
 
   if (car2.position.x >= width) {
    car2.position.x = 0;
    car2.setVelocity(random(3, 10), 0);
  }

   if (car3.position.x >= width) {
    car3.position.x = 0;
    car3.setVelocity(random(3, 10), 0);
  }

     if (car4.position.x >= width) {
    car4.position.x = 0;
    car4.setVelocity(random(3, 10), 0);
  }


     if (car5.position.x >= width) {
    car5.position.x = 0;
    car5.setVelocity(random(3, 10), 0);
  }

  
  if (frog.bounce(car1) && cR != 255 && cG != 0) { //.         색이 바뀌게 해줌
    // sound_hit.play();
      cR = cR + 50;
      cG = cG - 50;
      frog.shapeColor = color(cR,cG,100);
  }
  
  // 충돌 시 사운드 효과에 대한 또 다른 방법
  // frog.collide(car1, playHitSound);
  // frog.bounce(car1);
  
  
  if (frog.overlap(goal)) {
  }
  
  drawSprites();
  checkGameOver();
 
}

function resetGame() {
  

  frog = createSprite(width/2, height-30, 20, 40);
  frog.shapeColor = color(cR,cG,100);

  goal = createSprite(width/2, 0, width, 4);
  goal.shapeColor = color(200,200,0);  
  //차
  car1 = createSprite(0, 40, 60, 40);
  car1.setVelocity(random(3, 10), 0);

  car2 = createSprite(0, 120, 60, 40);
  car2.setVelocity(random(3, 10), 0);

  car3 = createSprite(0, 180, 60, 40);
  car3.setVelocity(random(3, 10), 0);

  car4 = createSprite(0, 250, 60, 40);
  car4.setVelocity(random(3, 10), 0);

  car5 = createSprite(0, 320, 60, 40);
  car5.setVelocity(random(3, 10), 0);
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


// function nextLevel() {.                        next 함수 안 써서 주석처리
//   frog.position.x = width/2;
//   frog.position.y = height-30;
// }


function playHitSound() {//              이것도 안 쓸거긴 한데,,.. 일단 둔다.
  sound_hit.play();
}

