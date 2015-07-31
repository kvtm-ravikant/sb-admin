'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
	.directive('header',function(){
		return {
        templateUrl:'scripts/directives/header/header.html',
        restrict: 'E',
        replace: true,
    	}
	}).directive('guestHeader',function(){
		return {
        templateUrl:'scripts/directives/header/guestHeader.html',
        restrict: 'E',
        replace: true,
    	}
	});


