var foodMart = angular.module("FoodMart",[]);

foodMart.controller("login",function($scope){
	console.log("inside LC");
	$scope.orderStyle={"display":"none"};
	$scope.error = {"display":"none"};
	$scope.email="";
	$scope.password="";
	console.log($scope);
	$scope.login = function(){
		if($scope.email == 'sam@yahoo.com' && $scope.password == 'orderfood'){
			console.log("success");
			$scope.error = {"display":"none"};
			$scope.loginStyle = {"display":"none"};
			$scope.orderStyle = {"display":"block"};
		}else{
			console.log("Invalid Credentials");
			$scope.error = {"display":"block"};
		}
	}
});


