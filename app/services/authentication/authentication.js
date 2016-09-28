function authenticationService(angular, app) {

	app.service('authenticationService', authenticationService);

	authenticationService.$inject = ['$q'];
	function authenticationService($q){
        this.checkAuth = function(){
            return true;
        };
	}
}
module.exports = authenticationService;