ttoApp.controller('dashboardCtrl', ['$scope', function ($scope) {
  $scope.chart1 = {};
  $scope.chart1.options = {
      chart: {
          type: 'discreteBarChart',
          height: 450,
          margin : {
              top: 20,
              right: 20,
              bottom: 60,
              left: 55
          },
          x: function(d){ return d.label; },
          y: function(d){ return d.value; },
          showValues: true,
          valueFormat: function(d){
              return d3.format(',.4f')(d);
          },
          transitionDuration: 500,
          xAxis: {
              axisLabel: 'X Axis'
          },
          yAxis: {
              axisLabel: 'Y Axis',
              axisLabelDistance: 30
          }
      }
  };  
  $scope.chart1.data = [{
      key: "Cumulative Return",
      values: [
          { "label" : "A" , "value" : -29.765957771107 },
          { "label" : "B" , "value" : 0 },
          { "label" : "C" , "value" : 32.807804682612 },
          { "label" : "D" , "value" : 196.45946739256 },
          { "label" : "E" , "value" : 0.19434030906893 },
          { "label" : "F" , "value" : -98.079782601442 },
          { "label" : "G" , "value" : -13.925743130903 },
          { "label" : "H" , "value" : -5.1387322875705 }
      ]
  }];  

  $scope.chart2 = {};
  $scope.chart2.options = {
      chart: {
          type: 'pieChart',
          height: 450,
          donut: true,
          x: function(d){return d.key;},
          y: function(d){return d.y;},
          showLabels: true,

          pie: {
              startAngle: function(d) { return d.startAngle/2 -Math.PI/2 },
              endAngle: function(d) { return d.endAngle/2 -Math.PI/2 }
          },
          duration: 500,
          legend: {
              margin: {
                  top: 5,
                  right: 140,
                  bottom: 5,
                  left: 0
              }
          }
      }
  };
  $scope.chart2.data = [
      {
          key: "One",
          y: 5
      },
      {
          key: "Two",
          y: 2
      },
      {
          key: "Three",
          y: 9
      },
      {
          key: "Four",
          y: 7
      },
      {
          key: "Five",
          y: 4
      },
      {
          key: "Six",
          y: 3
      },
      {
          key: "Seven",
          y: .5
      }
  ];  
}]);