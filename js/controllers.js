parking.controller("parkingCtrl", function($scope) {
	$scope.appTitel = "[Parkt] Parking";
	$scope.showAlert = true;
	$scope.alertTopic = 'Algo deu errado!';
	$scope.alertMessage = 'Você deve informar a placa ea cor do carro!';

	$scope.closeAlert = function() {
		$scope.showAlert = false;
	};

	$scope.cars = [];

	$scope.colors = ["White", "Black", "Blue", "Red", "Silver"];

	$scope.park = function(car) {
		car.entrance = new Date();
		$scope.cars.push(car);
		delete $scope.car; 
	}
});