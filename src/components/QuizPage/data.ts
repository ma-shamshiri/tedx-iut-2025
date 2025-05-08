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
            { text: "questionOneAnswerOne",   type: [1.0, 0.0, 0.0, 0.0, 0.0] },
            { text: "questionOneAnswerTwo",   type: [0.0, 1.0, 0.0, 0.0, 0.0] },
            { text: "questionOneAnswerThree", type: [0.0, 0.0, 1.0, 0.0, 0.0] },
            { text: "questionOneAnswerFour",  type: [0.0, 0.0, 0.0, 1.0, 0.0] },
            { text: "questionOneAnswerFive",  type: [0.0, 0.0, 0.0, 0.0, 1.0] },
        ],
    },
    {
        id: 2,
        text: "questionTwo",
        options: [
            { text: "questionTwoAnswerOne",   type: [1.0, 0.0, 0.0, 0.0, 0.0] },
            { text: "questionTwoAnswerTwo",   type: [0.0, 1.0, 0.0, 0.0, 0.0] },
            { text: "questionTwoAnswerThree", type: [0.0, 0.0, 1.0, 0.0, 0.0] },
            { text: "questionTwoAnswerFour",  type: [0.0, 0.0, 0.0, 1.0, 0.0] },
            { text: "questionTwoAnswerFive",  type: [0.0, 0.0, 0.0, 0.0, 1.0] },
        ],
    },
    {
        id: 3,
        text: "questionThree",
        options: [
            { text: "questionThreeAnswerOne",   type: [1.0, 0.0, 0.0, 0.0, 0.0] },
            { text: "questionThreeAnswerTwo",   type: [0.0, 1.0, 0.0, 0.0, 0.0] },
            { text: "questionThreeAnswerThree", type: [0.0, 0.0, 1.0, 0.0, 0.0] },
            { text: "questionThreeAnswerFour",  type: [0.0, 0.0, 0.0, 1.0, 0.0] },
            { text: "questionThreeAnswerFive",  type: [0.0, 0.0, 0.0, 0.0, 1.0] },
        ],
    },
    {
        id: 4,
        text: "questionFour",
        options: [
            { text: "questionFourAnswerOne",   type: [1.0, 0.0, 0.0, 0.0, 0.0] },
            { text: "questionFourAnswerTwo",   type: [0.0, 1.0, 0.0, 0.0, 0.0] },
            { text: "questionFourAnswerThree", type: [0.0, 0.0, 1.0, 0.0, 0.0] },
            { text: "questionFourAnswerFour",  type: [0.0, 0.0, 0.0, 1.0, 0.0] },
            { text: "questionFourAnswerFive",  type: [0.0, 0.0, 0.0, 0.0, 1.0] },
        ],
    },
    // {
    //     id: 5,
    //     text: "questionFive",
    //     options: [
    //         { text: "questionFiveAnswerOne",   type: [1.0, 0.0, 0.0, 0.0, 0.0] },
    //         { text: "questionFiveAnswerTwo",   type: [0.0, 1.0, 0.0, 0.0, 0.0] },
    //         { text: "questionFiveAnswerThree", type: [0.0, 0.0, 1.0, 0.0, 0.0] },
    //         { text: "questionFiveAnswerFour",  type: [0.0, 0.0, 0.0, 1.0, 0.0] },
    //         { text: "questionFiveAnswerFive",  type: [0.0, 0.0, 0.0, 0.0, 1.0] },
    //     ],
    // },
    // {
    //     id: 6,
    //     text: "questionSix",
    //     options: [
    //         { text: "questionSixAnswerOne",   type: [1.0, 0.0, 0.0, 0.0, 0.0] },
    //         { text: "questionSixAnswerTwo",   type: [0.0, 1.0, 0.0, 0.0, 0.0] },
    //         { text: "questionSixAnswerThree", type: [0.0, 0.0, 1.0, 0.0, 0.0] },
    //         { text: "questionSixAnswerFour",  type: [0.0, 0.0, 0.0, 1.0, 0.0] },
    //         { text: "questionSixAnswerFive",  type: [0.0, 0.0, 0.0, 0.0, 1.0] },
    //     ],
    // },
    {
        id: 7,
        text: "questionSeven",
        options: [
            { text: "questionSevenAnswerOne",   type: [1.0, 0.0, 0.0, 0.0, 0.0] },
            { text: "questionSevenAnswerTwo",   type: [0.0, 1.0, 0.0, 0.0, 0.0] },
            { text: "questionSevenAnswerThree", type: [0.0, 0.0, 1.0, 0.0, 0.0] },
            { text: "questionSevenAnswerFour",  type: [0.0, 0.0, 0.0, 1.0, 0.0] },
            { text: "questionSevenAnswerFive",  type: [0.0, 0.0, 0.0, 0.0, 1.0] },
        ],
    },
    {
        id: 8,
        text: "questionEight",
        options: [
            { text: "questionEightAnswerOne",   type: [1.0, 0.0, 0.0, 0.0, 0.0] },
            { text: "questionEightAnswerTwo",   type: [0.0, 1.0, 0.0, 0.0, 0.0] },
            { text: "questionEightAnswerThree", type: [0.0, 0.0, 1.0, 0.0, 0.0] },
            { text: "questionEightAnswerFour",  type: [0.0, 0.0, 0.0, 1.0, 0.0] },
            { text: "questionEightAnswerFive",  type: [0.0, 0.0, 0.0, 0.0, 1.0] },
        ],
    },
    {
        id: 9,
        text: "questionNine",
        options: [
            { text: "questionNineAnswerOne",   type: [1.0, 0.0, 0.0, 0.0, 0.0] },
            { text: "questionNineAnswerTwo",   type: [0.0, 1.0, 0.0, 0.0, 0.0] },
            { text: "questionNineAnswerThree", type: [0.0, 0.0, 1.0, 0.0, 0.0] },
            { text: "questionNineAnswerFour",  type: [0.0, 0.0, 0.0, 1.0, 0.0] },
            { text: "questionNineAnswerFive",  type: [0.0, 0.0, 0.0, 0.0, 1.0] },
        ],
    },
    // {
    //     id: 10,
    //     text: "questionTen",
    //     options: [
    //         { text: "questionTenAnswerOne",   type: [1.0, 0.0, 0.0, 0.0, 0.0] },
    //         { text: "questionTenAnswerTwo",   type: [0.0, 1.0, 0.0, 0.0, 0.0] },
    //         { text: "questionTenAnswerThree", type: [0.0, 0.0, 1.0, 0.0, 0.0] },
    //         { text: "questionTenAnswerFour",  type: [0.0, 0.0, 0.0, 1.0, 0.0] },
    //         { text: "questionTenAnswerFive",  type: [0.0, 0.0, 0.0, 0.0, 1.0] },
    //     ],
    // }
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
];
