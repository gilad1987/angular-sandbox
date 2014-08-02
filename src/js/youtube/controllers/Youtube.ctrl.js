(function () {

    function YouTubeController($scope, YT_events){

        this.yt = {
            height:500,
            width:500,
            videoid:'GYLU9leTAjE',
            autoplay:1
        };

//        this.sendControlEvent = function(YT_event){
//            $scope.$broadcast(YT_event);
//        }
    }

    angular.module('youtube.controllers.module').controller('YouTubeController',['$scope','YT_events', YouTubeController]);

})();