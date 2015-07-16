angular.module('instagramApp', ['ngAnimate'])
	.controller('MyCtrl', ['$scope', function($scope) {

		$scope.reset = function() {
			$scope.test = "new text";
		};
		
	}]);