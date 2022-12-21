// things to fix
// sometimes aTimesC of trinomial.js will be 0. It shouldn't be

let acInput, bInput, leftInput, rightInput;
let topLeftInput, topRightInput, botLeftInput, botRightInput;
let firstLeftTermInput, secondLeftTermInput, firstTopTermInput, secondTopTermInput;

function setup() {
  myCanvas = createCanvas(600, 400);
  // myCanvas.setID("canvas");
  // myCanvas.position(50, 50);

  acInput = createInput("a * c");
  acInput.hide();

  bInput = createInput("b");
  bInput.hide();

  leftInput = createInput("l");
  leftInput.hide();

  rightInput = createInput("r");
  rightInput.hide();

  topLeftInput = createInput("TL");
  topLeftInput.hide();

  topRightInput = createInput("TR");
  topRightInput.hide();

  botLeftInput = createInput("BL");
  botLeftInput.hide();

  botRightInput = createInput("BR");
  botRightInput.hide();

  firstLeftTermInput = createInput("1st");
  firstLeftTermInput.hide();

  secondLeftTermInput = createInput("2nd");
  secondLeftTermInput.hide();

  firstTopTermInput = createInput("1st");
  firstTopTermInput.hide();

  secondTopTermInput = createInput("2nd");
  secondTopTermInput.hide();

  overflow("hidden"); // idk what this does

  myTrinomial = new Trinomial();
  myTrinomial.getRandomABC();
}

function draw() {
  background(220);

  drawXBox();
  // drawEquation();
  drawInputs();
  myTrinomial.drawTrinomial();
  // noLoop();
}

function drawXBox() {
  push();

  strokeWeight(3);

  line(width * 1 / 11, height * 2 / 6, width * 5 / 11, height * 5 / 6); // first diag
  line(width * 1 / 11, height * 5 / 6, width * 5 / 11, height * 2 / 6); // second diag


  line(width * 6 / 11, height * 2 / 6, width * 6 / 11, height * 5 / 6); // left vert
  line(width * 8 / 11, height / 3, width * 8 / 11, height * 5 / 6); // mid vert
  line(width * 10 / 11, height / 3, width * 10 / 11, height * 5 / 6); // right vert
  line(width * 6 / 11, height * 2 / 6, width * 10 / 11, height * 2 / 6); // top horiz
  line(width * 6 / 11, height * 3.5 / 6, width * 10 / 11, height * 3.5 / 6); // mid horiz
  line(width * 6 / 11, height * 5 / 6, width * 10 / 11, height * 5 / 6); // bot horiz

  pop();
}

function drawEquation() {
  push();

  // equation = createP("3x^2 + 6x + 12");
  // equation.parent(myCanvas);
  // equation.position(width * 3 / 11, height * 0 / 11);
  // equation.style("font-size", "48px");
  // equation.style("padding", "0px");
  // equation.style("border-color", "black");

  textAlign(CENTER);
  textSize(48);
  text("1x^2 + 2x - 8", width / 2, height * 2 / 11);

  pop();
}

function drawInputs() {
  push();

  rectMode(CENTER);

  //X Inputs
  acInput.position(width * 2.3 / 11, height * 2 / 6); //a * c input
  acInput.style("font-size", "35px");
  acInput.size(70, 50);
  acInput.show();

  bInput.position(width * 2.5 / 11, height * 4 / 6); //b input
  bInput.style("font-size", "40px");
  bInput.size(40, 50);
  bInput.show();

  leftInput.position(width * 1 / 11, height * 3 / 6); //left input
  leftInput.style("font-size", "40px");
  leftInput.size(40, 50);
  leftInput.show();

  rightInput.position(width * 4 / 11, height * 3 / 6); //right input
  rightInput.style("font-size", "40px");
  rightInput.size(40, 50);
  rightInput.show();

  //Inside BOX Inputs
  topLeftInput.position(width * 6.045 / 11, height * 2 / 6 + 2); //Top Left input
  topLeftInput.style("font-size", "40px");
  topLeftInput.size(width * 1.8 / 11, height * 1.35 / 6);
  topLeftInput.show();

  topRightInput.position(width * 8.045 / 11, height * 2 / 6 + 2); //Top Right input
  topRightInput.style("font-size", "40px");
  topRightInput.size(width * 1.8 / 11, height * 1.35 / 6);
  topRightInput.show();

  botLeftInput.position(width * 6.045 / 11, height * 3.5 / 6 + 2); //Bot Left input
  botLeftInput.style("font-size", "40px");
  botLeftInput.size(width * 1.8 / 11, height * 1.35 / 6);
  botLeftInput.show();

  botRightInput.position(width * 8.045 / 11, height * 3.5 / 6 + 2); //Bot Right input
  botRightInput.style("font-size", "40px");
  botRightInput.size(width * 1.8 / 11, height * 1.35 / 6);
  botRightInput.show();

  //Outside BOX Inputs
  firstLeftTermInput.position(width * 6.6 / 11, height * 1.5 / 6 + 2); //Top Left input
  firstLeftTermInput.style("font-size", "20px");
  firstLeftTermInput.size(width * .5 / 11, height * .3 / 6);
  firstLeftTermInput.show();

  secondLeftTermInput.position(width * 8.6 / 11, height * 1.5 / 6 + 2); //Top Left input
  secondLeftTermInput.style("font-size", "20px");
  secondLeftTermInput.size(width * .5 / 11, height * .3 / 6);
  secondLeftTermInput.show();

  firstTopTermInput.position(width * 5.3 / 11, height * 2.5 / 6 + 2); //Top Left input
  firstTopTermInput.style("font-size", "20px");
  firstTopTermInput.size(width * .5 / 11, height * .3 / 6);
  firstTopTermInput.show();

  secondTopTermInput.position(width * 5.3 / 11, height * 4 / 6 + 2); //Top Left input
  secondTopTermInput.style("font-size", "20px");
  secondTopTermInput.size(width * .5 / 11, height * .3 / 6);
  secondTopTermInput.show();

  pop();
}