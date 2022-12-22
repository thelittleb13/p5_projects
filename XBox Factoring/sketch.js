// things to fix hello
// sometimes aTimesC of trinomial.js will be 0. It shouldn't be

let acInput, bInput, leftInput, rightInput;
let topLeftInput, topRightInput, botLeftInput, botRightInput;
let firstLeftTermInput, secondLeftTermInput, firstTopTermInput, secondTopTermInput;
let bInputValue = 11, bInputColor = "rgb(0, 0, 0, .3)", acInputValue = 13, acInputColor = "rgb(0, 0, 0, .3)", leftInputValue, leftInputColor = "rgb(0, 0, 0, .3)";
let yesButton,
  yesButtonWidth = 100;
let screenArray = ["drawFirstScreen", "drawSecondScreen", "drawThirdScreen", "drawFourthScreen", "drawFifthScreen"],
  screenIndex = 0,
  currentScreen;

function setup() {
  myCanvas = createCanvas(1000, 600);
  // myCanvas.setID("canvas");
  // myCanvas.position(50, 50);

  acInput = createInput("a⋅c");
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

  yesButton = createButton();
  yesButton.hide();
  yesButtonColor = color(25, 23, 200, 50);

  overflow("hidden"); // idk what this does

  myTrinomial = new Trinomial();
  myTrinomial.getRandomABC();
  myTrinomial.drawTrinomial();

}

function draw() {
  background(220);

  currentScreen = screenArray[screenIndex];
  drawCurrentScreen(currentScreen);

  displayMousePosition()
}

function drawCurrentScreen() {
  if (currentScreen == "drawFirstScreen") drawFirstScreen();
  if (currentScreen == "drawSecondScreen") drawSecondScreen();
  if (currentScreen == "drawThirdScreen") drawThirdScreen();
  if (currentScreen == "drawFourthScreen") drawFourthScreen();
  if (currentScreen == "drawFifthScreen") drawFifthScreen();
}

function drawFirstScreen() {
  // drawInputs();
  // console.log("hi");

  push();

  // hideAllButtonsAndInputs();

  fill("white");
  stroke("black");
  strokeWeight(2);

  rect(
    0,
    height / 4,
    width - 1,
    height * 3 / 4 - 1
  );

  textSize(60);
  strokeWeight(1);
  fill("black");
  textWrap(WORD);
  textAlign(CENTER);
  text(
    "Hey! \n We're going to factor the trinomial above using the XBOX method. First, let's label our a, b, and c values.",
    0,
    height / 4,
    width - 1,
    height * 3 / 4 - 1
  );

  pop();

  yesButton.size(yesButtonWidth, 50);
  yesButton.position(width / 2 - yesButtonWidth / 2, height - 75);
  yesButton.style("background-color", yesButtonColor);
  yesButton.style("font-size", "24px");
  yesButton.html("OK!");
  yesButton.mousePressed(incrementScreen);
  yesButton.mouseOver(darkenButton);
  yesButton.mouseOut(lightenButton);
  yesButton.show();

}

function drawSecondScreen() {
  push();

  hideAllButtonsAndInputs();
  drawXBox();
  myTrinomial.drawCirclesAndArrowsToABC(true, true, true);

  fill("white");
  stroke("black");
  strokeWeight(2);

  rect(
    0,
    height / 4,
    width - 1,
    height * 3 / 4 - 1
  );

  textSize(60);
  strokeWeight(1);
  fill("black");
  textWrap(WORD);
  textAlign(CENTER);
  text(
    "Here are our a, b, and c values. Notice how we did NOT include the variables! Let's now start to fill out our X.",
    0,
    height / 4,
    width - 1,
    height * 3 / 4 - 1
  );

  pop();

  yesButton.size(yesButtonWidth, 50);
  yesButton.position(width * 1 / 2 - yesButtonWidth / 2, height - 75);
  yesButton.style("background-color", yesButtonColor);
  yesButton.style("font-size", "24px");
  yesButton.html("OK!");
  yesButton.mousePressed(incrementScreen);
  yesButton.mouseOver(darkenButton);
  yesButton.mouseOut(lightenButton);
  yesButton.show();
}

function drawThirdScreen() {
  push();

  hideAllButtonsAndInputs();

  drawXBox();
  myTrinomial.drawCirclesAndArrowsToABC(true, true, true);

  fill("white");
  stroke("black");
  strokeWeight(2);

  rect(
    width / 2,
    height / 4,
    width / 2 - 1,
    height * 3 / 4 - 1
  );

  textSize(45);
  strokeWeight(1);
  fill("black");
  textWrap(WORD);
  textAlign(CENTER);
  text(
    "On the left you see our X. Start by typing in the b-value above into the bottom of the X. Then Press ENTER.",
    width / 2,
    height / 4,
    width / 2 - 1,
    height * 3 / 4 - 1
  );

  bInput.position(width * 2.6 / 11, height * 4 / 6); //b input
  bInput.style("font-size", "40px");
  bInput.style("color", bInputColor);
  bInput.mousePressed(clearBInput);
  // bInput.mouseOver(clearBInput);
  // bInput.mouseOut(unclearBInput);
  bInput.size(70, 90);
  bInput.show();

  pop();
}

