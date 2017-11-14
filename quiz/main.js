'use strict';

const BANK = [
    {
        question: 'HTML: What does "!DOCTYPE html" do in an HTML document?',
        rightAnswer: 'It informs the browser on how to render the document.',
        answers: [
            'It informs the browser on how to render the document.',
            'It represents the root (top-level element) of an HTML document.',
            'It refers to the generic container for flow content in an HTML document.', 
            'It represents the document object of an HTML document.'
        ]
        //if userGuess === correctAnswer => correctanswerCount++
        //var correctAnswer = Bank[i].correctAnswer;
    },
    {
        question: 'DOM: what is the difference between window and document?',
        rightAnswer: '"Window" is the global object in a browser, and "document" is the main object of the rendered DOM.',
        answers: [
         '"Window" is the main object of the rendered DOM, and "document" is the global object in a browser.',
         '"Window" is the area of a webpage visible to the user, and "document" is the global object in a browser.',
         '"Window" contains properties about the user display, and "document" is the area of a webpage visible to the user.',
         '"Window" is the global object in a browser, and "document" is the main object of the rendered DOM.'
        ]
    },
    {
        question: 'DOM: What is the difference between "event propagation" and "event delegation"?',
        rightAnswer: 'Event bubbling: when an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.\nEvent delegation: allows attachment of an event listener to a parent element that will fire for all its current and future descendents.',
        answers: [
            'Event bubbling: when an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.\nEvent delegation: allows attachment of an event listener to a parent element that will fire for all its current and future descendents.',
            'Event bubbling: when an event happens on an element, it first runs the handlers on it, then all the way down on its children.\nEvent delegation: allow attachment of an event listener to a child element that will fire for all its parents.',
            'Event bubbling: when an event happens on an element, it runs for all its siblings.\nEvent delegation: allows attachment of an event listener to an element that will fire for all elements with the same class',
            'Event bubbling: refers to the node on which the event listener is registered on.\nEvent delegation: refers to the most deeply nested element that caused the event.'
        ]
    },
    {
        question: 'CSS: in the box model, what is the difference between "padding" and "margin"?',
        rightAnswer: 'Padding represents the space between the box and the border.\nMargin represents the space between the border and the other content that interact with the box.',
        answers: [
            'Padding represents the space between the box and the border.\nMargin represents the space between the border and the other content that interact with the box.',
            'Padding represents the space between the border and the other content that interact with the box.\nMargin represents the space between the box and the border.',
            'Padding does not affect the size of the box but it affects the other content that interact with the box.\nMargin directly determines the size of the box through specifying the size of the space between the box and the border.',
            'Padding is on the outside of block elements.\nMargin is on the inside of block elements.'
        ]
    },
    {
        question: 'CSS: What is the difference between "fixed" and "absolute" positioning?',
        rightAnswer: 'Both position an element relative to the document rather than any particular parent.',
        answers: [
            'Both position an element relative to the document rather than any particular parent.',
            'A "fixed" element responds to the dimension of its parent, while an "absolute" element responds to the dimension of the document.',
            '"Fixed" elements respond to scrolling, while "absolute" elements are unaffected by srolling.',
            'An "absolute" element is removed from the normal flow of the document, while a "fixed" element follows the normal flow of the document.'
        ]
    }
];

const state = {
    currentQ: -1,
    numRight: 0,
    numWrong: 0,
    //remaining: (BANK.length - this.currentQ - 1)// todo: refactor
};

function updateView() {
    if(state.currentQ === -1) { 
        renderStart();
        return;
    } else if(state.currentQ >= 0 && state.currentQ < BANK.length - 1) {
        renderQuestion(state);
        renderStatus(state); // todo: refactor. render only after answer submit
        renderNav(state);
        return;
    } else {
        renderEnd();
    }
}

function renderStart() {
    console.log("`renderStart()` was called");
    $("main").html(`<section role="region" aria-labelledby="start-page" id="start-section">
    <h1>Welcome to your interview.</h1>
</section>`);
    $("nav").html(generateStartButton());
    $("#start-button").click(event => { // button handler: Controller
        state.currentQ = 0;
        console.log(state);
        updateView(state);
    });
}

function generateStartButton() {
    console.log("`generateStartButton()` was called");
    let html = `<button id="start-button">Start</button>`;
    return html;
}

function renderQuestion(state) {
    console.log("`renderQuestion()` was called");
    generateQuestion(state.currentQ);
    generateAnswerChoies(state.currentQ);
}

function generateQuestion(questionIndex) {
    console.log("`geerateQuestion()` was called");
    let currentQuestion = BANK[questionIndex];
    let whichQ = `<h3 id="question-number">Question ${questionIndex + 1} of ${BANK.length}</h3><br>`;
    let questionStatement = `${currentQuestion.question}`;
    $("main").append(`<section role="region" aria-labelledby="question" id="question-section"></section>`); // add <section>
    $("#question-section").append(`<form aria-labelledby="question" id="question-form">
    <fieldset><legend id="question-statement"></legend></fieldset></form>`); // add <legend>
    $("#question-statement").html(questionStatement);
    return whichQ + questionStatement; 
    // todos: 
    // hook up Next button
    // when any answer is chosen, remove "disable" attribute of Next button
}

function generateAnswerChoices(questionIndex) {
    console.log("`generateAnswerChoices()` was called");
    let answerChoices = BANK[questionIndex].answers.map(answer => {
        let answerChoice = `<input type="radio"><label for="answer${BANK[questionIndex].answers.indexOf(answer)}">${answer}</label>`;
        return answerChoice;
    });
    return answerChoices;
    // todos:
        // create <input type="radio"> and <label> tags for answer choices
        // radomize answer choice * 4 within <label></label> with <input type="radio">
}

function shuffleAnswerChoices() {
    console.log("`shuffleAnswerChoices()` was called");
}

function renderStatus(state) {
    console.log("`renderStatus()` was called");
    $("footer").html(generateStatus(state)).removeAttr("hidden");
}

function generateStatus(state) {
    console.log("`generateStatus() was called");
    let html = `You got ${state.numRight} right, ${state.numWrong} wrong, ${BANK.length - state.currentQ - 1} to go`;
    return html;
}

function renderNav() {
    console.log("`renderNav()` was called");
    $("nav").html(generateNextButton());
}

function generateNextButton() {
    console.log("`generatNextButton()` was called");
    let html = `<button id="next-button" disabled>Next</button>`;
    return html;
}

function handleNextButton() {
    // suggestions:
    // increment state
    // call updateView();
}

function handleSubmitAnswer() {
    console.log("`handleSubmitAnswer()` was called");
    $('.submit-answer').on('click', event => {
        state.currentQ += 1;
        updateView();
    });
}

function renderEnd() {
    console.log("`renderEnd()` was called");

}

$(updateView);

/*
Model: question, state
View: render, generate
Controller: update, button handlers
*/