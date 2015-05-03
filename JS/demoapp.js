(function(){
	var app = angular.module("basic",[]);

	var elements = [{name:"Hydrogen",AN:1},
					{name:"Helium",AN:2},
					{name:"Lithium",AN:3},
					{name:"Beryllium",AN:4},
					{name:"Boron",AN:5},
					{name:"Carbon",AN:6},
					{name:"Nitrogen",AN:7},
					{name:"Oxygen",AN:8}];

	app.controller('ShowElements', function($scope){
		$scope.elements = elements;
	});

	app.controller('JustAlert', function(){
		alert("Are you crazy... This is devil's code..");
	});
})();