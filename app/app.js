var angular = require('angular');

angular.module('todoListApp', [])
	.directive('helloWorld', function() {
		return {
			template: 'helloWorld directive',
			restrict: 'E'
		}
	});