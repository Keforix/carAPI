(function () {
    'use strict';

    angular.module('myApp').controller('deleteController', deleteController);

    deleteController.$inject = ['carFactory', '$location'];

    function deleteController(carFactory, $location) {
        var vm = this;

        vm.deleteCar = function (id) {
            carFactory.deleteCar(id).success(function (record) {
						$location.path('#/home');
                    })
                    .error(function (err, status) {
                        vm.errorMsg = err;
                        vm.status = status;
                    });
        }
    }
})();