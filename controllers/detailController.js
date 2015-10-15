(function () {
    'use strict';

    angular.module('myApp').controller('detailController', detailController);

    detailController.$inject = ['$routeParams', 'carFactory'];

    function detailController($routeParams, carFactory) {
        var vm = this;

        var id = $routeParams.id;

        carFactory.getCar(id).success(function (record) {
                        vm.car = record[0];
                    })
                    .error(function (err, status) {
                        vm.errorMsg = err;
                        vm.status = status;
                    });
    }
})();