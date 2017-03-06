var angular = require('angular');

angular.module('todoListApp', [])
	.controller('mainCtrl', function($scope) {
		$scope.helloWorld = function() {
			console.log('Hello there, This is from mainCtrl');
		}
	})
	.controller('secondCtrl', function($scope) {
		$scope.secondHello = function() {

		}
	})
	.controller('siblingCtrl', function($scope) {
		$scope.hi = "Sibling Controller";
	});