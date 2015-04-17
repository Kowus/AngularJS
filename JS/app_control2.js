var app = angular.module('myapp',[]);
app.controller('app_control',['$scope','$http',function($scope,$http){
	$http.get("http://www.w3schools.com/angular/customers.php").success(function(response){
		$scope.employees = response.records;
	});
}]);