// things to do:
// erase button to remove a term that you click (maybe not worth the effort)
// figure out fractions or converting decimals to fractions, etc
// write nested loop for loadEquation function to load all terms in all steps
// make colors[] add colors dynamically as needed
//write undo function to undo most recently added term or step. you can just change the callback function to go from undoing terms to undoing steps.
// give a picture example of distribution
// black out right side and add "done adding left terms" button instead. then transition to adding right terms.
// add bold horizontal lines to separate each step
// make adding terms more clear so that user knows to press enter
// decide how to display multiplication
// make the canvas longer and parametrize the welcome screens so that they can resize automatically you dumbass
// fix bugs with YPos and drawingtermscreens
// make colors[] add colors dynamically as needed

let gridSize = 50;
let terms = [],
  step = 0,
  termsAndEverythingElseNeededForSave = [];
let leftButton,
  rightButton,
  doneButton,
  resetButton,
  signButton,
  exampleButton,
  saveButton,
  addButton,
  subButton,
  multButton,
  divButton,
  combineButton,
  yesButton,
  yesButtonWidth = 100,
  undoButton,
  backButton,
  clearAllTermsButton,
  restartButton;
let canvasWidth = 800,
  canvasHeight = 600;
let yesButtonColor;
let leftInput, rightInput, addInput, multInput, divInput, operationInput;
let xIncrementForEachNewTerm = 60,
  yIncrementForEachNewStep = 50,
  leftXPos = canvasWidth / 2 - xIncrementForEachNewTerm,
  leftYPos = 50,
  rightXPos = canvasWidth / 2 + xIncrementForEachNewTerm,
  rightYPos = 50;
let colors = [],
  colorDict = {};
let signs = ["=", "<", ">", "≤", "≥"],
  signsIndex = 0,
  signArrayOfYs = [50];
let screenArray = [
    "Welcome Screen",
    "Distribution Screen",
    "Adding Terms Welcome Screen",
    "Left Term Adding Screen",
    "Right Term Adding Screen",
    "Inverse Operations Welcome Screen",
    "Operation Input Screen",
  ],
  screenIndex = 0,
  currentScreen;
let isAddButtonClicked = false,
  isSubButtonClicked = false,
  isMultButtonClicked = false,
  isDivButtonClicked = false;
let lastOperation = "";
let distributionImage;
let middleOfEquation = canvasWidth / 2;
let blinkerTimer;
let theRunDown = [];
let steps = [];

function preload() {
  distributionImage = loadImage("distribution.png");
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  // createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);

  yesButton = createButton("Yes!");
  yesButton.hide();
  yesButtonColor = color(25, 23, 200, 50);

  leftInput = createInput("");
  leftInput.hide();

  leftButton = createButton("");
  leftButton.hide();

  rightInput = createInput("");
  rightInput.hide();

  rightButton = createButton("Add Right Term");
  rightButton.hide();

  clearAllTermsButton = createButton("Clear ALL terms.");
  clearAllTermsButton.hide();

  doneButton = createButton("Done Adding Terms");
  doneButton.position(400, canvasHeight);
  doneButton.mousePressed(done);

  addButton = createButton("+");
  addButton.hide();

  subButton = createButton("-");
  subButton.hide();

  multButton = createButton("x");
  multButton.hide();

  divButton = createButton("÷");
  divButton.hide();

  operationInput = createInput("");
  operationInput.hide();

  combineButton = createButton("C.L.T.");
  combineButton.position(518, canvasHeight + 25);
  combineButton.mousePressed(combineLikeTermsAddition);

  hideOperationButtons();

  resetButton = createButton("");
  resetButton.hide();

  undoButton = createButton("Undo");
  undoButton.hide();

  backButton = createButton("Back");
  backButton.hide();

  restartButton = createButton("Restart");
  restartButton.hide();

  signButton = createButton("Change Sign");
  signButton.position(80, canvasHeight + 50);
  signButton.mousePressed(incrementSignsIndex);

  exampleButton = createButton("Give me an example problem!");
  exampleButton.position(0, canvasHeight - 10);
  exampleButton.mousePressed(exampleProblem);
  exampleButton.hide();

  saveButton = createButton("Save this equation");
  saveButton.position(0, canvasHeight + 125);
  saveButton.mousePressed(saveEquation);

  // input = createFileInput(loadEquation);
  // input.position(150, canvasHeight + 125);

  colors[0] = color(227, 98, 98, 50);
  colors[1] = color(104, 128, 252, 50);
  colors[2] = color(139, 227, 98, 50);
  colors[3] = color(98, 227, 218, 50);
  colors[4] = color(227, 184, 98, 50);

  steps[0] = {
    name: "Your Steps",
    x: 15,
    y: leftYPos,
  };

  terms[step] = [];
}

