(function () {
    'use strict';

    angular.module('myApp').controller('constantsController', constantsController);

    constantsController.$inject = ['GLOBALS'];

    function constantsController(GLOBALS) {
        var vm = this;

        vm.appName = GLOBALS.appName;
        vm.appVersion = GLOBALS.appVersion;
    }
})();