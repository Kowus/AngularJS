var app = angular.module('myapp',[]);		
app.controller('app_control', function($scope){
		$scope.employees = [{name:'Jai Prakash',city:'Lucknow'},
		{name:'James Bond',city:'New York'},
		{name:'Leonidas',city:'Sparta'}];
});