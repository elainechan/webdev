'use strict';

const BANK = [
    {
        question: 'HTML: What does "!DOCTYPE" do in an HTML document?',
        rightAnswer: 'It informs the browser on how to render the document.',
        wrongAnswers: [
            'It represents the root (top-level element) of an HTML document.',
            'It is the generic container for flow content and does not inherently represent anything', 
            'It represents the content of an HTML document.'
        ]

        
        //if userGuess === correctAnswer => correctanswerCount++
        //var correctAnswer = Bank[i].correctAnswer;
        
    },
    {
        question: 'DOM: what is the difference between window and document?',
        rightAnswer: '"Window" is the global object in a browser, and "document" is the main object of the rendered DOM.',
        wrongAnswers: [
         '"Window" is the main object of the rendered DOM, and "document" is the global object in a browser.',
         '"Window" is the area of a webpage visible to the user, and "document" is the global object in a browser.',
         '"Window" contains properties about the user display, and "document" is the area of a webpage visible to the user.'   
        ]

    },
    {
        question: 'DOM: what is the difference between "event propagation" and "event delegation"?',
        rightAnswers: 'Event bubbling: when an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.\nEvent delegation: allows attachment of an event listener to a parent element that will fire for all its current and future descendents.',
        wrongAnswers: [
            'Event bubbling: when an event happens on an element, it first runs the handlers on it, then all the way down on its children.\nEvent delegation: allow attachment of an event listener to a child element that will fire for all its parents.',
            'Event bubbling: when an event happens on an element, it runs for all its siblings.\nEvent delegation: allows attachment of an event listener to an element that will fire for all elements with the same class',
            'Event bubbling: refers to the node on which the event listener is registered on.\nEvent delegation: refers to the most deeply nested element that caused the event.'
        ]

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