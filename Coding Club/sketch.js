let members = ["Ana", " Maria", "Daisy", "Emma", "Abram", "Ashley", "Milton", "Marco", "Evelyn", "Yuri", "Sasha", "Enrique", "Miguel", "Bravo"];
let r = 125;
let speed = 0.1;
let xoff = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);

  translate(width / 2, height / 2);
  noFill();
  circle(0, 0, 2 * r);
  fill("black");
  textAlign(CENTER, TOP);
  textSize(20)
  text("Martinez \n Rebollar \n Patel \n Burhanuddin", 0, -75);

  textAlign(CENTER, CENTER);
  for (var i = 0; i < members.length; i++) {
    let angle = map(i, 0, members.length, 0, TWO_PI) + speed;
    push();
    let radius = r + 25
    let noiseValue = map(noise(xoff), 0, 1, .9, 1.1)
    // let noiseValue = 1
    let x = noiseValue * radius * cos(angle);
    let y = noiseValue * radius * sin(angle);

    translate(x, y);
    rotate(angle + PI / 2);
    text(members[i], 0, 0);
    pop();
  }
  speed += 0.01;
  xoff += 0.1
}
