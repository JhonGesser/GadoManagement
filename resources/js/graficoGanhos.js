var data = {
  labels: ['2/19', '1/19', '2/18', '1/18', '2/17', '1/17', '2/16'],
  series: [
    [54815, 68154, 54715, 74153, 48152, 15482, 12345],
    [26572, 31541, 26401, 15471, 40041, 6154, 5145]
  ]
}

var config = {
  seriesBarDistance: 10,
  reverseData: true,
  horizontalBars: true,
  axisY: {
    offset: 70
  },
  fullWidth: true,
  chartPadding: {
    right: 40
  },
  width: '100%',
  height: '100%',
}

var responsiveOptions = [
  ['screen and (max-width: 640px)', {
    width: '100%',
    height: '100%'

  }]
];


new Chartist.Bar('.ct-chart', data, config, responsiveOptions);
