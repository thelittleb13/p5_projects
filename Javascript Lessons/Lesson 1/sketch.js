// reference: https://p5js.org/reference/

//declare global variables
let level1Button, level2Button, level3Button;
let levelSelector = 1;
let levelButtonsArray = [];
let currentLevelP;

// level 1 variables

// level 2 variables


// level 3 variables


function setup() {
  //create the canvas
  createCanvas(400, 400);

  level1Button = createButton("Level 1");
  level1Button.mousePressed(() => {
    levelSelector = 1
    y_pos = 100;
  })
  levelButtonsArray.push(level1Button);

  level2Button = createButton("Level 2");
  levelButtonsArray.push(level2Button);
  level2Button.mousePressed(() => {
    levelSelector = 2
    y_pos = 100;
  })

  level3Button = createButton("challenge");
  levelButtonsArray.push(level3Button);
  level3Button.mousePressed(() => { levelSelector = "challenge" })

  currentLevelP = select("#currentLevel")
  currentLevelP.position(0, height + 10)
}

function draw() {
  //set background color
  background(220);

  currentLevelP.html(`Current level is ${levelSelector}`);

  switch (levelSelector) {
    case 1:
      drawLevel1();
      break;
    case 2:
      drawLevel2();
      break
    case "challenge":
      drawLevel3();
      break
  }
}

function drawLevel1() {
  //set background color
  background(220);

  fill("green");
  rect(0, height - 200, 200, 200); //green square

  fill("blue");
  rect(0, height - 150, 150, 150); //blue square

  fill("yellow");
  rect(0, height - 100, 100, 100); //yellow square

  fill("red");
  rect(0, height - 50, 50, 50); //red square
}

function drawLevel2() {

}

function drawLevel3() {

}