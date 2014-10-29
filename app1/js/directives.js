stock.directive("stockWidget", [function() {
	return {
		restrict: 'A',
		templateUrl: 'stock.html',
		transclude: true,
		scope: {
			stockData: '='
		},
		link: function($scope, $element, $attrs) {
			$scope.getChange = function(stock) {
				return Math.ceil(((stock.price - stock.previous) / stock.previous) * 100);
			};
		}
	}
}]);