'use strict';

angular.module('todoListApp')
	.controller('mainCtrl', function($scope, dataService) {
		$scope.todos = [];
		
		dataService.getTodos(function(response) {
			$scope.todos = response.data;
		});

		$scope.addTodo = function() {
			$scope.todos.unshift({ name: "New Todo", completed: false });
		}		

		$scope.saveTodos = function() {

			// filter todos and create a new array that holds only edited todos
			var filteredTodo = $scope.todos.filter(function(todo) {
				if (todo.edited) return true;
			});

			// pass newly created array of edited todos to service to save
			dataService.saveTodos(filteredTodo)
				.finally($scope.resetTodos());
		}

		$scope.resetTodos = function() {
			$scope.todos.forEach(function(todo) {
				todo.edited = false;
			});
		}

		$scope.deleteTodo = function(todo, index) {
			// if todo is a new todo without _id property do not make api call
			if (todo._id) {
				// make api call to remove it from database
				dataService.deleteTodo(todo);
			} 

			$scope.todos.splice(index, 1);	
		}
	});