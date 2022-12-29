// things to fix
// sometimes aTimesC of trinomial.js will be 0. It shouldn't be
// TODO: Back button
// TODO: The typed values change location from screens 2 and 3. Fix that

let acInput, bInput, leftInput, rightInput;
let topLeftInput, topRightInput, botLeftInput, botRightInput;
let firstTopTermInput, secondTopTermInput, firstLeftTermInput, secondLeftTermInput;
let bInputValue = 11, bInputColor = "rgb(0, 0, 0, .3)", acInputValue = 13, acInputColor = "rgb(0, 0, 0, .3)", leftInputValue = -99, leftInputColor = "rgb(0, 0, 0, 1)", rightInputValue = -99, rightInputColor = "rgb(0, 0, 0, 1)", topLeftInputValue = 7, topRightInputValue = 2, botLeftInputValue = 3, botRightInputValue = 4;
let yesButton,
  yesButtonWidth = 100, yesButtonColor;
let backButton, backButtonColor;
let xSquared, x1, x2;
let screenArray = ["drawFirstScreen", "drawSecondScreen", "drawThirdScreen", "drawFourthScreen", "drawFifthScreen", "drawSixthScreen", "drawSeventhScreen", "drawEighthScreen", "drawNinthScreen", "drawTenthScreen"],
  screenIndex = 9,
  currentScreen;
let computerModernFont,
  factoringExampleImage;

function preload() {
  computerModernFont = loadFont('cmunrm.ttf');
  factoringExampleImage = loadImage('factoring_example.png');
}

function setup() {
  myCanvas = createCanvas(1000, 600);
  // myCanvas.setID("canvas");
  // myCanvas.position(50, 50);

  // textFont(computerModernFont);

  acInput = createInput("a⋅c");
  acInput.hide();

  bInput = createInput("b");
  bInput.hide();

  leftInput = createInput("");
  leftInput.hide();

  rightInput = createInput("");
  rightInput.hide();

  topLeftInput = createInput("");
  topLeftInput.hide();

  topRightInput = createInput("");
  topRightInput.hide();

  botLeftInput = createInput("");
  botLeftInput.hide();

  botRightInput = createInput("");
  botRightInput.hide();

  firstTopTermInput = createInput("");
  firstTopTermInput.hide();

  secondTopTermInput = createInput("2nd top");
  secondTopTermInput.hide();

  firstLeftTermInput = createInput("");
  firstLeftTermInput.hide();

  secondLeftTermInput = createInput("2nd left");
  secondLeftTermInput.hide();

  yesButton = createButton();
  yesButtonColor = color(25, 23, 200, 50);
  yesButton.hide();

  backButton = createButton("Back");
  backButtonColor = color(25, 23, 200, 50);
  backButton.size(yesButtonWidth, 30);
  backButton.position(width / 11 - yesButtonWidth / 2, height * .5 / 11);
  backButton.style("background-color", backButtonColor);
  backButton.style("font-size", "18px");
  backButton.mousePressed(decrementScreen);
  backButton.mouseOver(darkenBackButton);
  backButton.mouseOut(lightenBackButton);
  backButton.hide();

  xSquared = createTeX(`x^2`);
  x1 = createTeX(`x`);
  x2 = createTeX(`x`);

  overflow("hidden"); // idk what this does

  myTrinomial = new Trinomial();
  myTrinomial.getRandomABC();
  myTrinomial.drawTrinomial();
  console.log("Drew Trinomial in setup");
}

function draw() {
  background(220);

  currentScreen = screenArray[screenIndex];
  drawCurrentScreen(currentScreen);

  backButton.style("background-color", backButtonColor);

  backButton.hide();
  if (currentScreen != "drawFirstScreen") backButton.show();

  displayMousePosition();

  text(screenIndex + 1, width - 100, 50);
}

