
angular.module('starter.controllers').controller('video_new_modelview', function($scope,$rootScope,videoProvider,$location){
    console.log('Creato nuovo video');
    

    var nuovoVideo = {
        "title" : "mio",
        "description" : "mia",
        "categoria": {
            "___class" : "categoria",
            "objectId" : "262EEF7F-3E2D-4672-FFF2-5EDD99C4DC00"
        }
    };

    videoProvider.post(nuovoVideo , function (data){
        console.log(data);
        $scope.data = data;
        $scope.idVideo = data.objectId;
        $rootScope.message = "Creato un nuovo video con id: " + $scope.idVideo;
        $location.path("/list");
    });

});