var angular = require('angular');

angular.module('todoListApp', [])
	.controller('mainCtrl', function($scope, dataService) {

		$scope.todos = [];
		
		dataService.getTodos(function(response) {
			$scope.todos = response.data;
		});

		$scope.addTodo = function() {
			$scope.todos.push({ name: "New Todo", completed: false });
		}		

		$scope.saveTodo = function(todo) {
			dataService.saveTodo(todo);
		}

		$scope.deleteTodo = function(todo, index) {
			// if todo is a new todo without _id property do not make api call
			if (todo._id) {
				// make api call to remove it from database
				dataService.deleteTodo(todo);	
			}
			$scope.todos.splice(index, 1);	
		}

	})
	.service('dataService', function($http) {

		this.getTodos = function(callback) {
			$http.get('/api/todos')
				.then(callback);
		}

		this.saveTodo = function(todo) {
			// find out what kind of todo , is it a new todo or existing todo
			// if an exsiting todo, then it would have '_id' property otherwise not

			// new todo
			if (!todo._id) {
				$http.post('/api/todos', todo);
			} else {
				if (todo.edited === true) {
					$http.put('/api/todos/' + todo._id, todo);
				}
			}
		}

		this.deleteTodo = function(todo) {
			$http.delete('/api/todos/' + todo._id);
		}

	});