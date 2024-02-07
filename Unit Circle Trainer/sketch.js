let buttons, negButton, posButton, zeroButton, halfButton, rt2Button, rt3Button, oneButton
let heightOfButtonsRegion;
let radianAngles
let degreeAngles
let rnd, rndAngle
let modes = ["cosine", "sine"]

function setup() {
  createCanvas(500, 750);


  negButton = createButton("-")
  posButton = createButton("+")
  zeroButton = createButton("0")
  halfButton = createButton("1/2")
  rt2Button = createButton("sqrt2/2")
  rt3Button = createButton("sqrt3/2")
  oneButton = createButton("1")

  buttons = [negButton, posButton, zeroButton, halfButton, rt2Button, rt3Button, oneButton]

  for (let i in buttons) buttons[i].hide()

  heightOfButtonsRegion = height - width
  radianAngles = { "0": 0, "PI / 6": PI / 6, "PI / 4": PI / 4, "PI / 3": PI / 3, "PI / 2": PI / 2, "2 PI / 3": 2 * PI / 3, "3 PI / 4": 3 * PI / 4, "5 PI / 6": 5 * PI / 6, "PI": PI, "7 PI / 6": 7 * PI / 6, "5 PI / 4": 5 * PI / 4, "4 PI / 3": 4 * PI / 3, "3 PI / 2": 3 * PI / 2, "5 PI / 3": 5 * PI / 3, "7 PI / 4": 7 * PI / 4, "11 PI / 6": 11 * PI / 6 }
  degreeAngles = { "30 deg": PI / 6, "45 deg": PI / 4, "60 deg": PI / 3 }

  [PI / 6, PI / 4, PI / 3]

  rnd = floor(random(Object.values(radianAngles).length))
  rndAngle = -Object.values(radianAngles)[rnd]

}

function draw() {
  background(220);

  drawUnitCircle()
  drawButtons()
  drawAngle()
}

function drawUnitCircle() {
  push()
  translate(width / 2, width / 2)

  strokeWeight(0)
  stroke("black")
  circle(0, 0, width * .8)
  strokeWeight(4)
  point(0, 0)
  stroke("green")
  line(0, 0, cos(rndAngle) * width * .4, 0)
  line(0, 0, 0, sin(rndAngle) * width * .4)
  strokeWeight(1)
  line(-width * .4, 0, width * .4, 0)
  line(0, -width * .4, 0, width * .4)

  stroke("black")
  for (let i in radianAngles) {
    rotate(-radianAngles[i])
    text(i, width * .41, 0)
    rotate(radianAngles[i])
  }

  pop()
}

function drawButtons() {
  push()
  translate(0, width)

  strokeWeight(4)
  stroke("black")
  line(0, 0, width, 0)
  strokeWeight(1)
  textAlign(CENTER, CENTER)
  textSize(56)
  text("OR", width * 1 / 2, heightOfButtonsRegion * 2 / 8)
  textSize(20)
  text("OR", width * 4 / 20, heightOfButtonsRegion * 6 / 8)
  text("OR", width * 8 / 20, heightOfButtonsRegion * 6 / 8)
  text("OR", width * 12 / 20, heightOfButtonsRegion * 6 / 8)
  text("OR", width * 16 / 20, heightOfButtonsRegion * 6 / 8)

  negButton.position(width * 1 / 8, heightOfButtonsRegion * 1 / 8 + width)
  negButton.size(width * 2 / 8, heightOfButtonsRegion * 2 / 8)

  posButton.position(width * 5 / 8, heightOfButtonsRegion * 1 / 8 + width)
  posButton.size(width * 2 / 8, heightOfButtonsRegion * 2 / 8)

  zeroButton.position(width * 1 / 20, heightOfButtonsRegion * 5 / 8 + width)
  zeroButton.size(width * 2 / 20, heightOfButtonsRegion * 2 / 8)

  halfButton.position(width * 5 / 20, heightOfButtonsRegion * 5 / 8 + width)
  halfButton.size(width * 2 / 20, heightOfButtonsRegion * 2 / 8)

  rt2Button.position(width * 9 / 20, heightOfButtonsRegion * 5 / 8 + width)
  rt2Button.size(width * 2 / 20, heightOfButtonsRegion * 2 / 8)

  rt3Button.position(width * 13 / 20, heightOfButtonsRegion * 5 / 8 + width)
  rt3Button.size(width * 2 / 20, heightOfButtonsRegion * 2 / 8)

  oneButton.position(width * 17 / 20, heightOfButtonsRegion * 5 / 8 + width)
  oneButton.size(width * 2 / 20, heightOfButtonsRegion * 2 / 8)

  for (let i in buttons) {
    buttons[i].show()
    buttons[i].style("font-size", "15px")
  }

  // idk what to do here
  // buttons[0].style("font-size", "72px")
  // buttons[0].style("text-align", "center")
  // buttons[0].style("vertical-align", "initial")
  // buttons[1].style("font-size", "72px")

  translate(0, -width)
  pop()
}

function drawAngle() {
  push()
  translate(width / 2, width / 2)

  strokeWeight(4)
  stroke("black")
  rotate(rndAngle)
  line(0, 0, width * .4, 0)
  // arc(0, 0, width * .8, width * .8, 0, -rndAngle, PIE);

  pop()
}
