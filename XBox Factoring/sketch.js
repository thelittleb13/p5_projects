// things to fix
// sometimes aTimesC of trinomial.js will be 0. It shouldn't be
// TODO: Back button
// TODO: The typed values change location from screens 2 and 3. Fix that

let acInput, bInput, leftInput, rightInput;
let topLeftInput, topRightInput, botLeftInput, botRightInput;
let firstLeftTermInput, secondLeftTermInput, firstTopTermInput, secondTopTermInput;
let bInputValue = 11, bInputColor = "rgb(0, 0, 0, .3)", acInputValue = 13, acInputColor = "rgb(0, 0, 0, .3)", leftInputValue = 99, leftInputColor = "rgb(0, 0, 0, .3)", rightInputValue = 99, rightInputColor = "rgb(0, 0, 0, .3)", topLeftInputValue, topRightInputValue, botLeftInputValue, botRightInputValue;
let yesButton,
  yesButtonWidth = 100, yesButtonColor;
let backButton, backButtonColor;
let xSquared, x1, x2;
let screenArray = ["drawFirstScreen", "drawSecondScreen", "drawThirdScreen", "drawFourthScreen", "drawFifthScreen", "drawSixthScreen", "drawSeventhScreen", "drawEighthScreen"],
  screenIndex = 4,
  currentScreen;

function setup() {
  myCanvas = createCanvas(1000, 600);
  // myCanvas.setID("canvas");
  // myCanvas.position(50, 50);

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

  firstLeftTermInput = createInput("1st");
  firstLeftTermInput.hide();

  secondLeftTermInput = createInput("2nd");
  secondLeftTermInput.hide();

  firstTopTermInput = createInput("1st");
  firstTopTermInput.hide();

  secondTopTermInput = createInput("2nd");
  secondTopTermInput.hide();

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
}

function draw() {
  background(220);

  currentScreen = screenArray[screenIndex];
  drawCurrentScreen(currentScreen);

  backButton.style("background-color", backButtonColor);

  backButton.hide();
  if (currentScreen != "drawFirstScreen") backButton.show();

  displayMousePosition();
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
    height / 4,
    width / 2 - 1,
    height * 3 / 4 - 1
  );

  textSize(35);
  strokeWeight(1);
  fill("black");
  textWrap(WORD);
  textAlign(CENTER);
  text( // TODO: make it so that add and multiply are red/underlined? Maybe I can use that drawText function i found somewhere online?
    `Now we need to think! The two numbers that go into the two remaining areas in the X need to add up to ${bInputValue} and multiply to ${acInputValue}. Once you figure out what those two numbers are, type them into the two boxes in any order and press ENTER.`,
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

  // TODO: Make an addition and multiplication equation underneath the X that update as you type in numbers into the things and so you can play around with numbers to figure out which ones it is. Also I should change the border colors of each of the inputs to match where that value is going to show up in the two equations. 

  text(leftInput.value(), width * 2 / 11)

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

  drawTypedValues(true, true, true, true);

  botLeftInput.position(width * 6.3 / 11, height * 3.3 / 6 + 2); //Bot Left input
  botLeftInput.style("font-size", "45px");
  botLeftInput.style("border-color", "red");
  botLeftInput.style("border-style", "solid");
  botLeftInput.style("border-width", "4px");
  botLeftInput.size(width * .65 / 11, height * .8 / 6);
  botLeftInput.show();

  topRightInput.position(width * 8.3 / 11, height * 1.8 / 6 + 2); //Bot Left input
  topRightInput.style("font-size", "45px");
  topRightInput.style("border-color", "red");
  topRightInput.style("border-style", "solid");
  topRightInput.style("border-width", "4px");
  topRightInput.size(width * .65 / 11, height * .8 / 6);
  topRightInput.show();

  drawRedRectanglesAroundLeftAndTermCoefficients();

  // myTrinomial.drawCirclesAndArrowsToABCAndMoreLOL(false, false, false, true, false);
  // drawBoxAndArrowsF

  pop();
}

function drawEighthScreen() {
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

  drawTypedValues(true, true, true, true);

  botRightInput.position(width * 8.3 / 11, height * 3.3 / 6 + 2); //Bot Right input
  botRightInput.style("font-size", "45px");
  botRightInput.style("border-color", "red");
  botRightInput.style("border-style", "solid");
  botRightInput.style("border-width", "4px");
  botRightInput.size(width * .65 / 11, height * .8 / 6);
  botRightInput.show();

  // myTrinomial.drawCirclesAndArrowsToABCAndMoreLOL(false, false, false, true, false);
  // drawBoxAndArrowsF

  pop();
}

