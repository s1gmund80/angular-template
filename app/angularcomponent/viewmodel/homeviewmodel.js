
angular.module('starter.controllers').controller('homeviewmodel', function($scope, myProvider){
    console.log('Avviato home view model');
    $scope.message = "sandokan";
    myProvider.sayHello();
});

