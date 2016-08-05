
angular.module('starter.controllers').controller('video_delete_viewmodel', function($location,$scope,$rootScope,$routeParams,videoProvider){
    
    console.log('Cancello : ' + $routeParams.name);
    
    var v = {
        "id" : $routeParams.name,    
    }
    
    videoProvider.deleteById( v, function (data){
        console.log(data);
        $rootScope.message = "Cancellato nuovo video con id: " + $routeParams.name;
        $location.path("/list");
    });

});