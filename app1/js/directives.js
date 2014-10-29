/*stock.directive("stockWidget", [function() {
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

stock.directive("simpleStockRepeat", [function() {
	return {
		restrict: 'A',
		transclude: 'element',
		link: function($scope, $element, $attrs, ctrl, $transclude) {
			var myArray = $scope.$eval($attrs.simpleStockRepeat);

			var container = angular.element('<div class="container"></div>');
			for (var i = 0; i < myArray.length; i++) {
				var instance = $transclude($scope.$new(), function(clonedElement, newScope) {
					newScope.currentIndex = i;
					newScope.stock = myArray[i];
				});
				container.append(instance);
			}
			$element.after(container);
		}
	};
}]);*/

angular.module("sliderApp")
.directive("noUiSlider", [function() {
	return {
		restrict: 'E',
		require: 'ngModel',
		link: function($scope, $element, $attrs, ngModelCtrl) {
			//console.log($element.noUiSlider);
			$element.noUiSlider({
				//Podemos não ter o valor inicial em ngModelCtrl ainda
				start: 0,
				range: {
					//$attrs por padrão nos dá valores de cadeia
					//nouiSlider espera números, assim converter
					min: Number($attrs.rangeMin),
					max: Number($attrs.rangeMax)
				}
			});
			//Quando as alterações de dados dentro AngularJS
			//Notificar a terceira directiva partido da mudança
			ngModelCtrl.$render = function() {
				alert(ngModelCtrl.$viewValue);
				$element.val(ngModelCtrl.$viewValue);
			};

			//Quando as alterações de dados fora do AngularJS
			$element.on('set', function(args) {
				alert($element.val());
				//Informe também o AngularJS que ele precisa atualizar a interface do usuário
				$scope.$apply(function() {
					//Definir os dados dentro AngularJS
					ngModelCtrl.$setViewValue($element.val());
				});
			});
		}
	};
}]);