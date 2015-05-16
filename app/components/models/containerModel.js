(function(define){

    'use strict';

    define(['knockout', "components/models/questionModel", "components/models/commentsModel" ],
        function(ko, Question, Comment) {
            var Container = function(c){
                this.Id = c.Id;
                this.Name = c.Name;
                this.RatingScaleId = c.RatingScaleId;
                this.DomainId = c.DomainId;
                this.DomainName = c.DomainName;
                this.Questions = _.map(c.Questions, function(q){
                    return new Question(q);
                });

                this.Comments = _.map(c.Comments, function(x){
                    return new Comment(x);
                });
            };

            return Container;
        });

})(define);
