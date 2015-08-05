angular.module('instagramApp', ['ngAnimate'])
	.controller('MyCtrl', ['$scope', function($scope, $timeout, $q, $http) {

		$scope.onSubmit = function(userInput, url) {
			function wait() {
				var defer = $q.defer();
				$timeout(function() {
					defer.resolve();
				}, 1000);
				return defer.promise;
			};

			//URL
			var url = "https://api.instagram.com/v1/tags/" + userInput + "/media/recent";
			// PARAMS
			var request = {
				client_id: "fe58bbb1a5724d1395b66b3f3728d11c";
				callback: "JSON_CALLBACK";
				count: 30;
			};

			$http({
				method: 'JSONP',
				url: url,
				params: request
			})
			.success(function(result) {
				$scope.result = result;
				$scope.images = $scope.result.data;
				$scope.displayText = $scope.userInput;
				$scope.userInput = "";
			})
			.error(function() {
				scope.loaded = false;
				$scope.errorMessage = "Sorry, we returned an error."
			}).

	


		}

	}]);



//CLIENT ID	fe58bbb1a5724d1395b66b3f3728d11c
//CLIENT SECRET	3e8f8e8bc17747dea0f6b789270d60af