(function () {
    'use strict';

    angular.module('myApp').factory('carFactory', carFactory);

    carFactory.$inject = ['$http', 'GLOBALS'];

    function carFactory($http, GLOBALS) {
        var factory = {};

        factory.getCars = function () {
            return $http({
                method: 'GET',
                url: GLOBALS.getCarsUrl
            });
        }

        factory.getCar = function (id) {
            return $http({
                method: 'GET',
                url: GLOBALS.getCarUrl + 'id=' + id
            });
        }

        factory.deleteCar = function (id) {
            return $http({
                method: 'GET',
                url: GLOBALS.deleteCarUrl + 'id=' + id
            });
        }

        factory.addCar = function (car) {
			return $http({
                method: 'POST',
                url: GLOBALS.addCarUrl + 'type=' + car.type
										+ '&omschrijving=' + car.omschrijving
										+ '&basisprijs=' + car.basisprijs
										+ '&verbruik=' + car.verbruik
										+ '&verkbelast=' + car.verkbelast
										+ '&inverkbelast=' + car.inverkbelast
            });
        }

        return factory;
    }
})();