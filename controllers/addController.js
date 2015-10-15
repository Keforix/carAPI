(function () {
    'use strict';

    angular.module('myApp').controller('addController', addController);

    addController.$inject = ['carFactory', '$location'];

    function addController(carFactory, $location) {
        var vm = this;

        vm.addCar = function (car) {
            carFactory.addCar(car)
                    .success(function (records) {
                        $location.path("#/home");
                    })
                    .error(function (err, status) {
                        vm.errorMsg = err;
                        vm.status = status;
                    });
        }
    }
})();