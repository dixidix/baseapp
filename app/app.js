(function () {
	'use strict';
	var app = angular.module('baseapp', ['ui.router', 'ngSanitize'])
		.config(function ($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise("/");
			$stateProvider
				.state('home', { url: "/", templateUrl: "./dist/routes/home/home.template.html", data: { title: 'Home', requireAuth: false }, controller: "homeCtrl", controllerAs: "home" });
		})
		.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
			$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
				if (toState.data.requireAuth) {
					$state.go('home');
				}
			});
		}]);
	require('./routes/home/home.js')(angular, app);
})();
