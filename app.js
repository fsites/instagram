angular.module('instagramApp', [])
	.controller('MyCtrl', ['$scope', function($scope, $http) {

		//Executes on Submit click
		$scope.onSubmit = function() {
			var tag = $scope.userInput;
			findImages(tag);
		};

		//Searches Instagram / makes request
		function findImages(tag) {

			//URL and API Config
			var clientId = 'fe58bbb1a5724d1395b66b3f3728d11c';
			var baseUrl = "https://api.instagram.com/v1";
			var request = "/tags/" + tag + "/media/recent";
			var url = baseUrl + request;

			//PARAMETERS
			var request = {
				'params': {
					'client_id': clientId,
					'count': 30,
					'callback': 'JSON_CALLBACK'
				}
			};

			// REQUEST
			$http({
				method: 'JSONP',
			 	url: url,
			 	params: request
			})
			.success(function(result) {
				$scope.feedback = true;
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