function draw() {
  background(220);

  grid();
  displayMousePosition();

  createColorDict();

  if (screenIndex > 2) drawTermsAndOtherStuff();

  // push();
  // rectMode(CORNERS);
  // fill("white");
  // rect(0, canvasHeight, width, height);
  // pop();

  // text(step, 50, 50);
  if (isAddButtonClicked || isSubButtonClicked)
    displayUpcomingAdditionOrSubtraction();
  if (isDivButtonClicked) displayUpcomingDivision();
  if (isMultButtonClicked) displayUpcomingMultiplication();

  theRunDown = [
    "L X=" + leftXPos,
    "L Y=" + leftYPos,
    "R X=" + rightXPos,
    "R Y=" + rightYPos,
  ];

  hideAllButtonsAndInputs();

  currentScreen = screenArray[screenIndex];
  displayCurrentScreen();

  // text(currentScreen, 450, 50);
  // line(0, 125, 600, 125);
  // line(0, 225, 600, 225);
}

function displayCurrentScreen() {
  switch (currentScreen) {
    case "Welcome Screen":
      drawWelcomeScreen();
      break;
    case "Distribution Screen":
      drawDistributionScreen();
      break;
    case "Adding Terms Welcome Screen":
      drawAddingTermsWelcomeScreen();
      break;
    case "Left Term Adding Screen":
      drawLeftTermAddingScreen();
      break;
    case "Right Term Adding Screen":
      drawRightTermAddingScreen();
      break;
    case "Inverse Operations Welcome Screen":
      drawInverseOperationsWelcomeScreen();
      break;
    case "Operation Input Screen":
      drawOperationInputScreen();
      break;
  }
}

function drawWelcomeScreen() {
  push();

  hideAllButtonsAndInputs();

  fill("white");
  stroke("black");
  strokeWeight(2);

  rect(
    canvasWidth / 2,
    canvasHeight / 2,
    canvasWidth - 200,
    canvasHeight - 150
  );

  textSize(40);
  fill("black");
  textWrap(WORD);
  text(
    "Hi! Are you trying to solve a linear equation?",
    canvasWidth / 2,
    canvasHeight / 2 - 100,
    canvasWidth - 200,
    canvasHeight - 150
  );

  pop();

  yesButton.position(canvasWidth / 2 - yesButtonWidth / 2, 400);
  yesButton.style("background-color", yesButtonColor);
  yesButton.size(100, 50);
  yesButton.html("Yes!");
  yesButton.mousePressed(incrementScreen);
  yesButton.mouseOver(darkenButton);
  yesButton.mouseOut(lightenButton);
  yesButton.show();
}

function drawDistributionScreen() {
  push();

  hideAllButtonsAndInputs();

  fill("white");
  stroke("black");
  strokeWeight(2);

  rect(
    canvasWidth / 2,
    canvasHeight / 2,
    canvasWidth - 200,
    canvasHeight - 150
  );

  textSize(30);
  fill("black");
  textWrap(WORD);
  text(
    "Nice! Before you start solving on the computer, you need to make sure to distribute on paper wherever necessary.",
    canvasWidth / 2,
    canvasHeight / 2 - 100,
    canvasWidth - 200,
    canvasHeight - 200
  );

  textSize(24);
  text("Example:", 175, 350);

  image(distributionImage, 240, 316, 250, 50);

  pop();

  yesButton.html("Okay.");
  yesButton.position(canvasWidth / 2 - yesButtonWidth / 2, 400);
  yesButton.style("background-color", yesButtonColor);
  yesButton.size(100, 50);
  yesButton.mousePressed(incrementScreen);
  yesButton.mouseOver(darkenButton);
  yesButton.mouseOut(lightenButton);
  yesButton.show();

  backButton.position(104, 500);
  backButton.mousePressed(backButtonClicked);
  backButton.show();
}