function drawFourthScreen() {
  push();

  hideAllButtonsAndInputs();

  drawXBox();
  myTrinomial.drawCirclesAndArrowsToABC(true, true, true);

  fill("white");
  stroke("black");
  strokeWeight(2);

  rect(
    width / 2,
    height / 4,
    width / 2 - 1,
    height * 3 / 4 - 1
  );

  textSize(45);
  strokeWeight(1);
  fill("black");
  textWrap(WORD);
  textAlign(CENTER);
  text(
    "Now let's fill in the top of the X. Multiply the a and c values and type that product into the top of the X. Then press ENTER.",
    width / 2,
    height / 4,
    width / 2 - 1,
    height * 3 / 4 - 1
  );

  textSize(80);
  text(bInputValue, width * 2.95 / 11, height * 4.7 / 6);

  acInput.position(width * 2.6 / 11, height * 2 / 6); //ac input
  acInput.style("font-size", "40px");
  acInput.style("color", acInputColor);
  acInput.mousePressed(clearACInput);
  // acInput.mouseOver(clearacInput);
  // acInput.mouseOut(unclearacInput);
  acInput.size(70, 90);
  acInput.show();

  pop();
}

function drawFifthScreen() {
  push();

  hideAllButtonsAndInputs();

  drawXBox();
  myTrinomial.drawCirclesAndArrowsToABC(true, true, true);

  fill("white");
  stroke("black");
  strokeWeight(2);

  rect(
    width / 2,
    height / 4,
    width / 2 - 1,
    height * 3 / 4 - 1
  );

  textSize(35);
  strokeWeight(1);
  fill("black");
  textWrap(WORD);
  textAlign(CENTER);
  text(
    `Now we need to think! The two numbers that go into the two remaining areas in the X need to add up to ${bInputValue} and multiply to ${acInputValue}. Once you figure out those two numbers, type them into the two boxes in any order and press ENTER.`,
    width / 2,
    height / 4,
    width / 2 - 1,
    height * 3 / 4 - 1
  );

  leftInput.position(width * 2.6 / 11, height * 2 / 6); //ac input
  leftInput.style("font-size", "40px");
  leftInput.style("color", leftInputColor);
  leftInput.mousePressed(clearLeftInput);
  // leftInput.mouseOver(clearLeftInput);
  // leftInput.mouseOut(unclearLeftInput);
  leftInput.size(70, 90);
  // leftInput.show();

  textSize(80);
  text(bInputValue, width * 2.95 / 11, height * 4.7 / 6); // show b value
  textSize(80);
  text(acInputValue, width * 2.95 / 11, height * 2.7 / 6); // show a*c value

  pop();
}

function clearBInput() {
  if (bInput.value() == "b") {
    bInput.value("");
    bInputColor = "rgb(0, 0, 0)"
  }
}

function unclearBInput() {
  if (bInput.value() == "") bInput.value("b");
}

function clearACInput() {
  if (acInput.value() == "a⋅c") {
    acInput.value("");
    acInputColor = "rgb(0, 0, 0)"
  }
}

function unclearACInput() {
  if (acInput.value() == "") acInput.value("a⋅c");
}

function clearLeftInput() {
  if (leftInput.value() == "") {
    leftInput.value("");
    leftInput = "rgb(0, 0, 0)"
  }
}

function unclearLeftInput() {
  if (leftInput.value() == "") leftInput.value("");
}

function incrementScreen() {
  // hideAllButtonsAndInputs();
  // if (currentScreen == "Right Term Adding Screen") incrementStep();
  // if (currentScreen == "Operation Input Screen") screenIndex--;
  // else screenIndex++;

  screenIndex++;
}

function keyPressed() {
  if (
    currentScreen == "drawThirdScreen" && keyCode === ENTER && bInput.value() != ""
  ) {
    bInputValue = parseInt(bInput.value());
    bInput.value("");
    incrementScreen();
  }

  if (
    currentScreen == "drawFourthScreen" && keyCode === ENTER && acInput.value() != ""
  ) {
    acInputValue = parseInt(acInput.value());
    acInput.value("");
    incrementScreen();
  }
  // if (currentScreen == "Operation Input Screen") {
  //   if (keyCode === 13 && operationInput.value() != "") {
  //     if (isAddButtonClicked || isSubButtonClicked) addOrSubToBothSides();
  //     else if (isDivButtonClicked == true) divToBothSides();
  //     else if (isMultButtonClicked == true) multToBothSides();
  //     incrementScreen();
  //   }
  // }
}

function hideAllButtonsAndInputs() {
  acInput.hide();
  bInput.hide();
  leftInput.hide();
  rightInput.hide();
  topLeftInput.hide();
  topRightInput.hide();
  botLeftInput.hide();
  botRightInput.hide();
  firstLeftTermInput.hide();
  secondLeftTermInput.hide();
  firstTopTermInput.hide();
  secondTopTermInput.hide();
  yesButton.hide();
}

function darkenButton() {
  yesButtonColor = color(25, 23, 200, 75);
}

function lightenButton() {
  yesButtonColor = color(25, 23, 200, 50);
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

function displayMousePosition() {
  push();

  textFont("menlo");
  textSize(14);
  noStroke();
  text("x:" + mouseX, 25, 15);
  text("y:" + mouseY, 100, 15);
  stroke("black"); // reset stroke

  pop();
}