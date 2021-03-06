'use strict';

var app = angular.module('certApp', ['ngRoute', 'route-segment', 'view-segment']);

app.config(function($routeSegmentProvider, $routeProvider) {
    
    // Configuring provider options
    
    $routeSegmentProvider.options.autoLoadTemplates = true;
    
    // Setting routes. This consists of two parts:
    // 1. `when` is similar to vanilla $route `when` but takes segment name instead of params hash
    // 2. traversing through segment tree to set it up
  
    $routeSegmentProvider
    
        .when('/', 'index')
        .when('/tab1', 'index.tab1')
        
        .segment('index', {
            templateUrl: '/partials/partial-index.html'
            // controller: 'MainCtrl'
        })
        .within()
            .segment('tab1', {
                templateUrl: '/partials/partial-tab1.html',
                controller: 'Tab1Ctrl'
            }) 
        .up()     
    $routeProvider.otherwise({redirectTo: '/'}); 
}) ;
