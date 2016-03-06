app.controller('empController', ['$scope', '$http', function($scope, $http){
	var url = "json/employee.txt";
	$http
	.get(url)
	.success(function(response){
		$scope.employees = response;
	});
	
	// change sorting order
	$scope.sort_by = function(newSortingOrder) {
		if ($scope.sortingOrder == newSortingOrder)
		$scope.reverse = !$scope.reverse;
		$scope.sortingOrder = newSortingOrder;
	};


}]);



