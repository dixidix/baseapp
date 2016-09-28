(function () {
	'use strict';
	var app = angular.module('baseapp', ['ui.router', 'ngSanitize'])
		.config(function ($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise("/");
			$stateProvider
				.state('home', { url: "/", templateUrl: "./dist/routes/home/home.template.html", data: { title: 'Home', requireAuth: false }, controller: "homeCtrl", controllerAs: "home" });
		})
		.run(['$rootScope', '$state', '$stateParams', 'authenticationService', function ($rootScope, $state, $stateParams, authenticationService) {
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
			$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
				if (toState.data.requireAuth && !authenticationService.checkAuth()) {
					$state.go('home');
				}
			});
		}]);
	require('./routes/home/home.js')(angular, app);
	require('./services/authentication/authentication.js')(angular, app);
	require('./components/navbar/navbar.js')(angular, app);
})();
