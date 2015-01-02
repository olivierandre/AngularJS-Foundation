(function() {
	'use strict';

	var module = angular.module('coffeeApp');

	module.controller('MainController', function($scope, $modal, $log) {

		$scope.items = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
		$scope.open = function() {

			var modalInstance = $modal.open({

				templateUrl: 'views/modal/modal.html',
				controller: 'ModalController',
				resolve: {
					items: function() {
						return $scope.items;
					}
				}
			});

			modalInstance.result.then(function(selectedItem) {
				$scope.selected = selectedItem;
			}, function() {
				$log.info('Modal dismissed at: ' + new Date());
			});
		};

	});

	module.controller('ModalController', function($scope, items, $modalInstance) {
		$scope.items = items;
		$scope.selected = {
			item: $scope.items[0]
		};

		$scope.ok = function() {
			$modalInstance.close($scope.selected.item);
		};

		$scope.cancel = function() {
			$modalInstance.dismiss('cancel');
		};


	});

}());