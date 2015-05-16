(function(define){

    'use strict';

    define([], function() {
        var questionnaireViewModel = function (){
            var self = this;
            self.questionnairesData = [{
                "RatingScales": [
                    {
                        "Id": 305424,
                        "Ratings": [
                            {
                                "ShortName": "Not able to comment",
                                "Name": "Not able to comment",
                                "Description": "Not able to comment",
                                "Id": 305525,
                                "QuestionId": 0,
                                "NotApplicableRating": true
                            },
                            {
                                "ShortName": "Never",
                                "Name": "Never",
                                "Description": "Never",
                                "Id": 305526,
                                "QuestionId": 0,
                                "NotApplicableRating": false
                            },
                            {
                                "ShortName": "Rarely",
                                "Name": "Rarely",
                                "Description": "Rarely",
                                "Id": 305527,
                                "QuestionId": 0,
                                "NotApplicableRating": false
                            },
                            {
                                "ShortName": "Sometimes",
                                "Name": "Sometimes",
                                "Description": "Sometimes",
                                "Id": 305528,
                                "QuestionId": 0,
                                "NotApplicableRating": false
                            },
                            {
                                "ShortName": "Often",
                                "Name": "Often",
                                "Description": "Often",
                                "Id": 305529,
                                "QuestionId": 0,
                                "NotApplicableRating": false
                            },
                            {
                                "ShortName": "Consistently",
                                "Name": "Consistently",
                                "Description": "Consistently",
                                "Id": 305530,
                                "QuestionId": 0,
                                "NotApplicableRating": false
                            }
                        ]
                    },
                    {
                        "Id": 405424,
                        "Ratings": [
                            {
                                "ShortName": "Strongly Agree",
                                "Name": "Strongly Agree",
                                "Description": "Strongly Agree",
                                "Id": 405525,
                                "QuestionId": 0,
                                "NotApplicableRating": true
                            },
                            {
                                "ShortName": "Agree",
                                "Name": "Agree",
                                "Description": "Agree",
                                "Id": 405526,
                                "QuestionId": 0,
                                "NotApplicableRating": false
                            },
                            {
                                "ShortName": "Nuetral",
                                "Name": "Nuetral",
                                "Description": "Nuetral",
                                "Id": 405527,
                                "QuestionId": 0,
                                "NotApplicableRating": false
                            },
                            {
                                "ShortName": "Disagree",
                                "Name": "Disagree",
                                "Description": "Disagree",
                                "Id": 405528,
                                "QuestionId": 0,
                                "NotApplicableRating": false
                            },
                            {
                                "ShortName": "Strongly Disagree",
                                "Name": "Strongly Disagree",
                                "Description": "Strongly Disagree",
                                "Id": 405529,
                                "QuestionId": 0,
                                "NotApplicableRating": false
                            }
                        ]
                    }
                ],
                "QuestionContainers": [
                    {
                        "Id": "95fa4b86-36c7-41dc-a78c-6e8f6e11a89e",
                        "Name": "Always Learning",
                        "RatingScaleId": 305424,
                        "DomainId": 450252,
                        "DomainName": "Always Learning",
                        "Questions": [
                            {
                                "QuestionText": "Discusses data, key industry trends and conditions and understands the implications for their own business area",
                                "Id": 450846,
                                "RatingId": 0,
                                "RatingScaleId": 305424,
                                "Comments": []
                            },
                            {
                                "QuestionText": "Welcomes new ways of doing things",
                                "Id": 450847,
                                "RatingId": 0,
                                "RatingScaleId": 305424,
                                "Comments": []
                            },
                            {
                                "QuestionText": "Acts on feedback to assess strengths and weaknesses",
                                "Id": 450848,
                                "RatingId": 0,
                                "RatingScaleId": 305424,
                                "Comments": []
                            }
                        ],
                        "Comments": [
                            {
                                "Prompt": "Do you have any helpful  examples or comments?",
                                "Id": 451794,
                                "Response": ""
                            }
                        ]
                    },
                    {
                        "Id": "575a1ac6-def1-48f0-8ee6-4e8025d547a1",
                        "Name": "Ethical",
                        "RatingScaleId": 305424,
                        "DomainId": 450253,
                        "DomainName": "Ethical",
                        "Questions": [
                            {
                                "QuestionText": "Treats people honestly and with compassion regardless of level, personality or background",
                                "Id": 450849,
                                "RatingId": 0,
                                "RatingScaleId": 305424,
                                "Comments": []
                            },
                            {
                                "QuestionText": "Identifies and escalates ethical issues",
                                "Id": 450850,
                                "RatingId": 0,
                                "RatingScaleId": 305424,
                                "Comments": []
                            },
                            {
                                "QuestionText": "Follows through on commitments",
                                "Id": 450851,
                                "RatingId": 0,
                                "RatingScaleId": 305424,
                                "Comments": []
                            }
                        ],
                        "Comments": [
                            {
                                "Prompt": "Do you have any helpful  examples or comments?",
                                "Id": 451795,
                                "Response": ""
                            }
                        ]
                    },
                    {
                        "Id": "66564c2c-5c20-495c-8b58-b1b7e2b64dfa",
                        "Name": "General Comments",
                        "RatingScaleId": 0,
                        "DomainId": null,
                        "DomainName": null,
                        "Questions": null,
                        "Comments": [
                            {
                                "Prompt": "Where would it be most helpful to focus development??",
                                "Id": 451805,
                                "Response": ""
                            },
                            {
                                "Prompt": "Any other comments?",
                                "Id": 451807,
                                "Response": ""
                            }
                        ]
                    }
                ]
            }];
        };

        return questionnaireViewModel;
    });

})(define);

