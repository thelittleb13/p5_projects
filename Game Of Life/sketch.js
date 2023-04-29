let boxes = [];
let boxWidth = 10;
let fr = 10;
let start = -1,  //-1 means stop, 1 means start animation
  startButton;

function setup() {
  createCanvas(400, 400);
  frameRate(fr);

  startButton = createButton("Start / Stop");
  startButton.position(width + 50, 50);
  startButton.mousePressed(() => {
    start *= -1
    if (start == 1) startButton.style('background-color', color("red"));
    else if (start == -1) startButton.style('background-color', color("green"));
  });
  startButton.style('background-color', color("green"));
  startButton.style('color', color("white"));

  // intialize boxes array as all 0s
  for (var i = 0; i < width / boxWidth; i++) {
    boxes.push([]);
    for (var j = 0; j < height / boxWidth; j++) {
      boxes[i][j] = 0;
    }
  }

  boxes[0][1] = 1;
  boxes[1][2] = 1;
  boxes[2][0] = 1;
  boxes[2][1] = 1;
  boxes[2][2] = 1;
}

function draw() {
  background(220);
  drawGridLines();
  drawBoxes();
  if (start == 1) applyRules();

  // noLoop(); // remove
}

function mousePressed() {
  if (start == -1) { // only do if stopped
    var i = floor(mouseY / boxWidth);
    var j = floor(mouseX / boxWidth);

    if (boxes[i][j] == 1) boxes[i][j] = 0;
    else boxes[i][j] = 1;
  }
}

function applyRules() {
  var nextGeneration = [];

  for (var i = 0; i < boxes.length; i++) {
    nextGeneration.push([])
    for (var j = 0; j < boxes[i].length; j++) {
      if (boxes[i][j] == 0 && countNeighborsOf(i, j) == 3) nextGeneration[i][j] = 1;
      else if (boxes[i][j] == 1 && (countNeighborsOf(i, j) < 2 || countNeighborsOf(i, j) > 3)) nextGeneration[i][j] = 0;
      else nextGeneration[i][j] = boxes[i][j];
    }
  }

  boxes = nextGeneration;
}

function countNeighborsOf(i, j) {
  var sumOfNeighbors = 0;

  if (i - 1 >= 0 && j - 1 >= 0) sumOfNeighbors += boxes[i - 1][j - 1]
  if (i - 1 >= 0) sumOfNeighbors += boxes[i - 1][j]
  if (i - 1 >= 0 && j + 1 < boxes[i].length) sumOfNeighbors += boxes[i - 1][j + 1]
  if (j - 1 >= 0) sumOfNeighbors += boxes[i][j - 1]
  if (j + 1 < boxes[i].length) sumOfNeighbors += boxes[i][j + 1]
  if (i + 1 < boxes.length && j - 1 >= 0) sumOfNeighbors += boxes[i + 1][j - 1]
  if (i + 1 < boxes.length) sumOfNeighbors += boxes[i + 1][j]
  if (i + 1 < boxes.length && j + 1 < boxes[i].length) sumOfNeighbors += boxes[i + 1][j + 1]

  return sumOfNeighbors;
}

function drawBoxes() {
  push();

  fill("green");
  for (var i = 0; i < boxes.length; i++) {
    for (var j = 0; j < boxes[i].length; j++) {
      if (boxes[i][j] == 1) rect(j * boxWidth, i * boxWidth, boxWidth);
    }
  }

  pop();
}

function drawGridLines() {
  for (var i = 0; i <= width; i += boxWidth) {
    line(i, 0, i, height);
  }

  for (var i = 0; i <= height; i += boxWidth) {
    line(0, i, width, i);
  }
}