function drawAddingTermsWelcomeScreen() {
  push();

  hideAllButtonsAndInputs();

  fill("white");
  stroke("black");
  strokeWeight(2);

  rect(
    canvasWidth / 2,
    canvasHeight / 2,
    canvasWidth - 200,
    canvasHeight - 150
  );

  textSize(30);
  fill("black");
  textWrap(WORD);
  text(
    "Awesome. Now, you will use this tool to enter in your equation!",
    canvasWidth / 2,
    canvasHeight / 2 - 100,
    canvasWidth - 200,
    canvasHeight - 200
  );

  textSize(18);
  strokeWeight(1);
  text(
    "Note: Only decimal coefficients work at the moment, so convert all your fractions into decimals! Sorry :(",
    canvasWidth / 2,
    canvasHeight / 2 + 50,
    canvasWidth - 200,
    canvasHeight - 200
  );

  yesButton.html("I'm Ready!");
  yesButton.position(canvasWidth / 2 - yesButtonWidth / 2, 400);
  yesButton.style("background-color", yesButtonColor);
  yesButton.size(yesButtonWidth, 50);
  yesButton.mousePressed(incrementScreen);
  yesButton.mouseOver(darkenButton);
  yesButton.mouseOut(lightenButton);
  yesButton.show();

  backButton.position(104, 500);
  backButton.show();

  pop();
}

function drawLeftTermAddingScreen() {
  push();

  hideAllButtonsAndInputs();

  leftYPos = 50;
  rightYPos = 50;

  leftInput.position(canvasWidth / 4 - yesButtonWidth / 2, 100);
  leftInput.size(92, 44);
  leftInput.style("font-size", "30px");
  leftInput.show();

  textSize(12);
  text(
    "(press enter)",
    leftInput.position().x + 150,
    leftInput.position().y + 25
  );

  textWrap(WORD);
  textSize(24);
  text(
    "In the white box above, type each LEFT term one at a time, then press ENTER to add it.",
    canvasWidth / 4,
    canvasHeight / 2,
    canvasWidth / 2 - 100,
    canvasHeight
  );

  yesButton.html("Done Adding Left Terms!");
  yesButton.style("background-color", yesButtonColor);
  yesButton.position(canvasWidth / 4 - yesButtonWidth / 2, 475);
  yesButton.size(100, 50);
  yesButton.show();

  resetButton.html("Clear left terms.");
  resetButton.position(canvasWidth / 4 - yesButtonWidth / 2, 540);
  resetButton.size(100, 50);
  resetButton.mousePressed(clearLeftTerms);
  resetButton.show();

  backButton.position(2, 577);
  backButton.show();

  fill(0, 200);
  rect(
    (canvasWidth * 3) / 4,
    canvasHeight / 2,
    canvasWidth / 2 - 50,
    canvasHeight - 50
  );

  pop();
}

function drawRightTermAddingScreen() {
  push();

  hideAllButtonsAndInputs();

  step = 0;
  leftYPos = 50;
  rightYPos = 50;
  signArrayOfYs = [leftYPos];

  rightInput.position((canvasWidth * 3) / 4 - yesButtonWidth / 2, 100);
  rightInput.size(92, 44);
  rightInput.style("font-size", "30px");
  rightInput.show();

  textSize(12);
  text(
    "(press enter)",
    rightInput.position().x + 150,
    rightInput.position().y + 25
  );

  textWrap(WORD);
  textSize(24);
  text(
    "In the white box above, type each RIGHT term one at a time, then press ENTER to add it.",
    (canvasWidth * 3) / 4,
    canvasHeight / 2,
    canvasWidth / 2 - 100,
    canvasHeight
  );
  rightButton.html(
    "^^^^^^^^^^ Type each term above one at a time, then press enter to add it."
  );
  rightButton.style("font-size", "30px");
  rightButton.position(350, 200);
  rightButton.size(200, 250);
  rightButton.mousePressed(addRightTerm);
  // rightButton.show();

  // noStroke();
  // fill("white");
  // rect(300, 525, 100, 50);
  yesButton.html("Done Adding Terms!");
  yesButton.style("background-color", yesButtonColor);
  yesButton.position((canvasWidth * 3) / 4 - yesButtonWidth / 2, 475);
  yesButton.size(100, 50);
  yesButton.mousePressed(incrementScreen);
  yesButton.mouseOver(darkenButton);
  yesButton.mouseOut(lightenButton);
  yesButton.show();

  resetButton.html("Clear right terms.");
  resetButton.position((canvasWidth * 3) / 4 - yesButtonWidth / 2, 540);
  resetButton.size(100, 50);
  resetButton.mousePressed(clearRightTerms);
  resetButton.show();

  fill(0, 200);
  rect(
    canvasWidth / 4,
    canvasHeight / 2,
    canvasWidth / 2 - 50,
    canvasHeight - 50
  );

  backButton.position(2, 577);
  backButton.show();

  pop();
}

