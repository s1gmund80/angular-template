'use strict';


angular.module('myApp', ['starter.controllers','ngRoute', 'myservicesmodule','videoService'])
    .config(['$routeProvider','$locationProvider','$httpProvider', 
        function($routeProvider,$locationProvider,$httpProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'angularcomponent/views/home.html',
                controller: 'homeviewmodel'
            }).when('/list',{
                templateUrl: 'angularcomponent/views/list.html',
                controller: 'listhomeviewmodel'
            }).when('/video/new',{
                templateUrl: 'angularcomponent/views/list.html',
                controller: 'video_new_modelview'
            }).when('/video/delete/:name',{
                templateUrl: 'angularcomponent/views/list.html',
                controller: 'video_delete_viewmodel'
            }).when('/video/:name',{
                templateUrl: 'angularcomponent/views/dettaglioVideo.html',
                controller: 'videodetailviewmodel'
            }).otherwise({redirectTo:'/'});

        $locationProvider.html5Mode(true);
        $httpProvider.defaults.headers.common['application-id'] = '6050D15B-E166-8545-FFE5-62F64E5ADF00';
        $httpProvider.defaults.headers.common['secret-key'] = '0481C635-8D4D-24A8-FF5F-91757D6CDA00'; 
        
        //$httpProvider.defaults.headers.common['application-id'] = '13A62EB6-ABEE-771D-FFB7-E8940A8CBF00';
        //      $httpProvider.defaults.headers.common['secret-key'] = '1C7B3D49-630D-BC94-FF1C-0D45F21BBA00';
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
        //  $httpProvider.defaults.headers.post['Authorization'] = 'Basic ii8YXVjmRlOscgCT0CIUQQ:_sdyWC6zSom11tPXzQKmfw';
        $httpProvider.defaults.headers.put['Content-Type'] = 'application/json';
        $httpProvider.defaults.headers.common['Application-Type'] = 'REST';
    }]);


angular.module('starter.controllers',[]);
