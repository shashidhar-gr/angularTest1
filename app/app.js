var myApp = angular.module('myApp', []);

myApp.controller('simpleController', ['$scope', function($scope) {
	$scope.data = {};
	$scope.data.users = [{name: "shashidhar"}, {name: "kumar"}]
}]);