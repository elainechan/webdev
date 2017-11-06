'use strict';

const BANK = [
    {
        question: 'Why do you need to specify doctype in an HTML document?',
        answer: 'To inform the browser on how to render the document' 
    },
    {
        question: 'What is the difference between window and document?',
        answer: 'a2'
    },
    {
        question: 'q3',
        answer: 'a3'
    },
    {
        question: 'q4',
        answer: 'a4'
    },
    {
        question: 'q5',
        answer: 'a5'
    },
    {
        question: 'q6',
        answer: 'a6'
    },
    {
        question: 'q7',
        answer: 'a7'
    },
    {
        question: 'q8',
        answer: 'a8'
    },
    {
        question: 'q9',
        answer: 'a9'
    },
    {
        question: 'q10',
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