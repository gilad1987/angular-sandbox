(function () {

    function YouTubeController($scope, YT_events){

        this.yt = {
            height:100,
            width:100,
            videoid:'GYLU9leTAjE',
            autoplay:0
        };

        this.sendControlEvent = function(YT_event){
            console.log(YT_event);
            $scope.$broadcast(YT_event);
        }

        this.YT_events = YT_events;
    }

    angular.module('youtube.controllers.module').controller('YouTubeController',['$scope','YT_events', YouTubeController]);

})();