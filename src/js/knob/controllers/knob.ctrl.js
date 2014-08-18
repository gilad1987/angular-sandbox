(function () {

    function KnobController($scope){
        this.knobModel = 30;
        this.knobOptions = {

        };

    }



    angular.module('youtube.controllers.module').controller('KnobController',['$scope', KnobController]);

})();