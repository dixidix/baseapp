function homeController(angular, app) {
    'use strict';

    'use angular template'; //jshint ignore:line
   
    app.controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = [];

    function homeCtrl(){
        var self = this; //jshint ignore:line

        function init(){
            self.greetings = "Hello App!";
        }
        init();
    }
}
module.exports = homeController;