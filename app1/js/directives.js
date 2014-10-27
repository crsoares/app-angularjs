stock.directive("stockWidget", [function() {
	return {
		restrict: 'AE',
		templateUrl: 'stock.html',
		scope: {
			stockData: '=',
			stockTitle: '@',
			whenSelect: '&'
		},
		link: function($scope, $element, $attrs) {
			$scope.getChange = function(stock) {
				return Math.ceil(((stock.price - stock.previous) / stock.previous) * 100);
			};

			$scope.changeStock = function() {
				$scope.stockData = {
					name: 'Directive Stock',
					price: 500,
					previous: 200
				};
			};

			$scope.onSelect = function() {
				$scope.whenSelect({
					stockName: $scope.stockData.name,
					stockPrice: $scope.stockData.price,
					stockPrevious: $scope.stockData.previous
				});
			};
		}
	}
}]);