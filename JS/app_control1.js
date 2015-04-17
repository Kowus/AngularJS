var app = angular.module('myapp',[]);		
app.controller('app_control', function($scope){
		$scope.employees = [{name:'James Bond',city:'New York'},
		{name:'Leonidas',city:'Sparta'},
		{name:'Jai Prakash',city:'Lucknow'}];
});