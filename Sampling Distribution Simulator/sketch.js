const ctx = document.getElementById("chart");
const ctx2 = document.getElementById("chart2");
// var rawPopulationData = [60, 61, 62, 63, 62, 66];
var rawPopulationData = [54, 51, 55, 51, 50, 52, 53, 55, 54, 52, 52, 50, 55, 54, 51, 51, 55, 53, 55, 52, 51, 53, 53, 53, 51, 53, 51, 52, 51, 50, 54, 52, 55, 52, 53, 51, 55, 52, 52, 52, 53, 50, 50, 52, 52, 54, 52, 53, 52, 54, 50, 54, 51, 51, 53, 51, 52, 51, 52, 53, 54, 51, 55, 51, 54, 54, 55, 51, 55, 50, 54, 53, 51, 55, 55, 53, 53, 50, 51, 53, 55, 52, 52, 51, 53, 55, 50, 54, 55, 54, 50, 55, 50, 53, 54, 54, 55, 51, 53, 53, 53, 54, 52, 51, 55, 54, 53, 54, 55, 52, 52, 51, 55, 53, 53, 51, 55, 52, 52, 54, 50, 51, 55, 51, 55, 55, 51, 55, 55, 55, 52, 53, 54, 51, 52, 54, 50, 50, 51, 54, 54, 52, 51, 51, 53, 55, 52, 50, 52, 52, 55, 51, 52, 55, 55, 52, 53, 51, 51, 53, 50, 50, 54, 50, 50, 55, 50, 50, 52, 53, 51, 50, 55, 52, 54, 51, 51, 54, 50, 54, 55, 53, 52, 54, 53, 55, 50, 53, 54, 52, 55, 51, 55, 54, 55, 53, 55, 52, 55, 55, 51, 53, 54, 55, 52, 50, 52, 52, 54, 52, 55, 50, 51, 52, 54, 53, 53, 55, 51, 55, 55, 50, 52, 55, 55, 52, 51, 51, 53, 51, 55, 53, 51, 54, 53, 55, 52, 54, 50, 52, 53, 53, 53, 55, 53, 54, 53, 54, 54, 50, 53, 53, 51, 54, 53, 52, 50, 55, 51, 53, 55, 51, 53, 55, 53, 51, 53, 51, 55, 55, 50, 52, 53, 53, 55, 50, 53, 55, 51, 51, 50, 54, 50, 52, 50, 53, 52, 53, 52, 51, 50, 55, 54, 55, 53, 55, 55, 50, 50, 50, 52, 53, 54, 52, 54, 53, 53, 53, 55, 50, 54, 55, 55, 53, 55, 52, 52, 55, 52, 52, 52, 52, 51, 54, 51, 50, 52, 51, 51, 53, 50, 54, 54, 50, 53, 54, 50, 52, 51, 50, 52, 53, 55, 54, 50, 51, 53, 50, 54, 54, 53, 54, 51, 52, 55, 55, 52, 54, 50, 55, 51, 55, 54, 55, 54, 54, 51, 50, 50, 53, 55, 50, 51, 52, 51, 54, 54, 51, 51, 54, 55, 50, 54, 53, 51, 55, 51, 52, 50, 55, 52, 51, 54, 53, 54, 51, 53, 53, 52, 53, 51, 51, 55, 55, 50, 50, 50, 50, 52, 54, 54, 50, 54, 55, 54, 52, 53, 53, 51, 51, 53, 54, 52, 51, 54, 53, 54, 54, 54, 51, 54, 51, 51, 52, 50, 55, 53, 50, 55, 54, 54, 52, 51, 54, 51, 55, 55, 55, 52, 53, 54, 51, 52, 50, 52, 53, 52, 55, 53, 55, 52, 52, 54, 52, 53, 53, 51, 52, 53, 50, 50, 53, 52, 52, 53, 54, 55, 54, 53, 52, 53, 50, 52, 53, 55, 53, 55, 54, 55, 54, 54, 52, 50, 52, 53, 50, 51, 53, 51, 55, 51, 54, 52, 53, 52, 50, 52, 51, 50, 54, 54, 53, 53, 51, 52, 55, 54, 50, 50, 51, 52, 52, 54, 53, 51, 53, 53, 54, 51, 55, 51, 52, 51, 54, 50, 52, 53, 52, 51, 53, 54, 52, 50, 55, 50, 52, 55, 51, 53, 54, 55, 52, 51, 53, 51, 52, 52, 50, 55, 51, 53, 54, 52, 50, 51, 50, 53, 51, 54, 50, 55, 52, 52, 53, 51, 51, 51, 55, 54, 54, 55, 54, 50, 52, 55, 55, 52, 51, 50, 53, 53, 54, 51, 52, 54, 51, 53, 55, 51, 50, 50, 52, 50, 51, 54, 50, 51, 55, 53, 52, 50, 53, 50, 55, 50, 53, 54, 51, 50, 54, 52, 53, 55, 54, 51, 51, 53, 51, 55, 53, 52, 54, 54, 51, 54, 55, 55, 52, 55, 53, 54, 55, 53, 51, 55, 54, 55, 53, 54, 51, 52, 53, 51, 50, 50, 53, 55, 52, 51, 54, 52, 52, 55, 50, 55, 53, 51, 54, 54, 51, 53, 53, 54, 52, 52, 52, 52, 51, 53, 50, 50, 51, 54, 54, 50, 52, 50, 50, 50, 51, 50, 52, 51, 55, 55, 55, 53, 51, 53, 50, 52, 55, 50, 50, 55, 55, 55, 55, 53, 51, 53, 55, 54, 51, 52, 55, 50, 50, 55, 52, 52, 53, 54, 50, 51, 52, 55, 52, 54, 50, 50, 53, 52, 54, 52, 52, 54, 51, 54, 52, 55, 52, 52, 55, 54, 54, 55, 51, 52, 55, 55, 55, 50, 51, 53, 53, 50, 52, 53, 52, 52, 53, 52, 51, 55, 54, 50, 52, 52, 55, 50, 54, 51, 54, 52, 55, 52, 55, 50, 54, 50, 53, 51, 53, 52, 53, 55, 53, 51, 52, 52, 53, 53, 54, 54, 54, 54, 54, 54, 52, 52, 51, 50, 50, 52, 55, 50, 54, 55, 55, 54, 53, 51, 50, 50, 50, 54, 51, 51, 54, 53, 53, 50, 55, 50, 51, 50, 55, 55, 54, 52, 53, 54, 52, 50, 54, 54, 53, 52, 54, 53, 54, 51, 50, 52, 54, 55, 51, 54, 51, 50, 52, 50, 53, 51, 51, 52, 55, 52, 51, 51, 50, 55, 50, 51, 50, 55, 52, 51, 50, 55, 52, 50, 52, 53, 50, 51, 51, 52, 55, 50, 52, 54, 52, 54, 52, 52, 55, 54, 52, 52, 50, 54, 55, 53, 54, 53, 52, 50, 55, 54, 53, 52, 54, 54, 53, 54, 52, 53, 54, 51, 52, 51, 52, 54, 52, 52, 51, 52, 55, 50, 52, 55, 52, 52, 52, 55, 51, 53, 55, 51, 53, 55, 50, 51, 54, 53, 55, 52, 55, 50, 50, 50, 55, 53, 51, 55, 51, 55, 50, 50, 50, 55, 55, 50, 53, 55, 52, 51, 50, 54, 52, 55, 54, 55, 52, 50, 50, 55, 54, 54, 50, 51, 52, 55, 54, 53, 52, 53, 55, 55, 53, 55, 50, 53, 52, 55, 54, 50, 51, 53, 52, 54, 52, 53, 51, 53, 51, 55, 54];
var parsedPopulationData = {};
var rawSamplingDistributionData = [];
var parsedSamplingDistributionData = {};

