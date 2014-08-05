(function () {

    angular.module('youtube',[
        'youtube.services.module',
        'youtube.directives.module',
        'youtube.controllers.module'
    ])
        .config(function(){
            console.log('youtube');
        })

        .constant('YT_events',{
            'STOP':0,
            'PLAY':1,
            'PAUSE':2
        });



})();