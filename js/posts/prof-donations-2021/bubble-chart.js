Chart.plugins.unregister(ChartDataLabels);

let ctxBubble = document.getElementById('bubble-chart');

let scalingFactor = window.innerWidth * window.innerWidth / 30000000;

let years = ['2016', '2017', '2018', '2019', '2020'];
let amounts = [558708.66, 234947.23, 490962.44, 282376.8, 1504978.06];

let fontSize = 24;
if (window.matchMedia('(max-width: 580px)').matches) {
  fontSize = 12;
}

let data = {
  datasets: [
    {
      label: ['2016'],
      data: [
        {
          x: -0.75,
          y: -2,
          amount: amounts[0],
          r: Math.sqrt(amounts[0] * scalingFactor / Math.PI),
        },
      ],
      backgroundColor: '#FAE96B',
      borderColor: '#5c5c5c',
    },
    {
      label: ['2017'],
      data: [
        {
          x: 0.1,
          y: 2.4,
          amount: amounts[1],
          r: Math.sqrt(amounts[1] * scalingFactor / Math.PI),
        },
      ],
      backgroundColor: '#C977F5',
      borderColor: '#5c5c5c',
    },
    {
      label: ['2018'],
      data: [
        {
          x: -0.9,
          y: 1,
          amount: amounts[2],
          r: Math.sqrt(amounts[2] * scalingFactor / Math.PI),
        },
      ],
      backgroundColor: '#42D0F5',
      borderColor: '#5c5c5c',
    },
    {
      label: ['2019'],
      data: [
        {
          x: 1,
          y: 3,
          amount: amounts[3],
          r: Math.sqrt(amounts[3] * scalingFactor / Math.PI),
        },
      ],
      backgroundColor: '#76EB1D',
      borderColor: '#5c5c5c',
    },
    {
      label: ['2020'],
      data: [
        {
          x: 1,
          y: -0.6,
          amount: amounts[4],
          r: Math.sqrt(amounts[4] * scalingFactor / Math.PI),
        },
      ],
      backgroundColor: '#E6564A',
      borderColor: '#5c5c5c',
    },
  ],
};

let options = {
  title: {
    display: true,
    text: 'Yearly Political Donations by UCLA Professors, 2016-2020',
    fontSize: 16,
  },
  scales: {
    xAxes: [
      {
        display: false,
        ticks: {
          min: -5,
          max: 5,
        },
      },
    ],
    yAxes: [
      {
        display: false,
        ticks: {
          min: -3.5,
          max: 4.5,
        },
      },
    ],
  },
  tooltips: {
    callbacks: {
      label: function(tooltipItem, chart) {
        let money = amounts[tooltipItem.datasetIndex].toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 0,
        });
        let year = years[tooltipItem.datasetIndex];
        return `${year}: ${money}`;
      },
    },
  },
  legend: {
    display: false,
  },
  plugins: {
    datalabels: {
      font: {
        weight: 'bold',
        size: fontSize,
      },
      formatter: function(value, context) {
        return years[context.datasetIndex];
      },
    },
  },
};

let yearTotals = new Chart(ctxBubble, {
  type: 'bubble',
  data: data,
  options: options,
  plugins: [ChartDataLabels],
});

if (window.matchMedia('(max-width: 580px)').matches) {
  yearTotals.canvas.style = 'max-height:200px';
  yearTotals.options.maintainAspectRatio = false;
  yearTotals.update();
}
