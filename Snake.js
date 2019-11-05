class Snake{
  
constructor(){
this.numSegments = 10;
this.direction = 'right';

this.xStart = 300;
this.yStart = 250;
this.diff = 10;

this.xCor = [];
this.yCor = [];

}

draw(){
   for (let i = 0; i < this.numSegments - 1; i++) {
    line(this.xCor[i], this.yCor[i], this.xCor[i + 1], this.yCor[i + 1]);
  }

}

 updateSnakeCoordinates () {//numSegments = 10(점점 커짐/몸통길이) , diff = 10(변하지 않음) ;
  for (let i = 0; i < this.numSegments - 1; i++) {
    this.xCor[i] = this.xCor[i + 1];
    this.yCor[i] = this.yCor[i + 1];
  }
   //배열 안에 들어있는 값이 큰 수에서 작은 수 방향으로 한 칸씩 이동함 
   // 만약에 10,20,30, … , 80, 90 이었다면 20, 30, 40, … , 90, ? 이 됨

  switch (this.direction) {
    case 'right':
      this.xCor[this.numSegments - 1] = this.xCor[this.numSegments - 2] + this.diff;
       // 앞에서 영향을 받지 않은 xCor[9] = xCor[8]위치에 가있는 직전 위치 +10이라는 뜻
      this.yCor[this.numSegments - 1] = this.yCor[this.numSegments - 2];
      break;
    case 'up':
      this.xCor[this.numSegments - 1] = this.xCor[this.numSegments - 2];
      this.yCor[this.numSegments - 1] = this.yCor[this.numSegments - 2] - this.diff;
      break;
    case 'left':
      this.xCor[this.numSegments - 1] = this.xCor[this.numSegments - 2] - this.diff;
      this.yCor[this.numSegments - 1] = this.yCor[this.numSegments - 2];
      break;
    case 'down':
      this.xCor[this.numSegments - 1] = this.xCor[this.numSegments - 2];
      this.yCor[this.numSegments - 1] = this.yCor[this.numSegments - 2] + this.diff;
      break;
  }
}




checkSnakeCollision() {
  this.snakeHeadX = this.xCor[this.xCor.length - 1];
  this.snakeHeadY = this.yCor[this.yCor.length - 1];
  for (let i = 0; i < xCor.length - 1; i++) {
    if (this.xCor[i] === this.snakeHeadX && this.yCor[i] === this.snakeHeadY) {
      return true;
    }
  }
}


}

