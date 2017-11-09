/*
'use strict';

const BANK = [
    {
        question: 'HTML: Why do you need to specify doctype in an HTML document?',
        rightAnswer: 'To inform the browser on how to render the document',
        wrongAnswers: ["xxx", "sss", "ll"]

        
        //if userGuess === correctAnswer => correctanswerCount++
        //var correctAnswer = Bank[i].correctAnswer;
        
    },
    {
        question: 'DOM: what is the difference between window and document?',
        answer: 'a2'
    },
    {
        question: 'DOM: what is "event bubble"?',
        answer: 'a3'
    },
    {
        question: 'CSS: what is the different between relative and absolute positioning?',
        answer: 'a4'
    },
    {
        question: 'CSS: what is a common way of aligning text to the center?',
        answer: 'a5'
    },
    {
        question: 'CSS: what is the difference between inline, block, and in-line block?',
        answer: 'a6'
    },
    {
        question: 'JS: Which of the following is a difference between "null" and "undefined"?',
        answer: 'a7'
    },
    {
        question: 'JS: Which of the following is a difference between "==" and "==="?',
        answer: 'a8'
    },
    {
        question: 'JS: How would you compare the equality between two arrays?',
        answer: 'a9'
    },
    {
        question: 'JS: object mutation',
        answer: 'a10'
    }
];

function renderStart() {
    console.log("`renderStart()` ran");
}

function renderNextQ() {
    console.log("`renderNextQ()` ran");
}

function showCurrQNum() {
    console.log("`showCurrQNum()` ran");
}

function showCurrScore() {
    console.log("`showCurrScore()` ran");
}

function showCurrResult() {
    console.log("`showCurrResult()` ran");
}

function handleChoice() {
    console.log("`handleChoice()` ran");
}
function handleFinish() {
    console.log("`handleFinish()` ran");
}
function renderResult() {
    console.log("`renderResult()` ran");
}

function handleQuiz() {
    renderStart();
    renderNextQ();
    showCurrQNum()
    showCurrScore()
    showCurrResult()
    handleChoice();
    handleFinish();
    renderResult();
}

$(handleQuiz);
*/