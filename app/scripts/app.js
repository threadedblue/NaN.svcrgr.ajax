'use strict';

/**
 * @ngdoc overview
 * @name naNsvcrgrajaxApp
 * @description
 * # naNsvcrgrajaxApp
 *
 * Main module of the application.
 */
angular
  .module('naNsvcrgrajaxApp', [
    'ngCookies',
    'ngMessages',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
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
  });
