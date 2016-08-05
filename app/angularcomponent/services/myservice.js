
(function(){
'use strict';

angular.module('myservicesmodule',[]).factory('myProvider', function(){
    return {
        sayHello : function(){
            console.log('Hello bello!');
        }
    }
});

})();