function drawInverseOperationsWelcomeScreen() {
  push();

  hideAllButtonsAndInputs();

  fill("white");
  rect(canvasWidth / 2, 500, canvasWidth, 200);

  fill("black");
  textSize(18);
  text(
    "Which operation do you want to conduct on both sides?",
    canvasWidth / 2,
    425
  );

  addButton.position(canvasWidth / 2 - 200, 450);
  addButton.size(100, 50);
  addButton.style("font-size", "30px");
  addButton.mousePressed(addButtonClicked);
  addButton.show();

  subButton.position(canvasWidth / 2 + 100, 450);
  subButton.size(100, 50);
  subButton.style("font-size", "30px");
  subButton.mousePressed(subButtonClicked);
  subButton.show();

  multButton.position(canvasWidth / 2 - 200, 525);
  multButton.size(100, 50);
  multButton.style("font-size", "30px");
  multButton.mousePressed(multButtonClicked);
  multButton.show();

  divButton.position(canvasWidth / 2 + 100, 525);
  divButton.size(100, 50);
  divButton.style("font-size", "30px");
  divButton.mousePressed(divButtonClicked);
  divButton.show();

  if (step <= 1) {
    backButton.position(50, 500);
    backButton.mousePressed(backButtonClicked);
    backButton.show();
  } else {
    undoButton.position(50, 500);
    undoButton.mousePressed(undoButtonClicked);
    undoButton.show();
  }

  restartButton.position(canvasWidth - 100, canvasHeight - 100);
  restartButton.mousePressed(restartButtonClicked);
  restartButton.show();

  pop();
}

function drawOperationInputScreen() {
  push();

  hideAllButtonsAndInputs();

  fill("white");
  rect(canvasWidth / 2, canvasHeight - 100, canvasWidth, 200);

  fill("black");
  textSize(18);

  if (isAddButtonClicked == true) {
    text("Add how much on both sides?", canvasWidth / 2, 425);
  }
  if (isSubButtonClicked == true) {
    text("Subtract how much on both sides?", canvasWidth / 2, 425);
  }
  if (isMultButtonClicked == true) {
    text("Multiply by what on both sides?", canvasWidth / 2, 425);
  }
  if (isDivButtonClicked == true) {
    text("Divide by what on both sides?", canvasWidth / 2, 425);
  }

  operationInput.position(canvasWidth / 2 - 50, canvasWidth / 2 + 50);
  operationInput.size(92, 46);
  operationInput.style("font-size", "30px");
  operationInput.show();

  backButton.position(50, 500);
  backButton.mousePressed(backButtonClicked);
  backButton.show();

  textSize(12);
  text("(press enter)", canvasWidth / 2 + 100, 475);

  pop();
}

function resetYPositionsOfTermsAndSignTo50() {
  for (var i = 0; i < terms.length; i++) {
    for (var j = 0; j < terms[i].length; j++) {
      terms[i][j].y = 50;
    }
  }
}

function addButtonClicked() {
  isAddButtonClicked = true;
  screenIndex++;
}

function subButtonClicked() {
  isSubButtonClicked = true;
  screenIndex++;
}

function multButtonClicked() {
  isMultButtonClicked = true;
  screenIndex++;
}

function divButtonClicked() {
  isDivButtonClicked = true;
  screenIndex++;
}

function undoButtonClicked() {
  if (step > 1) {
    leftYPos -= 2 * yIncrementForEachNewStep;
    rightYPos -= 2 * yIncrementForEachNewStep;
    step--;
    terms[step] = [];
    step--;
    terms[step] = [];
    steps.pop();
    signArrayOfYs.pop();
    if (lastOperation == "multiplication") {
      leftYPos += yIncrementForEachNewStep;
      rightYPos += yIncrementForEachNewStep;
      lastOperation = "";
    }
  }
}

function backButtonClicked() {
  if (currentScreen == "Inverse Operations Welcome Screen") {
    let countOfRightTerms = countRightTerms(0);
    rightXPos =
      canvasWidth / 2 +
      xIncrementForEachNewTerm +
      countOfRightTerms * xIncrementForEachNewTerm;
    resetYPositionsOfTermsAndSignTo50();
  }

  if (currentScreen == "Operation Input Screen") {
    isAddButtonClicked = false;
    isSubButtonClicked = false;
    isMultButtonClicked = false;
    isDivButtonClicked = false;

    operationInput.value("");
    terms[step] = [];
  }

  screenIndex--;
}

