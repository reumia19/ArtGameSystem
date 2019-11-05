let canvas;
let canvasWidth = 600;
let canvasHeight = 400;

let numSegments = 10;
let num2Segments = 10;

let direction = 'right';
let direction2 = 'right';

const xStart = 0;
const yStart = 250;
const diff = 10;

let xCor = [];
let yCor = [];

let xCor2 = [];
let yCor2 = [];

let xFruit = 0;
let yFruit = 0;

let scoreElem;
let scoreElem2;

let end;


function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  noCursor();

    scoreElem = createDiv('1P Score = 0');
  scoreElem.position(windowWidth/2-250, 40);
  scoreElem.id = 'score1P';
  scoreElem.style('color', 'white');

  scoreElem2 = createDiv('2P Score = 0');
  scoreElem2.position(windowWidth/2+140, 40);
  scoreElem2.id = 'score2P';
  scoreElem2.style('color','pink');

  frameRate(15);
  strokeWeight(10);
  strokeCap(PROJECT);
  updateFruitCoordinates();

    for (let i = 0; i < numSegments; i++) {
    xCor.push(xStart + i * diff);
    yCor.push(yStart);
  }
  
      for (let i = 0; i < num2Segments; i++) {
    xCor2.push (xStart+350 + i * diff);
    yCor2.push (yStart);
  }

}

function draw() {

  background(30);

 stroke(255);
  for (let i = 0; i < numSegments - 1; i++) {
    line(xCor[i], yCor[i], xCor[i + 1], yCor[i + 1]);
  }
    stroke(210,150,150);
    for (let i = 0; i < num2Segments - 1; i++) {
    line(xCor2[i], yCor2[i], xCor2[i + 1], yCor2[i + 1]);
    }
  stroke(255,0,0);
  updateSnakeCoordinates(); // 뱀 움직임
  updateSnakeCoordinates2(); //뱀2 움직임
  checkGameStatus(); // 게임 끝날 때 세팅
  checkForFruit(); // 과일 먹는 세팅값
  snakeToSnakeCollision();

}

function updateSnakeCoordinates() {
  for (let i = 0; i < numSegments - 1; i++) {
    xCor[i] = xCor[i + 1];
    yCor[i] = yCor[i + 1];
  }
  switch (direction) {
    case 'right':
      xCor[numSegments - 1] = xCor[numSegments - 2] + diff;
      yCor[numSegments - 1] = yCor[numSegments - 2];
      break;
    case 'up':
      xCor[numSegments - 1] = xCor[numSegments - 2];
      yCor[numSegments - 1] = yCor[numSegments - 2] - diff;
      break;
    case 'left':
      xCor[numSegments - 1] = xCor[numSegments - 2] - diff;
      yCor[numSegments - 1] = yCor[numSegments - 2];
      break;
    case 'down':
      xCor[numSegments - 1] = xCor[numSegments - 2];
      yCor[numSegments - 1] = yCor[numSegments - 2] + diff;
      break;
  }
}

function updateSnakeCoordinates2() {
  for (let i = 0; i < num2Segments - 1; i++) {
    xCor2[i] = xCor2[i + 1];
    yCor2[i] = yCor2[i + 1];
  }
  switch (direction2) {
    case 'right':
      xCor2[num2Segments - 1] = xCor2[num2Segments - 2] + diff;
      yCor2[numSegments - 1] = yCor2[num2Segments - 2];
      break;
    case 'up':
      xCor2[num2Segments - 1] = xCor2[num2Segments - 2];
      yCor2[num2Segments - 1] = yCor2[num2Segments - 2] - diff;
      break;
    case 'left':
      xCor2[num2Segments - 1] = xCor2[num2Segments - 2] - diff;
      yCor2[num2Segments - 1] = yCor2[num2Segments - 2];
      break;
    case 'down':
      xCor2[num2Segments - 1] = xCor2[num2Segments - 2];
      yCor2[num2Segments - 1] = yCor2[num2Segments - 2] + diff;
      break;
  }
}