function drawCurrentScreen() {
  if (currentScreen == "drawFirstScreen") drawFirstScreen();
  if (currentScreen == "drawSecondScreen") drawSecondScreen();
  if (currentScreen == "drawThirdScreen") drawThirdScreen();
  if (currentScreen == "drawFourthScreen") drawFourthScreen();
  if (currentScreen == "drawFifthScreen") drawFifthScreen();
  if (currentScreen == "drawSixthScreen") drawSixthScreen();
  if (currentScreen == "drawSeventhScreen") drawSeventhScreen();
  if (currentScreen == "drawEighthScreen") drawEighthScreen();
  if (currentScreen == "drawNinthScreen") drawNinthScreen();
  if (currentScreen == "drawTenthScreen") drawTenthScreen();
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
  myTrinomial.drawCirclesAndArrowsToABCAndMoreLOL(true, true, true);

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
  myTrinomial.drawCirclesAndArrowsToABCAndMoreLOL(true, true, true);

  fill("white");
  stroke("black");
  strokeWeight(2);

  rect(
    width / 2,
    height / 4.1,
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

  bInput.position(width * 2.6 / 11, height * 3.5 / 6); //b input
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
  myTrinomial.drawCirclesAndArrowsToABCAndMoreLOL(true, true, true);

  fill("white");
  stroke("black");
  strokeWeight(2);

  rect(
    width / 2,
    height / 4.1,
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

  acInput.position(width * 2.6 / 11, height * 1.5 / 6); //ac input
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
  // myTrinomial.drawCirclesAndArrowsToABCAndMoreLOL(true, true, true);

  fill("white");
  stroke("black");
  strokeWeight(2);

  rect(
    width / 2,
    height / 4.1,
    width / 2 - 1,
    height * 3 / 4 - 1
  );

  textSize(33);
  strokeWeight(1);
  fill("black");
  textWrap(WORD);
  textAlign(CENTER);
  text( // TODO: make it so that add and multiply are red/underlined? Maybe I can use that drawText function i found somewhere online?
    `Now we need to think! The two numbers that go into the two remaining areas in the X need to add up to ${bInputValue} and multiply to ${acInputValue}. Use the guide at the bottom to help you! Once you figure out what those two numbers are, type them into the two boxes in any order and press ENTER.`,
    width / 2,
    height / 4,
    width / 2 - 1,
    height * 3 / 4 - 1
  );

  leftInput.position(width * 1 / 11, height * 2.5 / 6); //left input
  leftInput.style("font-size", "40px");
  leftInput.style("color", leftInputColor);
  leftInput.mousePressed(clearLeftInput);
  // leftInput.mouseOver(clearLeftInput);
  // leftInput.mouseOut(unclearLeftInput);
  leftInput.size(70, 90);
  leftInput.show();

  rightInput.position(width * 4 / 11, height * 2.5 / 6); //right input
  rightInput.style("font-size", "40px");
  rightInput.style("color", rightInputColor);
  rightInput.mousePressed(clearRightInput);
  // rightInput.mouseOver(clearRightInput);
  // rightInput.mouseOut(unclearRightInput);
  rightInput.size(70, 90);
  rightInput.show();

  drawLittlePlusAndMultSign();
  drawTypedValues(true, true, false, false);

  drawDynamicEquations();

  pop();
}

function drawSixthScreen() {
  push();

  hideAllButtonsAndInputs();

  drawXBox();
  // myTrinomial.drawCirclesAndArrowsToABC(true, true, true);

  fill("white");
  stroke("black");
  strokeWeight(2);

  rect(
    0,
    height * 8.5 / 11,
    width - 1,
    height * 2.5 / 11 - 1
  );

  textSize(35);
  strokeWeight(1);
  fill("black");
  textWrap(WORD);
  textAlign(CENTER);
  text(
    `We finished our X! On to the empty box on the right. The x-squared term from your polynomial goes in the first space. Type it in, then press ENTER.`,
    0,
    height * 8.5 / 11,
    width - 1,
    height * 2.5 / 11 - 1
  );

  drawTypedValues(true, true, true, true);

  // TODO: Make arrow show correctly
  topLeftInput.position(width * 6.3 / 11, height * 1.8 / 6 + 2); //Top Left input
  topLeftInput.style("font-size", "45px");
  topLeftInput.size(width * .65 / 11, height * .8 / 6);
  // topLeftInput.style("z-index", "0");
  topLeftInput.show();

  myTrinomial.drawCirclesAndArrowsToABCAndMoreLOL(false, false, false, true, false) // 

  pop();
}

function drawSeventhScreen() {
  push();

  hideAllButtonsAndInputs();

  drawXBox();
  // myTrinomial.drawCirclesAndArrowsToABCAndMoreLOL(true, true, true);

  fill("white");
  stroke("black");
  strokeWeight(2);

  rect(
    0,
    height * 8.5 / 11,
    width - 1,
    height * 2.5 / 11 - 1
  );

  textSize(28);
  strokeWeight(1);
  fill("black");
  textWrap(WORD);
  textAlign(CENTER);
  text(
    `Great! Now look at the two numbers on the left and right of our X. Those are the coefficients of our two x-terms. Let's plug them in to the two areas of the box shown on the right. They can go in any order. When you're done typing, press ENTER.`,
    0,
    height * 8.5 / 11,
    width - 1,
    height * 2.5 / 11 - 1
  );

  drawTypedValues(true, true, true, true, true);

  botLeftInput.position(width * 6.3 / 11, height * 3.3 / 6 + 2); //Bot Left input
  botLeftInput.style("font-size", "35px");
  botLeftInput.style("border-color", "red");
  botLeftInput.style("border-style", "solid");
  botLeftInput.style("border-width", "4px");
  botLeftInput.size(width * .65 / 11, height * .8 / 6);
  botLeftInput.show();

  topRightInput.position(width * 8.3 / 11, height * 1.8 / 6 + 2); //Bot Left input
  topRightInput.style("font-size", "35px");
  topRightInput.style("border-color", "red");
  topRightInput.style("border-style", "solid");
  topRightInput.style("border-width", "4px");
  topRightInput.size(width * .65 / 11, height * .8 / 6);
  topRightInput.show();

  drawRedRectanglesAroundLeftAndTermCoefficients();

  // myTrinomial.drawCirclesAndArrowsToABCAndMoreLOL(false, false, false, true, false);

  pop();
}

function drawEighthScreen() {
  push();

  hideAllButtonsAndInputs();

  drawXBox();

  fill("white");
  stroke("black");
  strokeWeight(2);

  rect(
    0,
    height * 8.5 / 11,
    width - 1,
    height * 2.5 / 11 - 1
  );

  textSize(45);
  strokeWeight(1);
  fill("black");
  textWrap(WORD);
  textAlign(CENTER);
  text(
    `Noice. Now plug in the constant term of the trinomial into the last area. Then press ENTER.`,
    0,
    height * 8.5 / 11,
    width - 1,
    height * 2.5 / 11 - 1
  );

  drawTypedValues(true, true, true, true, true, true, true);

  botRightInput.position(width * 8.6 / 11, height * 3.3 / 6 + 2); //Bot Right input
  botRightInput.style("font-size", "35px");
  botRightInput.style("border-color", "red");
  botRightInput.style("border-style", "solid");
  botRightInput.style("border-width", "4px");
  botRightInput.size(width * .65 / 11, height * .8 / 6);
  botRightInput.show();

  drawXSquaredInTopLeftBox();
  drawXInBotLeftAndTopRightBox();
  myTrinomial.drawCirclesAndArrowsToABCAndMoreLOL(false, false, false, false, true);

  pop();
}

function drawNinthScreen() {
  push();

  hideAllButtonsAndInputs();

  drawOnlyBox();
  myTrinomial.hideTrinomial();

  fill("white");
  stroke("black");
  strokeWeight(2);

  rect(
    0,
    height / 4.1,
    width / 3 - 1,
    height * 3 / 4 - 1
  );

  textSize(34);
  strokeWeight(1);
  fill("black");
  textWrap(WORD);
  textAlign(CENTER);
  text(
    "From here on out, we will work from our finished box. When we're done, our factors will be on the top and left of the box, as indicated by the red rectangles.",
    0,
    height / 4,
    width / 3 - 1,
    height * 3 / 4 - 1
  );

  yesButton.size(yesButtonWidth, 50);
  yesButton.position(width * 1 / 6 - yesButtonWidth / 2, height - 75);
  yesButton.style("background-color", yesButtonColor);
  yesButton.style("font-size", "24px");
  yesButton.html("Got it.");
  yesButton.mousePressed(incrementScreen);
  yesButton.mouseOver(darkenButton);
  yesButton.mouseOut(lightenButton);
  yesButton.show();

  drawTypedValues(false, false, false, false, true, true, true, true);

  drawXSquaredInTopLeftBox();
  drawXInBotLeftAndTopRightBox();
  drawRedRectanglesAroundFactors(true, true, true, true);

  pop();
}

function drawTenthScreen() {
  push();

  hideAllButtonsAndInputs();

  drawOnlyBox();
  myTrinomial.hideTrinomial();

  fill("white");
  stroke("black");
  strokeWeight(2);

  rect(
    0,
    height / 4.1,
    width / 3 - 1,
    height * 3 / 4 - 1
  );

  textSize(25);
  strokeWeight(1);
  fill("black");
  textWrap(WORD);
  textAlign(CENTER);
  text(
    "Some more thinking! This time, you need to figure out what two quantities multiply to give you the top left square. Here's an example.",
    0,
    height / 4,
    width / 3 - 1,
    height * 3 / 4 - 1
  );

  image(factoringExampleImage, .07 * width, .52 * height, 200, 200);

  textSize(25);
  strokeWeight(1);
  fill("black");
  textWrap(WORD);
  textAlign(CENTER);
  text(
    "When you're finished, press ENTER.",
    0,
    height * .87,
    width / 3 - 1,
    height * 3 / 4 - 1
  );

  drawTypedValues(false, false, false, false, true, false, false, false);
  drawXSquaredInTopLeftBox();
  // drawXInBotLeftAndTopRightBox();
  drawRedRectanglesAroundFactors(false, false, false, false);

  firstTopTermInput.position(width * .595, height * .14); //First Top input
  firstTopTermInput.style("font-size", "45px");
  firstTopTermInput.style("border-color", "red");
  firstTopTermInput.style("border-style", "solid");
  firstTopTermInput.style("border-width", "4px");
  firstTopTermInput.size(.08 * width, .08 * height);
  // firstTopTermInput.style("z-index", "0");
  firstTopTermInput.show();

  firstLeftTermInput.position(width * .45, height * .335); //First Left input
  firstLeftTermInput.style("font-size", "45px");
  firstLeftTermInput.style("border-color", "red");
  firstLeftTermInput.style("border-style", "solid");
  firstLeftTermInput.style("border-width", "4px");
  firstLeftTermInput.size(.08 * width, .08 * height);
  // firstLeftTermInput.style("z-index", "0");
  firstLeftTermInput.show();

  pop();
}

function drawRedRectanglesAroundFactors(firstTopTermBoolean, secondTopTermBoolean, firstLeftTermBoolean, secondLeftTermBoolean) {
  push();

  var length = .08 * width;
  var tallnessLol = .08 * height;

  noFill();
  stroke("red");
  strokeWeight(3);
  if (firstTopTermBoolean) rect(width * .595, height * .14, length, tallnessLol); // first top rectangle
  if (secondTopTermBoolean) rect(width * .776, height * 1.5 / 11, length, tallnessLol); // second top rectangle

  if (firstLeftTermBoolean) rect(width * .45, height * .335, length, tallnessLol); // first left rectangle
  if (secondLeftTermBoolean) rect(width * .45, height * .6, length, tallnessLol); // second left rectangle

  pop();
}

function drawTypedValues(bBoolean, acBoolean, leftBoolean, rightBoolean, topLeftBoolean, topRightBoolean, botLeftBoolean, botRightBoolean) {
  push();

  textAlign(CENTER);

  // TODO: import and use computer modern font!
  textSize(80);
  if (bBoolean) text(bInputValue, width * 2.95 / 11, height * 4.3 / 6); // show b value
  if (acBoolean) text(acInputValue, width * 2.95 / 11, height * 2.2 / 6); // show a*c value
  if (leftBoolean) text(leftInputValue, width * 1.5 / 11, height * 3.3 / 6); // show left value
  if (rightBoolean) text(rightInputValue, width * 4.5 / 11, height * 3.3 / 6); // show right value

  var charWidth = 25;
  var topLeftOffset = getNumberOfDigits(topLeftInputValue) * charWidth;
  var topRightOffset = getNumberOfDigits(topRightInputValue) * charWidth;
  var botLeftOffset = getNumberOfDigits(botLeftInputValue) * charWidth;
  // var botRightOffset = getNumberOfDigits(botRightInputValue) * charWidth;

  // TODO: complete if statements for typed values in the BOX.
  textSize(60);
  if (topLeftBoolean) text(topLeftInputValue, width * 7.15 / 11 - topLeftOffset, height * 2.6 / 6); // show topLeft value
  // console.log(width * 7.15 / 11 - topLeftOffset, height * 2.6 / 6);

  if (topRightBoolean) text(topRightInputValue, width * 9.05 / 11 - topRightOffset, height * 2.6 / 6); // show topRight value
  if (botLeftBoolean) text(botLeftInputValue, width * 7.15 / 11 - botLeftOffset, height * 4.05 / 6); // show botLeft value

  if (botRightBoolean) text(botRightInputValue, width * .8, height * 4.1 / 6); // show botRight value

  pop();
}

function getNumberOfDigits(num) {
  var numberOfDigits = 0;
  if (abs(num) >= 0 && abs(num) <= 9) numberOfDigits = 1; // eg 1, 3, 7
  if (abs(num) >= 10 && abs(num) <= 99) numberOfDigits = 2; // eg 11, 26, 99
  if (abs(num) >= 100 && abs(num) <= 999) numberOfDigits = 3; // eg 102, 345, 999
  if (abs(num) >= 1000 && abs(num) <= 9999) numberOfDigits = 4; // eg 1000, 5540, 9999
  if (num < 0) numberOfDigits += .3; // negatives
  return numberOfDigits;
}


function drawDynamicEquations() {
  push();

  var left = parseInt(leftInput.value());
  var right = parseInt(rightInput.value());
  if (isNaN(left)) left = "_";
  if (isNaN(right)) right = "_";

  text(`${left} + ${right} = ${bInputValue}`, width * 3 / 11, height * 9.4 / 11); // addition
  text(`${left} ⋅ ${right} = ${acInputValue}`, width * 3 / 11, height * 10.4 / 11); // multiplication

  noFill();
  strokeWeight(3);
  rect(width * 1.5 / 11, height * 8.8 / 11, width * 3 / 11, height * 2 / 11);

  pop();
}

function drawLittlePlusAndMultSign() {
  push();

  stroke("red");
  fill("red");
  strokeWeight(2);
  textAlign(CENTER, CENTER);
  text("+", width * 3 / 11, height * 8.3 / 11);
  textSize(50);
  text("⋅", width * 3 / 11, height * 2.6 / 11);

  pop();
}

function drawRedRectanglesAroundLeftAndTermCoefficients() {
  push();

  noFill();
  stroke("red");
  strokeWeight(3);
  rect(width * .8 / 11, height * 4.7 / 11, width * 1.4 / 11, height * 1.8 / 11); // around left of X
  rect(width * 3.8 / 11, height * 4.7 / 11, width * 1.4 / 11, height * 1.8 / 11); // around right of X

  pop();
}

// TODO: Make it so that if back button is pressed from 6th screen then x^2 is displayed next to input box.
//TODO: Add an equation.remove() when I need to remove a tex object.

function drawXSquaredInTopLeftBox() {
  xSquared.position(width * 7.1 / 11, height * 3.9 / 11);
  xSquared.size(48);
  // xSquared.size(50, 10);
  xSquared.stroke(color(`rgb(0, 0, 0)`));
  xSquared.fill(color(`rgb(0, 0, 0)`));
  // console.log(xSquared.position());
  xSquared.style("z-index", "2");
  xSquared.add();
}

function drawXInBotLeftAndTopRightBox() {
  x1.position(width * 7.1 / 11, height * 6.6 / 11); //bot left
  x1.size(48);
  // x1.size(50, 10);
  x1.stroke(color(`rgb(0, 0, 0)`));
  x1.fill(color(`rgb(0, 0, 0)`));
  // x1.style("z-index", "2");
  x1.add();

  x2.position(width * 9.1 / 11, height * 3.9 / 11); // top right
  x2.size(48);
  // x2.size(50, 10);
  x2.stroke(color(`rgb(0, 0, 0)`));
  x2.fill(color(`rgb(0, 0, 0)`));
  // x2.style("z-index", "2");
  x2.add();
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
  if (leftInput.value() == "l") {
    leftInput.value("");
    leftInputColor = "rgb(0, 0, 0)"
  }
}

function unclearLeftInput() {
  if (leftInput.value() == "") leftInput.value("");
}

function clearRightInput() {
  if (rightInput.value() == "r") {
    rightInput.value("");
    rightInputColor = "rgb(0, 0, 0)"
  }
}

function unclearRightInput() {
  if (rightInput.value() == "") rightInput.value("");
}

function incrementScreen() {
  // hideAllButtonsAndInputs();
  // TODO: Make it so that "b" and "a * c" show up again when you press back and end up on those screens
  screenIndex++;

  bInput.value("b");
  bInputColor = "rgb(0, 0, 0, .3)";
  acInput.value("a⋅c");
  acInputColor = "rgb(0, 0, 0, .3)";
}

//TODO: Some bullshit. The equation disappears when I press ENTER on the 8th screen, but doesn't reappear when I press back from the 9th screen.
function decrementScreen() {
  xSquared.remove();
  x1.remove();
  x2.remove();
  if (currentScreen === "drawNinthScreen") {
    myTrinomial.drawTrinomial();
    console.log("Drew Trinomial in decrementscreen");
  }
  screenIndex--;
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

  if (
    currentScreen == "drawFifthScreen" && keyCode === ENTER && !isNaN(parseInt(leftInput.value())) && !isNaN(parseInt(rightInput.value()))
  ) {
    leftInputValue = parseInt(leftInput.value());
    rightInputValue = parseInt(rightInput.value());
    leftInput.value("");
    rightInput.value("");
    incrementScreen();
    drawXSquaredInTopLeftBox();
  }

  if (
    currentScreen == "drawSixthScreen" && keyCode === ENTER && !isNaN(parseInt(topLeftInput.value()))
  ) {
    topLeftInputValue = parseInt(topLeftInput.value());
    topLeftInput.value("");
    // xSquared.remove();
    incrementScreen();
    drawXInBotLeftAndTopRightBox();
  }

  if (
    currentScreen == "drawSeventhScreen" && keyCode === ENTER && !isNaN(parseInt(topRightInput.value())) && !isNaN(parseInt(botLeftInput.value()))
  ) {
    topRightInputValue = parseInt(topRightInput.value());
    topRightInput.value("");
    botLeftInputValue = parseInt(botLeftInput.value());
    botLeftInput.value("");
    // xSquared.remove();
    // myTrinomial.drawTrinomial();
    incrementScreen();
    drawXInBotLeftAndTopRightBox();
  }

  if (
    currentScreen == "drawEighthScreen" && keyCode === ENTER && !isNaN(parseInt(botRightInput.value()))
  ) {
    botRightInputValue = parseInt(botRightInput.value());
    botRightInput.value("");
    // xSquared.remove();
    myTrinomial.hideTrinomial();
    console.log("removed in keypressed");
    incrementScreen();
    drawXInBotLeftAndTopRightBox();
  }
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

function darkenBackButton() {
  backButtonColor = color(25, 23, 200, 75);
}

function lightenBackButton() {
  backButtonColor = color(25, 23, 200, 50);
}

function drawXBox() {
  push();

  strokeWeight(3);

  line(width * 1 / 11, height * 1.5 / 6, width * 5 / 11, height * 4.5 / 6); // first diag
  line(width * 1 / 11, height * 4.5 / 6, width * 5 / 11, height * 1.5 / 6); // second diag


  line(width * 6 / 11, height * 1.5 / 6, width * 6 / 11, height * 4.5 / 6); // left vert
  line(width * 8 / 11, height * 1.5 / 6, width * 8 / 11, height * 4.5 / 6); // mid vert
  line(width * 10 / 11, height * 1.5 / 6, width * 10 / 11, height * 4.5 / 6); // right vert
  line(width * 6 / 11, height * 1.5 / 6, width * 10 / 11, height * 1.5 / 6); // top horiz
  line(width * 6 / 11, height * 3.0 / 6, width * 10 / 11, height * 3.0 / 6); // mid horiz
  line(width * 6 / 11, height * 4.5 / 6, width * 10 / 11, height * 4.5 / 6); // bot horiz

  pop();
}

function drawOnlyBox() {
  push();

  strokeWeight(3);

  line(width * 6 / 11, height * 1.5 / 6, width * 6 / 11, height * 4.5 / 6); // left vert
  line(width * 8 / 11, height * 1.5 / 6, width * 8 / 11, height * 4.5 / 6); // mid vert
  line(width * 10 / 11, height * 1.5 / 6, width * 10 / 11, height * 4.5 / 6); // right vert
  line(width * 6 / 11, height * 1.5 / 6, width * 10 / 11, height * 1.5 / 6); // top horiz
  line(width * 6 / 11, height * 3.0 / 6, width * 10 / 11, height * 3.0 / 6); // mid horiz
  line(width * 6 / 11, height * 4.5 / 6, width * 10 / 11, height * 4.5 / 6); // bot horiz

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

  text("x:" + (mouseX / width), 175, 15);
  text("y:" + (mouseY / height), 250, 15);

  stroke("black"); // reset stroke

  pop();
}