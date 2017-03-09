'use strict';

angular.module('todoListApp')	
	.service('dataService', function($http, $q) {

		this.getTodos = function(callback) {
			$http.get('/api/todos')
				.then(callback);
		}

		this.saveTodos = function(todos) {

			var queue = [];

			todos.forEach(function(todo) {
				
				var request;

				if (!todo._id) {
					request = $http.post('/api/todos', todo);
				} else {
					request = $http.put('/api/todos/' + todo._id, todo).then(function(response) {
						todo = response.data.todo;
						return todo;
					});
				}
				queue.push(request);
			});

			return $q.all(queue).then(function(response) {
				console.log("Saved " + todos.length + " todos");
			});
		}

		this.deleteTodo = function(todo, callback) {
			$http.delete('/api/todos/' + todo._id)
				.then(callback);
		}
	});