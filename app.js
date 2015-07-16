angular.module('instagramApp', ['ngAnimate'])
	.controller('MyCtrl', ['$scope', function($scope) {

		$scope.onSubmit = function() {
			$scope.displayText = $scope.userInput;
			$scope.userInput = "";
		}

	}]);



//CLIENT ID	fe58bbb1a5724d1395b66b3f3728d11c
//CLIENT SECRET	3e8f8e8bc17747dea0f6b789270d60af