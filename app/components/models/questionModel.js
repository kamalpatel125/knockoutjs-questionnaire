(function(define){

    'use strict';

    define(['knockout', "components/models/commentsModel"], function(ko, Comment) {
       var  Question = function(q){
            this.RatingId = ko.observable(q.RatingId);
            this.QuestionText = q.QuestionText;
            this.QuestionId = q.Id;

            this.RatingId.subscribe(function(value) {
                q.RatingId = value;
            });

            this.Comments = _.map(q.Comments, function(c){
                return new Comment(c);
            });
        };

        return Question;
    });

})(define);
