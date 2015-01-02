(function() {
	'use strict';

	var app = angular.module('coffeeServices');

	app.service('MainService', function() {

		var self = this;

		self.coucou = function() {
			console.log('test');
		};

	});

}());