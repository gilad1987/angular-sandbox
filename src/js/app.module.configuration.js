(function () {

    function Config($stateProvider, $urlRouterProvider)
    {
        console.log('app');

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('index',{
                url:'/',
                views:{
                    'index':{
//                        templateUrl:'templates/pages/index.html',
                        controller:function(){
//                            console.log('cunstractor index');
                        }
                    }
                }
            })
    }

    angular.module('app').config(['$stateProvider','$urlRouterProvider',Config]);

})();