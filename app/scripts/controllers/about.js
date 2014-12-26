'use strict';

/**
 * @ngdoc function
 * @name coffeeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the coffeeApp
 */
angular.module('coffeeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
