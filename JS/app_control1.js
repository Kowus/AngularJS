var app = angular.module('myapp',[]);		
app.controller('app_control', function($scope){
		$scope.employees = [{name:'George Washington',city:'Washington'},
		{name:'Leonidas',city:'Sparta'},
		{name:'Asoka',city:'Ujjain'},
		{name:'Genghis Khan',city:'Mangolia'},
		{name:'Hitler',city:'Berlin'},
		{name:'Jai Prakash',city:'Lucknow'}];
});