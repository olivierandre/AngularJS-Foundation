'use strict';

/**
 * @ngdoc function
 * @name coffeeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the coffeeApp
 */
angular.module('coffeeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
