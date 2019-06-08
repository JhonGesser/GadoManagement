var dataGraficoUm = {

  labels: ['12/18', '01/19', '02/19', '03/19', '04/19', '05/19', '06/19'],
  series: [[1201, 3003, 1485, 2143, 1473, 1543, 1483]]
};

var configGraficoUm = {
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


var dataGraficoDois = {

  labels: ['Rebanho 1', 'Rebanho 2', 'Rebanho 3', 'Rebanho 4', 'Rebanho 5', 'Rebanho 6'],
  series: [[121, 303, 185, 243, 143, 543]]
};

var configGraficoDois = {
  fullWidth: true,
  chartPadding: {
    right: 40
  },
  width: '100%',
  height: '100%',
}


var dataGraficoTres = {
  series: [5,3,4]
};

var sum = function(a, b) { return a + b };
var configGraficoTres = {
  fullWidth: true,
  chartPadding: {
    right: 40
  },
  width: '100%',
  height: '100%',
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  },
}





new Chartist.Line('#chart1', dataGraficoUm, configGraficoUm, responsiveOptions);

new Chartist.Bar('#chart2', dataGraficoDois, configGraficoDois, responsiveOptions);

new Chartist.Pie('#chart3', dataGraficoTres, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / dataGraficoTres.series.reduce(sum) * 100) + '%';
  }
}, responsiveOptions);
