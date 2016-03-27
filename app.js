/* Test comment */
var ttoApp = angular.module('app', ['ngMaterial', 'ngRoute']);

ttoApp.config(function($mdThemingProvider, $routeProvider) {

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

  $routeProvider
    .when('/', {templateUrl: 'pages/dashboard/dashboard.html'})
    .when('/dashboard', {templateUrl: 'pages/dashboard/dashboard.html'})
    .otherwise({redirectTo: '/'});
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
		{title: 'Title 005', name: 'Name 005'},
		{title: 'Title 006', name: 'Name 006'},
		{title: 'Title 007', name: 'Name 007'},
		{title: 'Title 008', name: 'Name 008'},
		{title: 'Title 009', name: 'Name 009'},
		{title: 'Title 010', name: 'Name 010'},
		{title: 'Title 011', name: 'Name 011'},
	];
}]);

ttoApp.controller('leftNavCtrl', function() {
  var vm = this;
  vm.menuList = [
    {icon: 'filter_1', name: ' - Item 001'},
    {icon: 'filter_2', name: ' - Item 002'},
    {icon: 'filter_3', name: ' - Item 003'},
    {icon: 'filter_4', name: ' - Item 004'},
    {icon: 'filter_5', name: ' - Item 005'},
    {icon: 'filter_6', name: ' - Item 006'}
  ];
});

ttoApp.controller('timelineCtrl', [function() {
  var vm = this;
  vm.events = [{
    badgeClass: 'info',
    badgeIconClass: 'glyphicon-check',
    title: 'First heading',
    content: 'Some awesome content.'
  }, {
    badgeClass: 'warning',
    badgeIconClass: 'glyphicon-credit-card',
    title: 'Second heading',
    content: 'More awesome content.'
  }];
}]);