function restartButtonClicked() {
  resetCanvas();
  screenIndex = 3;
}

function incrementScreen() {
  hideAllButtonsAndInputs();
  if (currentScreen == "Right Term Adding Screen") incrementStep();
  if (currentScreen == "Operation Input Screen") screenIndex--;
  else screenIndex++;

  isAddButtonClicked = false;
  isSubButtonClicked = false;
  isMultButtonClicked = false;
  isDivButtonClicked = false;
}

function darkenButton() {
  yesButtonColor = color(25, 23, 200, 75);
}

function lightenButton() {
  yesButtonColor = color(25, 23, 200, 50);
}

function displaySteps() {
  push();
  textAlign(LEFT);
  if (steps.length > 0)
    for (let stepp of steps) text(stepp.name, stepp.x, stepp.y);

  pop();
}

function mouseWheel(event) {
  //move the square according to the vertical scroll amount
  if (screenIndex >= 5) {
    for (let termArray of terms) {
      for (let term of termArray) {
        term.y += event.delta;
      }
    }

    leftYPos += event.delta;
    rightYPos += event.delta;

    for (let index in signArrayOfYs) signArrayOfYs[index] += event.delta;

    for (let index in steps) steps[index].y += event.delta;
  }
}

function keyPressed() {
  if (
    currentScreen == "Left Term Adding Screen" ||
    currentScreen == "Right Term Adding Screen"
  ) {
    if (keyCode === 13 && rightInput.value() == "" && leftInput.value() != "")
      addLeftTerm();
    else if (
      keyCode === 13 &&
      leftInput.value() == "" &&
      rightInput.value() != ""
    )
      addRightTerm();
  }
  if (currentScreen == "Operation Input Screen") {
    if (keyCode === 13 && operationInput.value() != "") {
      if (isAddButtonClicked || isSubButtonClicked) addOrSubToBothSides();
      else if (isDivButtonClicked == true) divToBothSides();
      else if (isMultButtonClicked == true) multToBothSides();
      incrementScreen();
    }
  }
}

function countLeftTerms(index) {
  let countOfLeftTerms = 0;

  for (let term of terms[index]) {
    if (term.side == "left") countOfLeftTerms++;
  }
  return countOfLeftTerms;
}

function countRightTerms(index) {
  let countOfRightTerms = 0;

  for (let term of terms[index]) {
    if (term.side == "right") countOfRightTerms++;
  }
  return countOfRightTerms;
}

// stuff to hide

