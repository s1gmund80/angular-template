
angular.module('videoService', ['ngResource'])
    .factory('videoProvider', ['$resource',
        function ($resource) {
            return $resource('https://api.backendless.com/v1/data/video/:id', {}, {
                query: { method: 'GET', params : '@params', isArray: false } ,
                queryDeep: { method: 'GET', params : {x:'@loadRelations'}, isArray: false } ,
                /**
                 *  si può invocare querydeep così: 
                 *          videoProvider.queryDeep({'loadRelations':'categoria'} , function (data){
                 *      e definendo l'url così: 
                 *          return $resource('https://api.backendless.com/v1/data/video?:x', {}, {
                 *      viene passato al posto della x il parametro loadRelations con il suo valore ricevuti 
                 *      in ingresso dall'oggetto composto in invocazione
                 */
                post : {method:'POST', params : '@params', isArray: false},
                getById : { method: 'GET', params : {id : '@id'}, isArray: false } ,
                deleteById : { method: 'DELETE', params : {id : '@id'}, isArray: false } ,
            });
        }]);
