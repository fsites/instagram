angular.module('instagramApp', ['ngAnimate'])
	.controller('MyCtrl', ['$scope', function($scope, $http) {

		//Submit function makes request
		$scope.onSubmit = function(tag) {


			//VARIABLES
			var tag = $scope.userInput;
			var url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent";

			//PARAMETERS
			var request = {
				'client_id': 'fe58bbb1a5724d1395b66b3f3728d11c',
				'count': 30,
				'callback': 'JSON_CALLBACK'
			};

			// REQUEST
			$http({
				method: 'JSONP',
			 	url: url,
			 	params: request
			})
			.success(function(result) {
				$scope.feedback = true;
				$scope.result = result;
				$scope.images = result.data;
				$scope.displayText = $scope.userInput;
				$scope.userInput = "";
				console.log("success");
			})
			.error(function() {
				$scope.loaded = false;
				$scope.errorMessage = true;
				console.log("request failed");
			});

		};

	}]);



//CLIENT ID	fe58bbb1a5724d1395b66b3f3728d11c
//CLIENT SECRET	3e8f8e8bc17747dea0f6b789270d60af