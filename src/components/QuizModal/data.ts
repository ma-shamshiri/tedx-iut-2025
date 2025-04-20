import {
    campaignT1,
    // campaignT1,
    // campaignT1,
} from "../../assets";

export interface Option {
    text: string;
    type: number[];
}

export interface Question {
    id: number;
    text: string;
    options: Option[];
}

export const questions: Question[] = [
    {
        id: 1,
        text: "questionOne",
        options: [
            { text: "questionOneAnswerOne",   type: [0.7, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0] },
            { text: "questionOneAnswerTwo",   type: [0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0] },
            { text: "questionOneAnswerThree", type: [0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0] },
            { text: "questionOneAnswerFour",  type: [0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0] },
            { text: "questionOneAnswerFive",  type: [0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0] },
            { text: "questionOneAnswerSix",   type: [0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0] },
            { text: "questionOneAnswerSeven", type: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0] },
            { text: "questionOneAnswerEight", type: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0] },
        ],
    },
    {
        id: 2,
        text: "questionTwo",
        options: [
            { text: "questionTwoAnswerOne",   type: [0.7, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0] },
            { text: "questionTwoAnswerTwo",   type: [0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0] },
            { text: "questionTwoAnswerThree", type: [0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0] },
            { text: "questionTwoAnswerFour",  type: [0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0] },
            { text: "questionTwoAnswerFive",  type: [0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0] },
            { text: "questionTwoAnswerSix",   type: [0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0] },
            { text: "questionTwoAnswerSeven", type: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0] },
            { text: "questionTwoAnswerEight", type: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0] },
        ],
    },
    {
        id: 3,
        text: "questionThree",
        options: [
            { text: "questionThreeAnswerOne",   type: [0.7, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0] },
            { text: "questionThreeAnswerTwo",   type: [0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0] },
            { text: "questionThreeAnswerThree", type: [0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0] },
            { text: "questionThreeAnswerFour",  type: [0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0] },
            { text: "questionThreeAnswerFive",  type: [0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0] },
            { text: "questionThreeAnswerSix",   type: [0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0] },
            { text: "questionThreeAnswerSeven", type: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0] },
            { text: "questionThreeAnswerEight", type: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0] },
        ],
    },
    {
        id: 4,
        text: "questionFour",
        options: [
            { text: "questionFourAnswerOne",   type: [0.7, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0] },
            { text: "questionFourAnswerTwo",   type: [0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0] },
            { text: "questionFourAnswerThree", type: [0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0] },
            { text: "questionFourAnswerFour",  type: [0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0] },
            { text: "questionFourAnswerFive",  type: [0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0] },
            { text: "questionFourAnswerSix",   type: [0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0] },
            { text: "questionFourAnswerSeven", type: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0] },
            { text: "questionFourAnswerEight", type: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0] },
        ],
    },
    {
        id: 5,
        text: "questionFive",
        options: [
            { text: "questionFiveAnswerOne",   type: [1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0] },
            { text: "questionFiveAnswerTwo",   type: [0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0] },
            { text: "questionFiveAnswerThree", type: [0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0] },
            { text: "questionFiveAnswerFour",  type: [0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0] },
            { text: "questionFiveAnswerFive",  type: [0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0] },
            { text: "questionFiveAnswerSix",   type: [0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0] },
            { text: "questionFiveAnswerSeven", type: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0] },
            { text: "questionFiveAnswerEight", type: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0] },
        ],
    },
    {
        id: 6,
        text: "questionSix",
        options: [
            { text: "questionSixAnswerOne",   type: [1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0] },
            { text: "questionSixAnswerTwo",   type: [0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0] },
            { text: "questionSixAnswerThree", type: [0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0] },
            { text: "questionSixAnswerFour",  type: [0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0] },
            { text: "questionSixAnswerFive",  type: [0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0] },
            { text: "questionSixAnswerSix",   type: [0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0] },
            { text: "questionSixAnswerSeven", type: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0] },
            { text: "questionSixAnswerEight", type: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0] },
        ],
    },
    {
        id: 7,
        text: "questionSeven",
        options: [
            { text: "questionSevenAnswerOne",   type: [1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0] },
            { text: "questionSevenAnswerTwo",   type: [0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0] },
            { text: "questionSevenAnswerThree", type: [0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0] },
            { text: "questionSevenAnswerFour",  type: [0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0] },
            { text: "questionSevenAnswerFive",  type: [0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0] },
            { text: "questionSevenAnswerSix",   type: [0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0] },
            { text: "questionSevenAnswerSeven", type: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0] },
            { text: "questionSevenAnswerEight", type: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0] },
        ],
    },
];

export interface PersonalityElement {
    id: number;
    name: string;
    description: string;
    image: string;
}

export const personalityElements: PersonalityElement[] = [
    {
        id: 1,
        name: "resultOneName",
        description: "resultOneDescription",
        image: campaignT1,
    },
    {
        id: 2,
        name: "resultTwoName",
        description: "resultTwoDescription",
        image: campaignT1,
    },
    {
        id: 3,
        name: "resultThreeName",
        description: "resultThreeDescription",
        image: campaignT1,
    },
    {
        id: 4,
        name: "resultFourName",
        description: "resultFourDescription",
        image: campaignT1,
    },
    {
        id: 5,
        name: "resultFiveName",
        description: "resultFiveDescription",
        image: campaignT1,
    },
    {
        id: 6,
        name: "resultSixName",
        description: "resultSixDescription",
        image: campaignT1,
    },
    {
        id: 7,
        name: "resultSevenName",
        description: "resultSevenDescription",
        image: campaignT1,
    },
];
