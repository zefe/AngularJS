'use strict';

var carAppControllers = angular.module('carAppControllers', []);

carAppControllers.controller('carListCtrl', ['$scope',
	function($scope, Car){
		$scope.cars = [{
			"name":"New QuashQai",
			"snippet": "Made With you in mind to give you the highest quality"
		},
		{
			"name":"Veloster",
			"snippet" : "Sporty like a coupe, Roomy like a sedam."
		},
		{
			"name":"Navara",
			"snippet":"The Navara is all about freedom including freedom of choise."
		}];
	}]);