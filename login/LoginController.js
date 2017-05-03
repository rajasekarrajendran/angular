
(function () {
    'use strict';

    angular
        .module('MyApp')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', '$http', 'AuthenticationService', 'FlashService' , '$state', '$window','$scope' , '$document', '$rootScope'];
    function LoginController($location, $http, AuthenticationService, FlashService, $state ,  $window, $scope, $documet, $rootScope) {
    
        var vm = this;
        var response = {};
        
        var init = function(){
        	AuthenticationService.Logout();
             };
             init();
       
       
			$scope.login = function()  {
				
		           vm.dataLoading = true;
		           AuthenticationService.Login($scope.vm.username, $scope.vm.password, function (response) {
		               if (response.success) {
		            	   $rootScope.loggedIn = true;
		                   AuthenticationService.SetCredentials(vm.username, vm.password);
		                   console.log("Succesfully logged in"); 
		                   $state.go("home");
		                   
		               } else {
		            	   
		                   vm.dataLoading = false;
		                   $rootScope.loggedIn = false;
		                   console.log("Fail to Login")
		               }
		           });
		       };
 
 
 
 
 
 
}
})();
