// how do I go from restricting it to 3 attempts to unlimited attempts without making the whole damn thing crash? Why does do while loop not work??? The logic seems sound...

let canvasWidth = 400;
let canvasHeight = 400;
let img;
let colorOne;
let colorTwo;
let colorDict = {};
let colors;

function setup() {
  createCanvas(500, 500);
  colorDict.x = color(
    floor(random(0, 255)),
    floor(random(0, 255)),
    floor(random(0, 255))
  );
  colorDict.y = color(
    floor(random(0, 255)),
    floor(random(0, 255)),
    floor(random(0, 255))
  );
  colorDict.z = color(
    floor(random(0, 255)),
    floor(random(0, 255)),
    floor(random(0, 255))
  );
  colorDict.ax = color(
    floor(random(0, 255)),
    floor(random(0, 255)),
    floor(random(0, 255))
  );
  colorDict.zy = color(
    floor(random(0, 255)),
    floor(random(0, 255)),
    floor(random(0, 255))
  );
}

function draw() {
  // background("white");
  // console.log(
  //   deltaE(
  //     [colorOne._getRed(), colorOne._getGreen(), colorOne._getBlue()],
  //     [colorTwo._getRed(), colorTwo._getGreen(), colorTwo._getBlue()]
  //   )
  // );
}

// function getRandomColor() {
//   var isThisColorSufficientlyDifferent = true;
//   var r;
//   var g;
//   var b;
//   var opacity;

//   for (var tries = 0; tries < 3; tries++) {
//     r = floor(random(0, 255));
//     g = floor(random(0, 255));
//     b = floor(random(0, 255));
//     opacity = 100;

//     var rgbArrayOfRandomColor = [r, g, b];
//     var colorsInColorDict = Object.values(colorDict);

//     for (var i = 0; i < colorsInColorDict.length; i++) {
//       let red = colorsInColorDict[i]._getRed();
//       let green = colorsInColorDict[i]._getGreen();
//       let blue = colorsInColorDict[i]._getBlue();

//       let differenceInColors = deltaE(rgbArrayOfRandomColor, [
//         red,
//         green,
//         blue,
//       ]);

//       console.log(i, differenceInColors);

// fill(color(r, g, b, opacity));
// rect(50, 50, 50, 50);
// fill(colorsInColorDict[0]);
// rect(100, 50, 50, 50);
// fill(colorsInColorDict[1]);
// rect(150, 50, 50, 50);
// fill(colorsInColorDict[2]);
// rect(200, 50, 50, 50);
// fill("white");
// text(differenceInColors, 50, 100);

//       if (differenceInColors < 10) {
//         isThisColorSufficientlyDifferent = false;
//       }
//       console.log(isThisColorSufficientlyDifferent);
//       if (i == 2 && isThisColorSufficientlyDifferent == true)
//         return color(r, g, b, opacity);
//       else if (i == 2) isThisColorSufficientlyDifferent = true;
//     }
//   }
// }

function getRandomColor() {
  var isThisColorSufficientlyDifferent = false;
  var r;
  var g;
  var b;
  var randomColor = [];
  var opacity = 100;
  var distanceArray = [];
  colors = Object.values(colorDict);
  var threshold = 10;
  // console.log(colors);

  if (colors.length == 0) {
    r = floor(random(0, 255));
    g = floor(random(0, 255));
    b = floor(random(0, 255));
    // fill(color(r, g, b, opacity));
    // rect(50, 50, 50, 50);
    return color(r, g, b, opacity);
  }

  do {
    r = floor(random(0, 255));
    g = floor(random(0, 255));
    b = floor(random(0, 255));
    randomColor = [r, g, b];
    distanceArray = [];

    for (let i = 0; i < colors.length; i++) {
      let red = colors[i]._getRed();
      let green = colors[i]._getGreen();
      let blue = colors[i]._getBlue();
      let colorFromDict = [red, green, blue];
      // console.log("colorFromDict", colorFromDict);
      let distance = deltaE(randomColor, colorFromDict);
      distanceArray.push(distance);
      console.log(i, distance);

      let trueCount = 0;
      for (let dist of distanceArray) {
        if (dist > threshold) trueCount++;
      }

      if (trueCount == distanceArray.length) isThisColorSufficientlyDifferent = true;
      else isThisColorSufficientlyDifferent = false;
    }
  } while (isThisColorSufficientlyDifferent === false)

  fill(color(r, g, b, opacity));
  rect(50, 50, 50, 50);
  // fill(colors[0]);
  // rect(100, 50, 50, 50);
  // fill(colors[1]);
  // rect(150, 50, 50, 50);
  // fill(colors[2]);
  // rect(200, 50, 50, 50);

  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    rect(100 + 50 * i, 50, 50, 50);
  }

  return color(r, g, b, opacity);
}

function deltaE(rgbA, rgbB) {
  let labA = rgb2lab(rgbA);
  let labB = rgb2lab(rgbB);
  let deltaL = labA[0] - labB[0];
  let deltaA = labA[1] - labB[1];
  let deltaB = labA[2] - labB[2];
  let c1 = sqrt(labA[1] * labA[1] + labA[2] * labA[2]);
  let c2 = sqrt(labB[1] * labB[1] + labB[2] * labB[2]);
  let deltaC = c1 - c2;
  let deltaH = deltaA * deltaA + deltaB * deltaB - deltaC * deltaC;
  deltaH = deltaH < 0 ? 0 : sqrt(deltaH);
  let sc = 1.0 + 0.045 * c1;
  let sh = 1.0 + 0.015 * c1;
  let deltaLKlsl = deltaL / 1.0;
  let deltaCkcsc = deltaC / sc;
  let deltaHkhsh = deltaH / sh;
  let i =
    deltaLKlsl * deltaLKlsl + deltaCkcsc * deltaCkcsc + deltaHkhsh * deltaHkhsh;
  return i < 0 ? 0 : sqrt(i);
}

function rgb2lab(rgb) {
  let r = rgb[0] / 255,
    g = rgb[1] / 255,
    b = rgb[2] / 255,
    x,
    y,
    z;
  r = r > 0.04045 ? pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
  g = g > 0.04045 ? pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
  b = b > 0.04045 ? pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
  x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
  y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.0;
  z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;
  x = x > 0.008856 ? pow(x, 1 / 3) : 7.787 * x + 16 / 116;
  y = y > 0.008856 ? pow(y, 1 / 3) : 7.787 * y + 16 / 116;
  z = z > 0.008856 ? pow(z, 1 / 3) : 7.787 * z + 16 / 116;
  return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
}