function setup() {
  var chart = createCanvas(400, 400, "chart");
  var chart2 = createCanvas(400, 400, "chart2");

  samplingDistribution(3, 2000);

  makePopulationChart();
  makeSDChart();
}

function draw() {
  // background(220);
}

function samplingDistribution(sampleSize, numberOfSamples) {
  for (var i = 0; i < numberOfSamples; i++) {
    var dataCopy = [...rawPopulationData];
    var sum = 0;

    for (var j = 0; j < sampleSize; j++) {
      index = floor(random(dataCopy.length));
      sum += dataCopy[index];
      dataCopy.splice(index, 1);
    }
    rawSamplingDistributionData.push(round(sum / sampleSize, 2));
  }

  return rawSamplingDistributionData;
}

function parsePopulationData() {
  for (var dataPoint of rawPopulationData) {
    parsedPopulationData[dataPoint] = 0;
  }

  for (var dataPoint of rawPopulationData) {
    for (var label of Object.keys(parsedPopulationData)) {
      if (dataPoint == label) {
        parsedPopulationData[label]++;
        break;
      }
    }
  }
  return parsedPopulationData;
}

function parseSamplingDistributionData() {
  for (var dataPoint of rawSamplingDistributionData) {
    parsedSamplingDistributionData[dataPoint] = 0;
  }

  for (var dataPoint of rawSamplingDistributionData) {
    for (var label of Object.keys(parsedSamplingDistributionData)) {
      if (dataPoint == label) {
        parsedSamplingDistributionData[label]++;
        break;
      }
    }
  }
  return parsedSamplingDistributionData;
}

function makePopulationChart() {
  // ctx.width = 30;
  // ctx.height = 30;
  const populationChart = new Chart(ctx, {
    type: 'bar',
    data: {
      // labels: [2, 3, 5, 12, 19],
      datasets: [{
        label: 'frequency',
        data: parsePopulationData(),
        borderWidth: 1
      }]
    },
    options: {
      elements: {
        pointStyle: 'circle'
      },
      scales: {
        x: {
          type: 'linear'
        },
        y: {
          type: 'linear',
          beginAtZero: true
        }
      },
      plugins: {
        title: {
          display: true,
          text: "Population Distribution",
          font: { size: "24px" }
        }
      }
    }
  });
}

function makeSDChart() {
  const SDChart = new Chart(ctx2, {
    type: 'bar',
    data: {
      datasets: [{
        label: 'frequency',
        data: parseSamplingDistributionData(),
        borderWidth: 1
      }]
    },
    options: {
      elements: {
        // pointStyle: 'circle'
      },
      scales: {
        x: {
          type: 'linear'
        },
        y: {
          type: 'linear',
          beginAtZero: true
        }
      },
      plugins: {
        title: {
          display: true,
          text: "Sampling Distribution",
          font: { size: "24px" }
        }
      }
    }
  });

  // SDChart.canvas.parentNode.style.height = '256px'
}
