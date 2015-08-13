angular.module('instagramApp', ['ngAnimate'])
	.controller('MyCtrl', ['$scope', function($scope, $http) {

		var hashtag = $scope.userInput; 

		//Submit function makes request
		$scope.onSubmit = function(hashtag) {
	

			// URL
			var url = "https://api.instagram.com/v1/tags/" + hashtag + "/media/recent";

			// PARAMS
			var request = {
			 	client_id: 'fe58bbb1a5724d1395b66b3f3728d11c';
			 	callback: 'JSON_CALLBACK';
			 	count: 30
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