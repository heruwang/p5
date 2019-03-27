let carX = 50;
let carY = 50;
let carZ = 50;
let vroom;
let raceStarted = false;


function setup() {
  createCanvas(500, 500);

  vroom = new p5.Oscillator('square');
  vroom.start();
  vroom.freq(carX);
  //draw race car wheels
  // fill(0)；
  // stroke(225);
  // strokeweight(5);
  // ellipse(60, 350, 20, 20);
  // ellipse(60, 350, 20, 20);

}


function draw() {
  // console.log(frameCount)；

  background(0, 255, 0, 80);
  //start button.
  fill(0, 0, 0);
  rect(0, 0, 50, 50);
  //console.log(mouseIsPressed);

  //  if (frameCount > 120) {
  if (mouseIsPressed && mouseX > 0 && mouseX < 50 && mouseY > 0 && mouseY < 50) {
    raceStarted = true;
    console.log(raceStarted)
  }

  if (raceStarted === true) {
    vroom.freq(carX);
    if (carX > 500) {
      carX = -50;
    } else if (carX > 400) {
      carX += 6;
    } else {
      // carX = carX +  3;
      carX += 3;
    }

    //draw the race car body

    vroom.freq(carY);
    if (carY > 500) {
      carY = -50;
    } else if (carY > 400) {
      carY += 12;
    } else {
      // carX = carX +  3;
      carY += 3;
    }

    vroom.freq(carZ);
    if (carZ > 500) {
      carZ = -50;
    } else if (carZ > 400) {
      carZ += 2;
    } else {
      // carX = carX +  3;
      carZ += 3;
    }
  }
  fill(250, 30, 30);
  rect(carY, 100, 50, 30);

  fill(40,100,20);
  rect(carZ, 200, 50, 50);

  noStroke();
  fill(40, 50, 250);
  rect(carX, 300, 50, 30);

}
//mute it wth mouse click
function mousePressed() {

  //vroom.stop();
}
