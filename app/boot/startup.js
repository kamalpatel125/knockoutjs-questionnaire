(function(define){

    'use strict';

    define(['knockout', 'lodash'], function (ko, lodash) {

        window._ = lodash;

        ko.components.register('questionnaires-widget', {
            require: '../app/components/questionnaire/questionnaire-widget'
        });

    });

})(define);