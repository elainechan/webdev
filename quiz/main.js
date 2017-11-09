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
        rightAnswer: 'a2'
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

const state = {
    currentQ: -1,
    numRight: 0,
    numWrong: 0
};
// html DOM not pre-rendered as was in shopping list
function renderStart() {
    console.log("`renderStart()` ran");
    $("main").html(`Hit start to begin!`);
    $("nav").html(generateStartButton());
    $("#start-form").submit(event => { // button handler: Controller
        event.preventDefault();
        state.currentQ = 0;
        updateView();
        console.log(state);
    });
}

function generateStartButton() {
    let html = `<form id="start-form"><button type="submit" class="start-submit">Start</button></form>`;
    return html;
}

function renderQuestion() {
    console.log("`renderNextQ()` ran");
    $("main").html(`Question number ${state.currentQ + 1}`);
}

function generateQuestionForm() { // use map function instead
    // increment through the pages first, without business logic
    // BANK kv pairs, array of strings
    let html = `<form id="question-form"><button type="submit" class="start-submit">Start</button></form>`;
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

function updateView() {
    const totalNumOfQuestions = BANK.length;
    
    if(state.currentQ === -1) { 
        renderStart();
        return;
    }
    
    if(state.currentQ >= 0 && state.currentQ < BANK.length - 1) {
        renderQuestion();
        return;
    }
    
    showCurrQNum()
    showCurrScore()
    showCurrResult()
    handleChoice();
    handleFinish();
    renderResult();
}

$(updateView);

/*
Model: question, state
View: render, generate
Controller: update, button handlers
*/