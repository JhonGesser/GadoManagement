var data = {

  labels: ['12/18', '01/19', '02/19', '03/19', '04/19', '05/19', '06/19'],
  series: [
    [120, 300, 148, 214, 147, 154, 148],
    [240, 250, 157, 147, 120, 147, 95]

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
