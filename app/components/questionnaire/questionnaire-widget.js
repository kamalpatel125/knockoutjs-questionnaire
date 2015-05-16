(function(define){

    'use strict';

    define(["knockout",
            "lodash",
            "text!questionnaireWidget/questionnaire.tpl.html",
            "components/models/containerModel"
        ],
        function (ko, _, questionnaireTemplate, Container) {

            function QuestionnaireComponentViewModelFn(params){
                var self = this;

                initialise();

                function initialiseModel(){
                    var questionnaire = _.first(params.questionnaires);
                    var questionContainers = _.map(questionnaire.QuestionContainers, function(c) {
                        return new Container(c);
                    });

                    self.questionnaires = {
                        RatingScales : questionnaire.RatingScales,
                        QuestionContainers : questionContainers
                    };
                }

                function initialiseProperties(){
                    self.steps = [];
                    self.step = 0;
                    self.disabledNextStep = true;
                    self.disabledSubmit = true;
                    self.selectedQuestionnaire = ko.observable();
                    self.questionsAndRatings = ko.observable();
                    self.commentsAndResponses = ko.observable();
                }

                function initialiseFunctions(){
                    /* Exposed Function */
                    self.isCurrentStep = isCurrentStepFn;
                    self.totalSteps = totalStepsFn;
                    self.setCurrentStep = setCurrentStepFn;
                    self.handleNext = handleNextFn;
                    self.handlePrevious = handlePreviousFn;
                    self.disabledPreviousStep = disabledPreviousStepFn;
                    self.setSelectedQuestionnaire = setSelectedQuestionnaireFn;
                }

                function initialise(){
                    //Data
                    initialiseModel();
                    initialiseProperties();
                    initialiseFunctions();

                    var ratingScale;

                    if (!_.isEmpty(self.questionnaires)) {
                        _.forEach(self.questionnaires.QuestionContainers, function(questionnaire) {
                            self.steps.push(questionnaire.Id);

                            ratingScale = _.findWhere(self.questionnaires.RatingScales, {
                                Id: questionnaire.RatingScaleId
                            });

                            if (ratingScale) {
                                questionnaire.ratings = ratingScale.Ratings;
                            }
                        });

                        self.setSelectedQuestionnaire(0);
                    }
                }

                function isCurrentStepFn(step) {
                    return self.step === step;
                }

                function totalStepsFn() {
                    return (self.steps.length - 1);
                }

                function setCurrentStepFn(stepIndex) {
                    self.step = stepIndex;
                    self.setSelectedQuestionnaire(stepIndex);
                }

                function handleNextFn() {
                    if (self.totalSteps() !== self.step) {
                        self.step = self.step + 1;
                        self.setSelectedQuestionnaire();
                        self.disabledNextStep = true;
                    }

                    if (self.totalSteps() === self.step) {
                        self.disabledSubmit = false;
                        self.disabledNextStep = true;
                    }
                }

                function handlePreviousFn() {
                    if (self.step !== 0) {
                        self.step = self.step - 1;
                        self.setSelectedQuestionnaire();
                        self.disabledSubmit = true;
                    }
                }

                function disabledPreviousStepFn() {
                    return (self.step === 0);
                }

                function setSelectedQuestionnaireFn(step) {
                    var questionnaireId;
                    if (step !== null && step !== undefined) {
                        self.step = step;
                        questionnaireId = self.steps[step];
                    } else {
                        questionnaireId = self.steps[self.step];
                    }

                    self.selectedQuestionnaireId = questionnaireId;
                    var selectedQuestionnaire = _.findWhere(self.questionnaires.QuestionContainers, {
                        Id: questionnaireId
                    });

                    self.selectedQuestionnaire(selectedQuestionnaire);
                }


                return self;
            }

            QuestionnaireComponentViewModelFn.prototype.submitQuestionnaire = function() {

                var self = this,
                    questionsAndRatings = [],
                    commentsAndResponses = [];

                _.forEach(self.questionnaires.QuestionContainers, function(questionnaire) {
                    _.forEach(questionnaire.Questions, function(question) {
                        var questionAndRating = {};
                        if (question.RatingId() > 0) {
                            questionAndRating.QuestionId = question.QuestionId;
                            questionAndRating.QuestionText = question.QuestionText;
                            questionAndRating.RatingId = question.RatingId();
                            questionsAndRatings.push(questionAndRating)
                        }
                    });

                    _.forEach(questionnaire.Comments, function(comment) {
                        var commentAndResponse = {};
                        commentAndResponse.CommentId = comment.Id;
                        commentAndResponse.Prompt = comment.Prompt;
                        commentAndResponse.Response = comment.Response();
                        commentsAndResponses.push(commentAndResponse)
                    });

                });

                self.questionsAndRatings(questionsAndRatings);
                self.commentsAndResponses(commentsAndResponses);

            };

            return {
                viewModel: QuestionnaireComponentViewModelFn,
                template: questionnaireTemplate
            };
        });
})(define);