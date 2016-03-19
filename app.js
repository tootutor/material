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

  $mdThemingProvider.definePalette('white', {
    '50': 'ffffff',
    '100': 'ffffff',
    '200': 'ffffff',
    '300': 'ffffff',
    '400': 'ffffff',
    '500': 'ffffff',
    '600': 'ffffff',
    '700': 'ffffff',
    '800': 'ffffff',
    '900': 'ffffff',
    'A100': 'ffffff',
    'A200': 'ffffff',
    'A400': 'ffffff',
    'A700': 'ffffff'
  });
  
  $mdThemingProvider.theme('ttoDark')
    .primaryPalette('black')
    .accentPalette('blue')
    .warnPalette('deep-orange')
    .dark();

	$mdThemingProvider.theme('ttoOrange')
    .primaryPalette('deep-orange')
    .accentPalette('teal')
    .warnPalette('orange');
});

ttoApp.controller('toolbarCtrl', ['$mdSidenav', function($mdSidenav) {
  var vm = this;
  vm.toggleSidenav = function (menuId) {
    $mdSidenav(menuId).toggle();
  }
}]);

ttoApp.controller('pageCtrl', [function() {
  var vm = this;
  vm.cardList = [
		{title: 'Title 001', name: 'Name 001'},
		{title: 'Title 002', name: 'Name 002'},
		{title: 'Title 003', name: 'Name 003'},
		{title: 'Title 004', name: 'Name 004'},
		{title: 'Title 005', name: 'Name 005'}
	];
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
