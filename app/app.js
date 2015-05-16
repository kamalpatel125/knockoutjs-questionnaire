(function(require, document){

    'use strict';

    var requireConfig = {
        baseUrl: "app/",
        paths: {
            "bootstrap": "../bower_components/bootstrap/dist/js/bootstrap",
            "jquery": "../bower_components/jquery/dist/jquery",
            "knockout": "../bower_components/knockout/dist/knockout",
            "lodash": "../bower_components/lodash/lodash",
            "text": "../bower_components/requirejs/text",
            "questionnaireWidget" : "../app/components/questionnaire"
        },
        shim: {
            "lodash": {
                exports: "_"
            }
        }
    };

    require.config(requireConfig);

    require(['knockout', 'jquery', '../app/modules/home/js/questionnaireViewModel'], function(ko, $ , viewModel) {
        $(document).ready(function () {
            ko.components.register('questionnaires-widget', {
                require: '../app/components/questionnaire/questionnaire-widget'
            });

            ko.applyBindings(new viewModel());
        });
    });


})(require, document);


