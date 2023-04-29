//Illustrating Fourier transform with 3b1b inspiration
let ls_x, ls_y, ls_w, ls_sums_of_component_sinusoids;
let minimumSumOfSinusoids, maximumSumOfSinusoids;
let idx = 0;
let wind_c;
let wind;
let wind_max = 2; //
let x_max;
let y_signal_amp;
let windNumber;

function setup() {
  createCanvas(600, 400);
  background(220);

  slider = createSlider(0.1, 4 * TWO_PI, wind_max, 0.1);
  ls_x = [];
  ls_y = [];
  ls_w = [];
  ls_sums_of_component_sinusoids = [];
  x_max = 5 * TWO_PI;
  wind_c = createVector(width / 2, height / 2 + 100);
  y_signal_amp = height / 6; // determines horizontal line at 1/6 of height. used to offset the y values

  for (let i = 0; i < width; i++) {
    // map x values to input range and compute sin(x)
    ls_x[i] = i;
    let x = map(i, 0, width, 0, x_max);
    ls_y[i] = [sin(x) * 30, -y_signal_amp];
  }
}

function draw() {
  frameRate(30);
  background(200);

  // Check if changed
  wind_max = slider.value();
  stroke(200, 100, 100, 255); // red line
  strokeWeight(2);
  let x = map(wind_max, 0, x_max, 0, width);

  // Draw vertical lines that show the wind rate
  for (let i = 1; i <= int(width / x); i++) {
    line(x * i, 2 * y_signal_amp, x * i, 0);
  }
  populate_w(wind_max); //comment to hide the wind vectors

  // index for walking across width
  idx = idx % width;

  // Guide lines
  push();
  translate(0, 2 * y_signal_amp);
  stroke(0);
  strokeWeight(2);
  line(0, 0, width, 0);

  // Draw vectors walking across width
  strokeWeight(2);
  stroke(100, 50, 100);
  line(
    ls_x[idx],
    0,
    ls_x[idx],
    ls_y[idx].reduce((partialSum, a) => partialSum + a, 0)
  );

  strokeWeight(1);
  noFill();

  for (let i = 0; i < width; i++) {
    stroke(0);
    circle(
      ls_x[i],
      ls_y[i].reduce((partialSum, a) => partialSum + a, 0),
      3
    );
    stroke(0, 0, 0, 100);
    for (let y of ls_y[i]) {
      circle(ls_x[i], y, 2);
    }
  }

  pop();
  stroke(0);
  strokeWeight(1);
  noFill();
  beginShape();
  for (let i = 0; i < width; i++) {
    vertex(ls_w[i].x, ls_w[i].y);
  }
  endShape();

  strokeWeight(2);
  stroke(100, 50, 100);
  line(wind_c.x, wind_c.y, ls_w[idx].x, ls_w[idx].y);
  idx += 1;

  populateSumsOfSinusoids();
  drawTable();
}

function populate_w(val) {
  // Populate wind vectors
  for (let i = 0; i < width; i++) {
    let x = map(i, 0, width, 0, x_max);
    wind = wind_c.copy();
    wind.setMag(ls_y[i].reduce((partialSum, a) => partialSum + a, 0));
    wind.setHeading(map(x % val, 0, val, 0, TWO_PI));
    wind.add(wind_c);
    ls_w[i] = wind;
  }
}

// function to populate the list of sums of component sinusoids and find the min and max values
function populateSumsOfSinusoids() {
  for (let i = 0; i < width; i++) {
    ls_sums_of_component_sinusoids[i] = ls_y[i].reduce((partialSum, a) => partialSum + a, 0);
  }
  minimumSumOfSinusoids = min(ls_sums_of_component_sinusoids);
  maximumSumOfSinusoids = max(ls_sums_of_component_sinusoids);
}

// function to create table of that displays each winding cycle as a series of black and white pixels/rectangles
function drawTable() {
  push();

  let widthOfWind = map(wind_max, 0, x_max, 0, width); // width of each wind cycle in pixels
  let numberOfWinds = width / widthOfWind; // number of wind cycles in the width of the canvas in decimal form
  console.log("numberOfWinds: " + numberOfWinds, "widthOfWind: " + widthOfWind);
  let yOfPixel = 200; // y value of the first pixel

  for (let i = 0; i <= numberOfWinds; i++) {
    for (let j = floor(i * widthOfWind); j < (i + 1) * widthOfWind; j++) {
      let xForColor = j;

      let colorOfPixel = color(floor(map(ls_sums_of_component_sinusoids[xForColor], minimumSumOfSinusoids, maximumSumOfSinusoids, 0, 255)));

      stroke(colorOfPixel);
      strokeWeight(10);
      fill(colorOfPixel);

      let xOfPixel = j - i * widthOfWind;
      if (xForColor <= width) { point(xOfPixel + 100, yOfPixel); }
    }
    yOfPixel += 10;
  }

  pop();
}