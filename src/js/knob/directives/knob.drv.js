(function () {

    function GtKnob()
    {
        return {
            restrict:'A',

            scope:{
                target:'@target'
            },

            compile:function(tElement, tAttrs, transclude){
                return{
                    post: function(scope, element, attrs, controller){

                        setTimeout(function(){
                            element.knob().trigger('change');
                        })

//                        function KnobAnimation(){
//                            element.animate({//animate to data targetValue
//                                value: scope.target
//                            }, {
//                                duration: 1000,
//                                easing: 'swing',
//                                progress: function () {
//                                    element.val(Math.round(element.val())).trigger('change')
//                                }
//                            });
//                        }
//
//                        KnobAnimation();
//                        var _attrs = attrs;
//                        attrs.$observe('target',function(){
//                            KnobAnimation();
//                        });
                    }
                }
            }
        }
    }

    angular.module('knob.directives.module').directive('knob',[GtKnob]);

})();
