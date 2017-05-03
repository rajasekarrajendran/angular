var app = angular.module("MyApp", [ 
									'ui.router',
									'ngRoute',
									'ngAnimate',
									'ngSanitize', 
									'ngCookies',
									'ui.bootstrap' ]);
									
app.config(function($httpProvider, $stateProvider, $urlRouterProvider) {

	localStorage.clear();
	$httpProvider.defaults.headers.post = {};
	$stateProvider

	.state('login', {
		url : '/login',
		templateUrl : 'login/login.html',
		controller : 'LoginController',
		controllerAs : 'vm'
	})
	.state('home', {
		url : '/home',
		templateUrl : 'home/dashboard.html',
		controller : 'DashboardController',
		controllerAs : 'vm'
	})
	

	$urlRouterProvider.otherwise('/login');

}
);

app.run(function($rootScope, $location, $cookieStore, $http, $state) {
	// keep user logged in after page refresh
	
	$rootScope.globals = $cookieStore.get('globals') || {};
	if ($rootScope.globals.currentUser) {
		$http.defaults.headers.common['Authorization'] = 'Basic '
				+ $rootScope.globals.currentUser.authdata; // jshint
															// ignore:line
	}

	  $rootScope.$on('$locationChangeStart', function (event, next, current) {
          // redirect to login page if not logged in and trying to access a restricted page
          var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
          var loggedIn = $rootScope.globals.currentUser;
          if (restrictedPage && !loggedIn) {
              $location.path('/login');
          }
      });
});
