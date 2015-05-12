(function(require, document){

    'use strict';

    require(['knockout', 'jquery', 'questionnaireViewModel'], function(ko, $ , questionnaireViewModel) {
          $(document).ready(function () {
            ko.applyBindings(new questionnaireViewModel());
        });
    });

})(require, document);