{
  function combineLikeTermsAddition() {
    if (step % 2 == 0) {
      let sumsOfLeftCoefficients = {};
      let sumsOfRightCoefficients = {};

      //initialize dictionary of of left term coefficients
      for (var arrayIndex = step - 2; arrayIndex < step; arrayIndex++) {
        for (var termIndex in terms[arrayIndex]) {
          if (terms[arrayIndex][termIndex].side == "left")
            sumsOfLeftCoefficients[terms[arrayIndex][termIndex].variable] = 0;
        }
      }

      //initialize dictionary of of right term coefficients
      for (let arrayIndex = step - 2; arrayIndex < step; arrayIndex++) {
        for (let termIndex in terms[arrayIndex]) {
          if (terms[arrayIndex][termIndex].side == "right")
            sumsOfRightCoefficients[terms[arrayIndex][termIndex].variable] = 0;
        }
      }

      //add left coefficients
      for (let arrayIndex = step - 2; arrayIndex < step; arrayIndex++) {
        for (let termIndex in terms[arrayIndex]) {
          if (terms[arrayIndex][termIndex].side == "left")
            sumsOfLeftCoefficients[terms[arrayIndex][termIndex].variable] +=
              terms[arrayIndex][termIndex].coefficient;
        }
      }

      //add right coefficients
      for (let arrayIndex = step - 2; arrayIndex < step; arrayIndex++) {
        for (let termIndex in terms[arrayIndex]) {
          if (terms[arrayIndex][termIndex].side == "right")
            sumsOfRightCoefficients[terms[arrayIndex][termIndex].variable] +=
              terms[arrayIndex][termIndex].coefficient;
        }
      }

      //push new terms to terms array
      for (var key in sumsOfLeftCoefficients) {
        for (var term of terms[step]) term.x -= xIncrementForEachNewTerm;
        var newTerm = new Term(
          sumsOfLeftCoefficients[key] + key,
          leftXPos,
          leftYPos,
          "left"
        );
        terms[step].push(newTerm);
      }

      for (let key in sumsOfRightCoefficients) {
        let newTerm = new Term(
          sumsOfRightCoefficients[key] + key,
          rightXPos,
          rightYPos,
          "right"
        );
        terms[step].push(newTerm);
        rightXPos += xIncrementForEachNewTerm;
      }
      signArrayOfYs.push(leftYPos);
      lastOperation = "addition/subtraction";
      incrementStep();
    }
  }

  function combineLikeTermsDivision() {
    if (step % 2 == 0) {
      // loop thru terms in index step - 2
      for (let term of terms[step - 2]) {
        // for each term, loop thru terms in index step - 1
        for (let divTerm of terms[step - 1]) {
          // if x values equal, then push new term with divided coefficient
          if (term.x == divTerm.x) {
            let newTerm = new Term(
              term.coefficient / divTerm.coefficient + term.variable,
              term.x,
              term.y + 2 * yIncrementForEachNewStep,
              term.side
            );
            terms[step].push(newTerm);
          }
        }
      }
      signArrayOfYs.push(leftYPos);
      lastOperation = "division";
      incrementStep();
    }
  }

  function combineLikeTermsMultiplication() {
    if (step % 2 == 0) {
      // loop thru terms in index step - 2
      for (let term of terms[step - 2]) {
        // for each term, loop thru terms in index step - 1
        for (let multTerm of terms[step - 1]) {
          // if x positions equal, then push new term with multiplied coefficient
          if (term.side == multTerm.side) {
            let newTerm = new Term(
              term.coefficient * multTerm.coefficient + term.variable,
              term.x,
              term.y + 1 * yIncrementForEachNewStep,
              term.side
            );
            terms[step].push(newTerm);
          }
        }
      }
      lastOperation = "multiplication";
      incrementStep();
      leftYPos -= yIncrementForEachNewStep; //this is causing a multiplication bug where if you undo a multiplication and then do another multiplication it displays term and () in wrong row
      rightYPos -= yIncrementForEachNewStep; //this one causing same problem^^
    }
  }

  function displayUpcomingAdditionOrSubtraction() {
    let negSign = "";
    if (isSubButtonClicked) negSign = "-";
    if (step % 2 == 1 && operationInput.value() != "") {
      terms[step][0] = new Term(
        negSign + operationInput.value(),
        leftXPos,
        leftYPos,
        "left"
      );
      terms[step][1] = new Term(
        negSign + operationInput.value(),
        rightXPos,
        rightYPos,
        "right"
      );
      if (step > 0 && operationInput.value() != "") {
        for (var term of terms[step - 1]) {
          if (
            terms[step][0].name != "" &&
            term.variable == terms[step][0].variable &&
            term.side == "left"
          ) {
            terms[step][0].x = term.x;
            terms[step][0].y = term.y + yIncrementForEachNewStep;
          } else if (
            terms[step][1].name != "" &&
            term.variable == terms[step][1].variable &&
            term.side == "right"
          ) {
            terms[step][1].x = term.x;
            terms[step][1].y = term.y + yIncrementForEachNewStep;
          }
        }
      }
    }
    if (operationInput.value() == "") terms[step] = [];
  }

  function displayUpcomingDivision() {
    if (step % 2 == 1) {
      for (var termIndex in terms[step - 1]) {
        if (terms[step - 1][termIndex].side == "left") {
          let newTerm = new Term(
            operationInput.value(),
            terms[step - 1][termIndex].x,
            terms[step - 1][termIndex].y + 50,
            "left"
          );
          newTerm.division = true;
          terms[step][termIndex] = newTerm;
        } else {
          let newTerm = new Term(
            operationInput.value(),
            terms[step - 1][termIndex].x,
            terms[step - 1][termIndex].y + yIncrementForEachNewStep,
            "right"
          );
          newTerm.division = true;
          terms[step][termIndex] = newTerm;
        }
      }
    }
  }

  function displayUpcomingMultiplication() {
    push();

    let countOfLeftTerms = countLeftTerms(step - 1);
    if (step % 2 == 1 && operationInput.value() != "" && isMultButtonClicked) {
      terms[step][0] = new Term(
        operationInput.value(),
        terms[step - 1][0].x - 60,
        leftYPos - yIncrementForEachNewStep,
        "left",
        terms[step - 1][0].x - 30,
        leftXPos + 30
      );
      terms[step][0].multiplication = true;

      let xPositionForLastParenthesis =
        terms[step - 1][terms[step - 1].length - 1].x + 30;
      terms[step][1] = new Term(
        operationInput.value(),
        xPositionForLastParenthesis - 30 + xIncrementForEachNewTerm,
        rightYPos - yIncrementForEachNewStep,
        "right",
        rightXPos - 30,
        xPositionForLastParenthesis
      );
      terms[step][1].multiplication = true;
    }
    if (operationInput.value() == "") terms[step] = [];

    pop();
  }

  function addOrSubToBothSides() {
    if (step % 2 == 1 && operationInput.value() != "") {
      let stepNumber = floor(step / 2 + 1);
      if (terms[step][0].coefficient < 0) {
        steps.push({
          name:
            stepNumber +
            ") Subtract " +
            terms[step][0].coefficient * -1 +
            terms[step][0].variable,
          x: 15,
          y: leftYPos,
        });
      } else if (terms[step][0].coefficient > 0) {
        steps.push({
          name: stepNumber + ") Add " + terms[step][0].name,
          x: 15,
          y: leftYPos,
        });
      }
      incrementStep();
      operationInput.value("");
      combineLikeTermsAddition();
    }
  }

  function divToBothSides() {
    if (step % 2 == 1 && operationInput.value() != "") {
      let stepNumber = floor(step / 2 + 1);
      steps.push({
        name: stepNumber + ") Divide by " + terms[step][0].name,
        x: 15,
        y: leftYPos,
      });
      incrementStep();
      operationInput.value("");
      combineLikeTermsDivision();
    }
  }

  function multToBothSides() {
    if (step % 2 == 1 && operationInput.value() != "") {
      let stepNumber = floor(step / 2 + 1);
      steps.push({
        name: stepNumber + ") Multiply by " + terms[step][0].name,
        x: 15,
        y: leftYPos - yIncrementForEachNewStep,
      });
      signArrayOfYs.push(leftYPos);
      incrementStep();
      operationInput.value("");
      combineLikeTermsMultiplication();
    }
  }

  function drawTermsAndOtherStuff() {
    for (var termArray of terms) {
      termArray.forEach((term) => term.drawTerm(colorDict));
    }

    push();

    textSize(30);
    strokeWeight(4);
    displayLineBlinkerAndEqualSigns();
    line(middleOfEquation, 60, middleOfEquation, canvasHeight);

    pop();

    if (
      currentScreen == "Inverse Operations Welcome Screen" ||
      currentScreen == "Operation Input Screen"
    ) {
      if (step > 1) displaySteps();
    }
  }

  function clearLeftTerms() {
    for (let i = terms[0].length - 1; i >= 0; i--) {
      if (terms[0][i].side == "left") {
        terms[0].splice(i, 1);
      }
    }
  }

  function clearRightTerms() {
    for (let i = terms[0].length - 1; i >= 0; i--) {
      if (terms[0][i].side == "right") {
        terms[0].splice(i, 1);
        rightXPos = canvasWidth / 2 + xIncrementForEachNewTerm;
      }
    }
  }

  function resetCanvas() {
    leftXPos = canvasWidth / 2 - xIncrementForEachNewTerm;
    rightXPos = canvasWidth / 2 + xIncrementForEachNewTerm;
    rightYPos = 50;
    leftYPos = 50;
    terms = [];
    step = 0;
    terms[step] = [];
    signsIndex = 0;
    colorDict = {};
    signArrayOfYs = [50];
    steps = [];
    steps[0] = {
      name: "Your Steps",
      x: 15,
      y: leftYPos - 30,
    };
    // addInput.value("");
    // multInput.value("");
    // divInput.value("");

    // hideOperationButtons();
    // showAddTermsAndDoneButtons();
  }

  function incrementStep() {
    purge();
    step++;
    terms[step] = [];
    rightXPos = canvasWidth / 2 + xIncrementForEachNewTerm;
    leftYPos += yIncrementForEachNewStep;
    rightYPos += yIncrementForEachNewStep;
  }

  function exampleProblem() {
    resetCanvas();

    isAddButtonClicked = false;
    isSubButtonClicked = false;
    isMultButtonClicked = false;
    isDivButtonClicked = false;

    leftInput.value("3x");
    addLeftTerm();
    leftInput.value("4");
    addLeftTerm();

    rightInput.value("5x");
    addRightTerm();
    rightInput.value("12");
    addRightTerm();

    createColorDict();

    signsIndex = 0;
    screenIndex = 5;
    done();
  }
  function hideOperationButtons() {
    // addInput.hide();
    // addOrSubButton.hide();
    // multInput.hide();
    multButton.hide();
    // divInput.hide();
    divButton.hide();
    combineButton.hide();
  }

  function saveEquation() {
    termsAndEverythingElseNeededForSave = [
      signsIndex,
      leftYPos,
      rightYPos,
      terms,
    ];
    saveJSON(termsAndEverythingElseNeededForSave, "My Equation");
  }

  function hideAllButtonsAndInputs() {
    leftButton.hide();
    rightButton.hide();
    doneButton.hide();
    resetButton.hide();
    signButton.hide();
    // exampleButton.hide();
    saveButton.hide();
    // addOrSubButton.hide();
    addButton.hide();
    subButton.hide();
    multButton.hide();
    divButton.hide();
    combineButton.hide();
    yesButton.hide();
    undoButton.hide();
    backButton.hide();
    clearAllTermsButton.hide();
    restartButton.hide();

    leftInput.hide();
    rightInput.hide();
    operationInput.hide();
  }

  function grid() {
    background(200);
    stroke(220);
    strokeWeight(1);
    for (let x = 0; x <= canvasWidth; x += gridSize) {
      for (let y = 0; y <= canvasHeight; y += gridSize) {
        line(x, 0, x, canvasHeight);
        line(0, y, canvasWidth, y);
      }
    }
  }

  function displayMousePosition() {
    textFont("menlo");
    textSize(14);
    noStroke();
    // text("x:" + mouseX, 25, 15);
    // text("y:" + mouseY, 100, 15);
    stroke("black"); // reset stroke
  }

  function loadEquation(file) {
    // resetCanvas();
    // signsIndex = file.data[0];
    // leftYPos = file.data[1];
    // rightYPos = file.data[2];
    // newTerms = file.data[3];
    // for (var i = 0; i < newTerms.length; i++) {
    //   terms[i] = new Term(
    //     newTerms[i].name,
    //     newTerms[i].x,
    //     newTerms[i].y,
    //     newTerms[i].side
    //   );
    // }
  }

  function showOperationButtons() {}

  function done() {
    if (step < 1) incrementStep();

    hideAddTermsAndDoneButtons();
    showOperationButtons();
  }

  function displayLineBlinkerAndEqualSigns() {
    push();

    strokeWeight(4);

    blinkerTimer = floor(millis() / 500);
    // text(blinkerTimer,50,50);

    if (blinkerTimer % 2 === 0) stroke("white");
    else noStroke();

    line(25, leftYPos - 12, 25, leftYPos + 12);

    pop();

    push();

    textSize(30);
    strokeWeight(1);

    for (let YPos of signArrayOfYs)
      text(signs[signsIndex], middleOfEquation, YPos);

    pop();
  }

  function createColorDict() {
    for (var i = 0; i < terms[step].length; i++) {
      thingy = terms[step][i].variable;
      colorDict[thingy] = "";
    }
    for (var j = 0; j < Object.keys(colorDict).length; j++) {
      colorDict[Object.keys(colorDict)[j]] = colors[j];
    }
  }

  function incrementSignsIndex() {
    signsIndex = (signsIndex + 1) % signs.length;
  }

  function showAddTermsAndDoneButtons() {
    leftInput.show();
    leftButton.show();
    rightInput.show();
    rightButton.show();
    doneButton.show();
  }

  function hideAddTermsAndDoneButtons() {
    leftInput.hide();
    leftButton.hide();
    rightInput.hide();
    rightButton.hide();
    doneButton.hide();
  }

  function purge() {
    for (let termArray of terms) {
      for (let i = termArray.length - 1; i >= 0; i--) {
        if (
          isNaN(termArray[i].coefficient) ||
          termArray[i].name == "" ||
          termArray[i].coefficient == 0
        ) {
          termArray.splice(i, 1);
        }
      }
    }
  }

  function addLeftTerm() {
    if (leftInput.value() != "") {
      for (var term of terms[step])
        if (term.side == "left") term.x -= xIncrementForEachNewTerm;
      var newTerm = new Term(leftInput.value(), leftXPos, leftYPos, "left");
      terms[step].push(newTerm);
      // leftXPos -= 60;
      // leftYPos += 60;
      leftInput.value("");
    }
  }

  function addRightTerm() {
    if (rightInput.value() != "") {
      var newTerm = new Term(rightInput.value(), rightXPos, rightYPos, "right");
      terms[step].push(newTerm);
      rightXPos += xIncrementForEachNewTerm;
      // rightYPos += 60;
      rightInput.value("");
    }
  }
}