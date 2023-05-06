let weatherJSON;
let APIPath = "https://api.openweathermap.org/data/2.5/weather?";
let cityInput;
let city;
let APIKey = "appid=24575532a4aceb03779e4188d16b7993";
let url;
let units = "&units=metric";


function setup() {
  createCanvas(400, 400);

  cityInput = createInput("London");
  cityInput.position(0, 0);
}

function draw() {
  background(220);

  push();

  textAlign(CENTER);
  if (weatherJSON) {
    text(weatherJSON.name + "\n" + weatherJSON.weather[0].description + "\n rain 1h " + weatherJSON.rain["1h"] + "\n wind speed " + weatherJSON.wind.speed + "\n wind deg " + weatherJSON.wind.deg, width / 2, 100);
  };

  pop();
}

function keyPressed() {
  if (keyCode === ENTER && cityInput.value() != "") {
    city = "&q=" + cityInput.value();
    cityInput.value("");
    url = APIPath + APIKey + city + units;
    loadJSON(url, gotData);
  }
}

function gotData(data) {
  weatherJSON = data;
}