'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
  .module('sbAdminApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
  ])
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {
    
    $ocLazyLoadProvider.config({
      debug:false,
      events:true
    });

    $urlRouterProvider.otherwise('/login/guestHome');

    $stateProvider
        .state('login', {
            url:'/login',
            templateUrl: 'partials/login/main.html',
            resolve: {
                loadMyDirectives:function($ocLazyLoad){
                    return $ocLazyLoad.load(
                        {
                            name:'sbAdminApp',
                            files:[
                                'scripts/directives/header/header.js',
                                'scripts/directives/sidebar/sidebar.js',
                                'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                            ]
                        })

                }
            }
        })
        .state('login.guestHome', {
            url:'/guestHome',
            templateUrl: 'partials/login/guestHome.html'

        })
        .state('login.joinUs', {
            url:'/joinUs',
            templateUrl: 'partials/login/joinUs.html',
            controller:""

        })
    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'partials/dashboard/main.html',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name:'sbAdminApp',
                    files:[
                    'scripts/directives/header/header.js',
                    'scripts/directives/header/header-notification/header-notification.js',
                    'scripts/directives/sidebar/sidebar.js',
                    'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                    ]
                }),
                $ocLazyLoad.load(
                {
                   name:'toggle-switch',
                   files:["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                          "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                      ]
                }),
                $ocLazyLoad.load(
                {
                  name:'ngAnimate',
                  files:['bower_components/angular-animate/angular-animate.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['bower_components/angular-cookies/angular-cookies.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngResource',
                  files:['bower_components/angular-resource/angular-resource.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngSanitize',
                  files:['bower_components/angular-sanitize/angular-sanitize.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngTouch',
                  files:['bower_components/angular-touch/angular-touch.js']
                })
            }
        }
    })
      .state('dashboard.home',{
        url:'/home',
        controller: 'MainCtrl',
        templateUrl:'partials/dashboard/home.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              'scripts/controllers/main.js',
              'scripts/directives/timeline/timeline.js',
              'scripts/directives/notifications/notifications.js',
              'scripts/directives/chat/chat.js',
              'scripts/directives/dashboard/stats/stats.js'
              ]
            })
          }
        }
      })
      .state('dashboard.form',{
        templateUrl:'partials/form.html',
        url:'/form'

    }).state('initWizard',{
        templateUrl:'partials/init-wizard/firstLoginWizard.html',
        url:'/wizard',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                    {
                        name:'sbAdminApp',
                        files:[
                            'scripts/directives/header/header.js',
                            'scripts/directives/header/header-notification/header-notification.js',
                            'scripts/directives/sidebar/sidebar.js',
                            'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                        ]
                    }),
                    $ocLazyLoad.load(
                        {
                            name:'toggle-switch',
                            files:["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                                "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                            ]
                        }),
                    $ocLazyLoad.load(
                        {
                            name:'ngAnimate',
                            files:['bower_components/angular-animate/angular-animate.js']
                        })
                $ocLazyLoad.load(
                    {
                        name:'ngCookies',
                        files:['bower_components/angular-cookies/angular-cookies.js']
                    })
                $ocLazyLoad.load(
                    {
                        name:'ngResource',
                        files:['bower_components/angular-resource/angular-resource.js']
                    })
                $ocLazyLoad.load(
                    {
                        name:'ngSanitize',
                        files:['bower_components/angular-sanitize/angular-sanitize.js']
                    })
                $ocLazyLoad.load(
                    {
                        name:'ngTouch',
                        files:['bower_components/angular-touch/angular-touch.js']
                    })
            }
        }
    }).state('initWizard.step1',{
        templateUrl:'partials/init-wizard/step1.html',
        url:'/step1'
    }).state('dashboard.sampleForm',{
        templateUrl:'partials/SampleForm.html',
        url:'/sampleForm'

    }).state('dashboard.register',{
        templateUrl:'partials/jobseeker/register.html',
        url:'/register'

    }).state('dashboard.jobsearch',{
        templateUrl:'partials/jobseeker/jobsearch.html',
        url:'/jobsearch'

    })
      .state('dashboard.blank',{
        templateUrl:'partials/pages/blank.html',
        url:'/blank'
    })
      .state('dashboard.chart',{
        templateUrl:'partials/chart.html',
        url:'/chart',
        controller:'ChartCtrl',
        resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'chart.js',
              files:[
                'bower_components/angular-chart.js/dist/angular-chart.min.js',
                'bower_components/angular-chart.js/dist/angular-chart.css'
              ]
            }),
            $ocLazyLoad.load({
                name:'sbAdminApp',
                files:['scripts/controllers/chartContoller.js']
            })
          }
        }
    })
      .state('dashboard.table',{
        templateUrl:'partials/table.html',
        url:'/table'
    })
      .state('dashboard.panels-wells',{
          templateUrl:'partials/ui-elements/panels-wells.html',
          url:'/panels-wells'
      })
      .state('dashboard.buttons',{
        templateUrl:'partials/ui-elements/buttons.html',
        url:'/buttons'
    })
      .state('dashboard.notifications',{
        templateUrl:'partials/ui-elements/notifications.html',
        url:'/notifications'
    })
      .state('dashboard.typography',{
       templateUrl:'partials/ui-elements/typography.html',
       url:'/typography'
   })
      .state('dashboard.icons',{
       templateUrl:'partials/ui-elements/icons.html',
       url:'/icons'
   })
      .state('dashboard.grid',{
       templateUrl:'partials/ui-elements/grid.html',
       url:'/grid'
   })
  }]);

    
