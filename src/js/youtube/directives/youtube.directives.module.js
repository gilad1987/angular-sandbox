(function () {

    angular.module('youtube.directives.module',[])

        .constant('YT_events',{
            'STOP':0,
            'PLAY':1,
            'PAUSE':2
        });
})();