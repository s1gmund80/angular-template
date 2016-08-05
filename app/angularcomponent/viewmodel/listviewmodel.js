
angular.module('starter.controllers').controller('listhomeviewmodel', function($scope,$rootScope,$routeParams,videoProvider,$location){
    console.log('Avviato list view model');
    

    if ($routeParams.name){
        $rootScope.namegiven = $routeParams.name;
    } else {
        $rootScope.namegiven = "no params";
    }
    
    videoProvider.query( function (data){
        console.log(data.data);
        $rootScope.data = data.data;
    });

    $scope.public = {
        detail : function(idvideo){
            console.log("vado su: "+"/video/"+idvideo);
            $location.path("/video/"+idvideo);
        }
    }

});