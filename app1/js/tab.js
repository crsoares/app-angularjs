angular.module("stockMarketApp")
.directive("tab", [function() {
	return {
		restrict: 'E',
		transclude: true,
		template: '<div ng-show="selected" ng-transclude></div>',
		require: '^tabs',
		scope: true,
		link: function($scope, $element, $attrs, tabCtrl) {
			tabCtrl.registerTab($attrs.title, $scope);
		}
	};
}]);