function drawLittlePlusAndMultSign() {
  push();

  stroke("red");
  fill("red");
  strokeWeight(2);
  textAlign(CENTER, CENTER);
  text("+", width * 3 / 11, height * 8.3 / 11);
  text("x", width * 3 / 11, height * 2.6 / 11);

  pop();
}

function drawRedRectanglesAroundLeftAndTermCoefficients() {
  push();

  noFill();
  stroke("red");
  strokeWeight(3);
  rect(width * 1 / 11, height * 4.7 / 11, width * 1 / 11, height * 1.8 / 11);
  rect(width * 4 / 11, height * 4.7 / 11, width * 1 / 11, height * 1.8 / 11);

  pop();
}

// TODO: Make it so that if back button is pressed from 6th screen then x^2 is displayed next to input box.
//TODO: Add an equation.remove() when I need to remove a tex object.

function drawXSquaredInTopLeftBox() {
  xSquared.position(width * 7.1 / 11, height * 3.6 / 11);
  xSquared.size(48);
  // xSquared.size(50, 10);
  xSquared.stroke(color(`rgb(0, 0, 0)`));
  xSquared.fill(color(`rgb(0, 0, 0)`));
  // console.log(xSquared.position());
  xSquared.style("z-index", "2");
  xSquared.add();
}

function drawXInBotLeftBox() {
  x1.position(width * 7.1 / 11, height * 3.6 / 6);
  x1.size(48);
  // x1.size(50, 10);
  x1.stroke(color(`rgb(0, 0, 0)`));
  x1.fill(color(`rgb(0, 0, 0)`));
  // console.log(x1.position());
  x1.style("z-index", "2");
  x1.add();
}

function drawXInTopRightBox() {
  x2.position(width * 9.1 / 11, height * 3.9 / 11);
  x2.size(48);
  // x2.size(50, 10);
  x2.stroke(color(`rgb(0, 0, 0)`));
  x2.fill(color(`rgb(0, 0, 0)`));
  // console.log(x2.position());
  x2.style("z-index", "2");
  x2.add();
}

function drawTypedValues(bBoolean, acBoolean, leftBoolean, rightBoolean, topLeftBoolean, topRightBoolean, botLeftBoolean, BotRightBoolean) {
  push();
  // TODO: import and use computer modern font!
  textSize(80);
  if (bBoolean) text(bInputValue, width * 2.95 / 11, height * 4.3 / 6); // show b value
  if (acBoolean) text(acInputValue, width * 2.95 / 11, height * 2.2 / 6); // show a*c value
  if (leftBoolean) text(leftInputValue, width * 1.5 / 11, height * 3.3 / 6); // show left value
  if (rightBoolean) text(rightInputValue, width * 4.5 / 11, height * 3.3 / 6); // show right value

  // TODO: complete if statements for typed values in the BOX.
  if (topLeftBoolean);
  if (topRightBoolean);
  if (botLeftBoolean);
  if (BotRightBoolean);



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
}

function decrementScreen() {
  xSquared.remove();
  x1.remove();
  x2.remove();
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
    drawXInBotLeftBox();
    drawXInTopRightBox();
  }

  if (
    currentScreen == "drawSeventhScreen" && keyCode === ENTER && !isNaN(parseInt(topRightInput.value())) && !isNaN(parseInt(botLeftInput.value()))
  ) {
    topRightInputValue = parseInt(topRightInput.value());
    topRightInput.value("");
    botLeftInputValue = parseInt(botLeftInput.value());
    botLeftInput.value("");
    // xSquared.remove();
    incrementScreen();
    drawXInBotLeftBox();
    drawXInTopRightBox();
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

  // line(width * 6 / 11, height * 2 / 6, width * 6 / 11, height * 5 / 6); // left vert
  // line(width * 8 / 11, height / 3, width * 8 / 11, height * 5 / 6); // mid vert
  // line(width * 10 / 11, height / 3, width * 10 / 11, height * 5 / 6); // right vert
  // line(width * 6 / 11, height * 2 / 6, width * 10 / 11, height * 2 / 6); // top horiz
  // line(width * 6 / 11, height * 3.5 / 6, width * 10 / 11, height * 3.5 / 6); // mid horiz
  // line(width * 6 / 11, height * 5 / 6, width * 10 / 11, height * 5 / 6); // bot horiz

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