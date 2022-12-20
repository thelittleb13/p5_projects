function setup() {
  createCanvas(650, 550);
  overflow("hidden");
  background(50);
  writeTeX();
}

function writeTeX() {
  var a = 5;
  var b = 10;
  var name = "2/3x";
  console.log(`Fifteen is ${a + b}.`);
  let equation = createTeX(`{\\frac{${a}}{${b}}}`);

  equation.position(20, 175);
  equation.size(48);
  equation.stroke(color("rgb(135, 206, 235)"));
  equation.fill(color("rgb(135, 206, 235)"));

  equation.play("spinOut", 0, 2.5);

  for (var i of "word") {
    console.log(i);
  }
}
