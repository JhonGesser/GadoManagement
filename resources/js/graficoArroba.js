var data = {

  labels: ['12/18', '01/19', '02/19', '03/19', '04/19', '05/19', '06/19'],
  series: [
    [1220, 3030, 1428, 2314, 1427, 1543, 1428]
  ]
};

var config = {
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



new Chartist.Line('.ct-chart', data, config, responsiveOptions);
