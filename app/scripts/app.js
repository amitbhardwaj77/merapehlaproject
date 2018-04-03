'use strict';

/**
 * @ngdoc overview
 * @name ngArchApp
 * @description
 * # ngArchApp
 *
 * Main module of the application.
 */
angular
  .module('ngArchApp', [
    'ui.router',
    'ui.bootstrap'
  ])
  .config(function($stateProvider,$locationProvider){
    $stateProvider
    .state('main',{
      url:'^/main',
      templateUrl: 'views/main.html',
      controller: 'mainCtrl'
    })
    .state('about',{
      url:'^/about',
      templateUrl: 'scripts/views/about.html',
      controller: 'AboutCtrl'
    });
$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
  });
  /*.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });*/

