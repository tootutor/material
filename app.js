var ttoApp = angular.module('app', ['ngMaterial']);

ttoApp.config(function($mdThemingProvider) {

  $mdThemingProvider.definePalette('black', {
    '50': '000000',
    '100': '000000',
    '200': '000000',
    '300': '000000',
    '400': '000000',
    '500': '000000',
    '600': '000000',
    '700': '000000',
    '800': '000000',
    '900': '000000',
    'A100': '000000',
    'A200': '000000',
    'A400': '000000',
    'A700': '000000'
  });
  
  $mdThemingProvider.theme('ttoDark')
    .primaryPalette('black')
    .accentPalette('blue')
    .warnPalette('deep-orange')
    .dark();
});

ttoApp.controller('toolbarCtrl', ['$mdSidenav', function($mdSidenav) {
  var vm = this;
  vm.toggleSidenav = function (menuId) {
    $mdSidenav(menuId).toggle();
  }
}]);

ttoApp.controller('leftNavCtrl', function() {
  var vm = this;
  vm.menuList = [
    {icon: 'phone', name: 'Phone'},
    {icon: 'phone', name: 'Phone'},
    {icon: 'phone', name: 'Phone'},
    {icon: 'phone', name: 'Phone'},
    {icon: 'phone', name: 'Phone'},
    {icon: 'phone', name: 'Phone'}
  ];
});
