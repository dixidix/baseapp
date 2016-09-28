function navbarDirective(angular, app) {

    'use angular template'; //jshint ignore:line

    app.directive('navbar', navbar);
    navbar.$inject = [];
    function navbar() {
        return {
            restrict: "E",
            replace: true,
            templateUrl: './dist/components/navbar/navbar.template.html',
            link: link,
            controllerAs: 'navbar',
            controller: controller
        };

        function link(scope, element, attrs) {

        }
        function controller() {
            var self = this; // jshint:ignore

            function init() {

            }
            init();
        }
    }
}

module.exports = navbarDirective;