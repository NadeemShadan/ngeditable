(function () {
    'use strict';
  
angular.module('ngEdit',[]).directive('ngEditable', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, ctrl) {
            // view -> model
            element.bind('blur', function () {
                scope.$apply(function () {
                    ctrl.$setViewValue(element.html());
                });
            });
            ctrl.$render = function () {
                element.html(ctrl.$viewValue);
            };
            ctrl.$render();
        }
    };
});
})();
  