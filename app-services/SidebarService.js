(function () {
    'use strict';

    angular
        .module('MyApp')
        .factory('SidebarService', SidebarService);

    SidebarService.$inject = ['$http', '$cookieStore', '$rootScope', '$timeout'];
    function SidebarService($http, $cookieStore, $rootScope, $timeout) {
        
    
    
     return {
             LoadToggle: function() {
                return '<label class="checkbox-inline"> <input type="checkbox" checked data-toggle="toggle"></label>'
             }
s
    
    
    }
});