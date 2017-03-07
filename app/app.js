var angular = require('angular');

angular.module('todoListApp', [])
	.controller('mainCtrl', function($scope, dataService) {
		
		dataService.getTodos(function(response) {
			$scope.todos = response.data;
		});

	})
	.service('dataService', function($http) {
		
		/*
		 * GET /api/todos - REST API call 
		 */
		this.getTodos = function(callback) {
			$http.get('/api/todos')
				.then(callback);
		}

	});