function checkGameStatus() {
      const scoreVal2 = parseInt(scoreElem2.html().substring(11));
      const scoreVal = parseInt(scoreElem.html().substring(11));
  
  if (
    xCor[xCor.length - 1] > width ||
    xCor[xCor.length - 1] < 0 ||
    yCor[yCor.length - 1] > height ||
    yCor[yCor.length - 1] < 0 ||
    xCor2[xCor2.length - 1] > width ||
    xCor2[xCor2.length - 1] < 0 ||
    yCor2[yCor2.length - 1] > height ||
    yCor2[yCor2.length - 1] < 0 ||  // 뱀 머리가 나갔을 경우 
    checkSnakeCollision() ||
    checkSnakeCollision2()
) {
    noLoop(); // 게임 루프를 멈춘다

 if(checkSnakeCollision() // 뱀1이 자신의 몸에 충돌할 경우
  ){
    end = createDiv('Game ended! Player 2 Win');
    end.position(windowWidth/2-100, 50);
    end.id = 'scoreEnd';
    end.style('color', 'white');
}

  else if(checkSnakeCollision2() // 뱀2이 자신의 몸에 충돌할 경우
  ){
    end = createDiv('Game ended! Player 1 Win');
    end.position(windowWidth/2-100, 50);
    end.id = 'scoreEnd';
    end.style('color', 'white');
}
  
// 자신의 몸통에 부딪힌 경우를 제외하고 게임이 끝난 경우 점수에 따라 승패 결정
  
  else if(scoreElem.html().substring(11)*1>scoreElem2.html().substring(11)*1){
    end = createDiv('Game ended! Player 1 Win');
    end.position(windowWidth/2-100, 50);
    end.id = 'scoreEnd';
    end.style('color', 'white');
  }
    else if(scoreElem.html().substring(11)*1<scoreElem2.html().substring(11)*1){
    end = createDiv('Game ended! Player 2 Win');
    end.position(windowWidth/2-100, 50);
    end.id = 'scoreEnd';
    end.style('color', 'white');
    
    }
    
    else if(scoreElem.html().substring(11)*1 ==scoreElem2.html().substring(11)*1 )
    { //동점일 경우
    end = createDiv('DRAW..');
      end.position(windowWidth/2-20, 50);
    end.id = 'scoreEnd';
    end.style('color', 'white');
  }
    scoreElem.html('1P score was : ' + scoreVal);

    scoreElem2.html('2P score was : ' + scoreVal2);

    }
  }



function checkSnakeCollision() {
  const snakeHeadX = xCor[xCor.length - 1];
  const snakeHeadY = yCor[yCor.length - 1];

  
  for (let i = 0; i < xCor.length - 1; i++) {
    if (xCor[i] === snakeHeadX && yCor[i] === snakeHeadY) {
      return true;
    }
  }
}

function checkSnakeCollision2() {
  const snakeHeadX2 = xCor2[xCor2.length - 1];
  const snakeHeadY2 = yCor2[yCor2.length - 1];

  for (let i = 0; i < xCor2.length - 1; i++) {
    if (xCor2[i] === snakeHeadX2 && yCor2[i] === snakeHeadY2) {
      return true;
    }
  }
  
}

function checkSnake1Head2BodyCollision() {
  const snakeHeadX = xCor[xCor.length - 1];
  const snakeHeadY = yCor[yCor.length - 1];

  
  for (let i = 0; i < xCor2.length - 1; i++) {
    if (xCor2[i] === snakeHeadX&& yCor2[i]===snakeHeadY) {
      return true;
    }
  }
  
}

function checkSnake2Head1BodyCollision() {
  const snakeHeadX2 = xCor2[xCor2.length - 1];
  const snakeHeadY2 = yCor2[yCor2.length - 1];

  for (let i = 0; i < xCor.length - 1; i++) {
    if (xCor[i] === snakeHeadX2 && yCor[i] === snakeHeadY2) {
      return true;
    }
  }
  
}
function snakeToSnakeCollision() {

  if (checkSnake1Head2BodyCollision()) {
    const prevScore = parseInt(scoreElem.html().substring(11));
    scoreElem.html('1P Score = ' + (prevScore - 1));
  }
  else if(checkSnake2Head1BodyCollision()) {
    const prevScore2 = parseInt(scoreElem2.html().substring(11));
    scoreElem2.html('2P Score = ' + (prevScore2 - 1));
}
}

function checkForFruit() {
  point(xFruit, yFruit);
  if (xCor[xCor.length - 1] === xFruit && yCor[yCor.length - 1] === yFruit) {
    const prevScore = parseInt(scoreElem.html().substring(11));
    scoreElem.html('1P Score = ' + (prevScore + 1));
    xCor.unshift(xCor[0]);
    yCor.unshift(yCor[0]);
    numSegments++;
    updateFruitCoordinates();
  }
  else if(xCor2[xCor2.length - 1] === xFruit && yCor2[yCor2.length - 1] === yFruit) {
    const prevScore2 = parseInt(scoreElem2.html().substring(11));
    scoreElem2.html('2P Score = ' + (prevScore2 + 1));
    xCor2.unshift(xCor2[0]);
    yCor2.unshift(yCor2[0]);
    num2Segments++;
    updateFruitCoordinates();
}
}

function updateFruitCoordinates() {


  xFruit = floor(random(10, (width - 100) / 10)) * 10;
  yFruit = floor(random(10, (height - 100) / 10)) * 10;
}


function keyPressed() {
if(keyCode == 65 && direction !== 'right') {
        direction = 'left';
      }
if(keyCode == 68 && direction !== 'left') {
        direction = 'right';
      }
if(keyCode == 87 && direction !== 'down') {
        direction = 'up';
      }
if(keyCode == 83 && direction !== 'up') {

        direction = 'down';
      }
    if(keyCode == 37 && direction2 !== 'right') {
        direction2 = 'left';
  }
  if(keyCode == 39 && direction2 !== 'left') {
        direction2 = 'right';
      }
  if(keyCode == 38 && direction2 !== 'down') {
        direction2 = 'up';
      }
   if(keyCode == 40 && direction2 !== 'up') {
        direction2 = 'down';
      }
       if(keyCode == ENTER ) {
          resetGame();
       }

}


function resetGame(){
numSegments = 10;
num2Segments = 10;
direction = 'right';
direction2 = 'right';
  













}
