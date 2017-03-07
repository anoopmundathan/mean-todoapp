var angular = require('angular');

angular.module('todoListApp', [])
	.controller('mainCtrl', function($scope, dataService) {
		
		$scope.helloConsole = dataService.helloConsole;

		$scope.todos = [
			{name: "Study JS"},
			{name: "Learn React"},
			{name: "Leasn SASS"}
		];
	})
	.service('dataService', function() {

		this.helloConsole = function() {
			console.log('from Service');
		}
	});