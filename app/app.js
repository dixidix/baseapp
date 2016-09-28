(function () {
	'use strict';
	var app = angular.module('baseapp', ['ui.router', 'ngSanitize'])
		.config(function ($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise("/");
			$stateProvider
				.state('home', { url: "/", templateUrl: "./dist/routes/home/home.template.html", data: { title: 'Home' }, controller: "homeCtrl", controllerAs: "home" })
		});
		app.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
				$rootScope.$state = $state;
				$rootScope.$stateParams = $stateParams;
			}]);
	require('./routes/home/home.js')(angular, app);
})();
