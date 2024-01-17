//things to do:
// bell noise when you get it right
// terms only move horizontally
// terms show up horizontally like in algebrother

let u = 50;
let terms = [],
  termsAndSign = [];
let lastClickX, lastClickY;
let exampleButton;
let leftInput, rightInput;
let leftYPos = 100,
  rightYPos = 100;
let colors = [];
let colorDict = {};
let signs = ["=", "<", ">", "≤", "≥"];
let signsIndex = 0;

function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);

  leftInput = createInput("");
  leftInput.position(0, height);
  leftInput.size(50);
  leftInput.hide();

  rightInput = createInput("");
  rightInput.position(210, height);
  rightInput.size(50);
  rightInput.hide();

  exampleButton = createButton("Give me an example problem!");
  exampleButton.position(0, height + 90);
  exampleButton.mousePressed(exampleProblem);

  colors[0] = color(227, 98, 98, 50);
  colors[1] = color(104, 128, 252, 50);
  colors[2] = color(139, 227, 98, 50);
  colors[3] = color(98, 227, 218, 50);
  colors[4] = color(227, 184, 98, 50);

  // hideSomeButtons();
  exampleProblem();
}

function draw() {
  background(220);

  grid();
  displayMousePosition();

  push();

  textSize(60);
  text(signs[signsIndex], width / 2, height / 2);
  strokeWeight(4);
  line(width / 2, 0, width / 2, width);

  pop();

  createColorDict();
  drawTerms();
  drag(); //drag all terms underneath cursor
  determineCurrentSides();
  determineFlips(); //flip all signs that cross line

  push();
  rectMode(CORNERS);
  fill("white");
  rect(0, height, width, height);
  pop();
}

function drawTerms() {
  for (var i = 0; i < terms.length; i++) {
    terms[i].drawTerm(colorDict);
  }
}

function resetCanvas() {
  leftYPos = 100;
  rightYPos = 100;
  terms = [];
  signsIndex = 0;
  colorDict = {};
}

function drag() {
  for (var i = 0; i < terms.length; i++) {
    terms[i].drag();
  }
}

function determineCurrentSides() {
  for (var i = 0; i < terms.length; i++) {
    terms[i].determineCurrentSide();
  }
}

function determineFlips() {
  for (var i = 0; i < terms.length; i++) {
    terms[i].determineFlip();
  }
}

function addLeftTerm() {
  if (leftInput.value() != "") {
    terms.push(new Term(leftInput.value(), width * .25, leftYPos, "left"));
    leftYPos += 60;
    leftInput.value("");
  }
}

function addRightTerm() {
  if (rightInput.value() != "") {
    terms.push(new Term(rightInput.value(), width * .75, rightYPos, "right"));
    rightYPos += 60;
    rightInput.value("");
  }
}

function mousePressed() {
  lastClickX = mouseX;
  lastClickY = mouseY;
  for (var i = 0; i < terms.length; i++) {
    if (terms[i].isClicked(lastClickX, lastClickY))
      terms[i].shouldThisTermBeDragged = true;
  }
}

function mouseReleased() {
  lastClickX = 0;
  lastClickY = 0;
  for (var i = 0; i < terms.length; i++) {
    terms[i].shouldThisTermBeDragged = false;
  }
}

function createColorDict() {
  for (var i = 0; i < terms.length; i++) {
    thingy = terms[i].sortedStrippedTerm();
    colorDict[thingy] = "";
  }
  for (var j = 0; j < Object.keys(colorDict).length; j++) {
    colorDict[Object.keys(colorDict)[j]] = colors[j];
  }
}

function incrementSignsIndex() {
  signsIndex = (signsIndex + 1) % signs.length;
}

function exampleProblem() {
  resetCanvas();

  leftInput.value("3x");
  addLeftTerm();
  leftInput.value("4");
  addLeftTerm();

  rightInput.value("14x");
  addRightTerm();
  rightInput.value("7");
  addRightTerm();

  signsIndex = 4;
}

function hideSomeButtons() {
  // exampleButton.hide();
}

function saveEquation() {
  termsAndSign = [signsIndex, leftYPos, rightYPos, terms];
  saveJSON(termsAndSign, "My Equation");
}

function loadEquation(file) {
  resetCanvas();
  signsIndex = file.data[0];
  leftYPos = file.data[1];
  rightYPos = file.data[2];
  newTerms = file.data[3];
  for (var i = 0; i < newTerms.length; i++) {
    terms[i] = new Term(
      newTerms[i].name,
      newTerms[i].x,
      newTerms[i].y,
      newTerms[i].currentSide
    );
  }
}

function grid() {
  background(200);
  stroke(220);
  strokeWeight(1);
  for (let x = 0; x <= width; x += u) {
    for (let y = 0; y <= height; y += u) {
      line(x, 0, x, height);
      line(0, y, width, y);
    }
  }
}

function displayMousePosition() {
  textFont("menlo");
  textSize(14);
  noStroke();
  // text("x:" + mouseX, 350, 25);
  // text("y:" + mouseY, 350, 50);
  stroke("black"); // reset stroke
}
