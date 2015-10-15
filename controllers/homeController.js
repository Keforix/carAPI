(function () {
    'use strict';

    angular.module('myApp').controller('homeController', homeController);

    homeController.$inject = ['carFactory'];

    function homeController(carFactory) {
        var vm = this;

        carFactory.getCars()
                    .success(function (records) {
                        vm.cars = records;
                    })
                    .error(function (err, status) {
                        vm.errorMsg = err;
                        vm.status = status;
                    });
    }
})();