(function(define){

    'use strict';

    define(['knockout'], function(ko) {
        var Comment = function(c) {
            this.Response = ko.observable(c.Response);
            this.Prompt = c.Prompt;
            this.Id = function () {
                return c.Id;
            };

            this.Response.subscribe(function (value) {
                c.Response = value;
            });
        };

        return Comment;
    });

})(define);
