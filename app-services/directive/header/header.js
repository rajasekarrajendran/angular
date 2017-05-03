'use strict';

angular.module('MyApp')
	.directive('header',function(){
		return {
        templateUrl:'app-services/directives/header/header.html',
        replace: true
    	}
	});


