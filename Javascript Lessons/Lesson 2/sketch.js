//declare global variables
let level1Button, level2Button, level3Button;
let levelSelector = 1;
let levelButtonsArray = [];
let currentLevelP;

// level 1 variables
let x_pos = 100;
let y_pos = 100;
let radius = 50;
let circle_speed = 1;

// level 2 variables


// level 3 variables
let x_pos_1, x_pos_2, y_pos_1, y_pos_2, r, ball_speed;

function setup() {
  //create canvas
  createCanvas(400, 400);

  //initialize variables
  x_pos_1 = 0;
  y_pos_1 = 0;

  x_pos_2 = width;
  y_pos_2 = 0;

  r = 50;

  ball_speed = 1;

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

  //draw circle
  fill("green");
  circle(x_pos, y_pos, radius);

  //increment y position to create motion
  y_pos = y_pos + circle_speed;
}

function drawLevel2() {
  //set background color
  background(220);

  //draw circle
  fill("green");
  circle(x_pos, y_pos, radius);

  //increment y position to create motion
  y_pos = y_pos + circle_speed;

  //turn circle around if it reaches x = 100 or x = 300
  if (y_pos > 300) circle_speed = circle_speed * -1;
  if (y_pos < 100) circle_speed = circle_speed * -1;
}

function drawLevel3() {
  //draw two circles
  fill("red");
  circle(x_pos_1, y_pos_1, r);
  fill("blue");
  circle(x_pos_2, y_pos_2, r);

  //increment x and y position to create motion
  x_pos_1 += ball_speed;
  y_pos_1 += ball_speed;

  x_pos_2 += -ball_speed;
  y_pos_2 += ball_speed;

  //turn circles around if they reach corners
  if (x_pos_1 > width) ball_speed *= -1;
  if (x_pos_1 < 0) ball_speed *= -1;
}


