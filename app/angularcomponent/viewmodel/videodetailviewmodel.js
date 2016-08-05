
angular.module('starter.controllers').controller('videodetailviewmodel', function($scope,$rootScope,$routeParams,videoProvider){
    
    console.log('Dettaglio di : ' + $routeParams.name);

    var v = {
        "id" : $routeParams.name,    
    }
    
    videoProvider.getById( v, function (data){
        console.log(data);
        $scope.d = data;
    });


    var private = {
        deletevideomessage : function(){
            console.log("Cancellato un video");
        }
    }
 
    $scope.public = {
        chiedi : function(){
            alert("Questo è il dettaglio della pagina: " + $routeParams.name);
        },
        oppure : private.deletevideomessage
    }
});