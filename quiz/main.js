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

const STATE = {
    currentQ: -1,
    numRight: 0,
    numWrong: 0,
    displayMode: "QUESTION", // either START, QUESTION, FEEDBACK, or END
    currentAnswerCorrect: false,
};

function updateView() { // refactor to show correct num of questions; last q is cut
    if(STATE.currentQ === -1) { 
        renderStart();
    } else if(STATE.currentQ >= 0 && STATE.currentQ < BANK.length - 1) { // steady state
        if(STATE.displayMode === "QUESTION") {
            renderQuestion(STATE);
            renderNav(STATE.displayMode);
        } else {
            renderFeedback(STATE);
            renderNav(STATE.displayMode);
        }
        renderStatus(STATE); // todo: refactor to show correct nums at all times
    } else {
        renderEnd();
    }
    return;
}

function renderNav(displayMode) {
    console.log("`renderNav()` was called");
    if(displayMode === "FEEDBACK") {
        $("nav").html(generateNextButton()); // display "Next" button
    } else {
        $("nav").html("");
    }
    setHandleNextButton();
}

function initialize() {
    // only called once
    // initialize static elements, some hidden
    // updateView() hides and shows elements through app cycle
    setHandleNextButton();
}

function setHandleNextButton() {
    console.log("`setHandleNextButton()` was called");
    $("#next-button").on("click", event => { // mutate STATE
        STATE.currentQ += 1;
        STATE.displayMode = "QUESTION";
        updateView();
    });
}

function generateNextButton() {
    console.log("`generatNextButton()` was called");
    let nextButton = `<button type="button" id="next-button">Next</button>`;
    return nextButton;
}

function renderStart() {
    console.log("`renderStart()` was called");
    $("main").html(`<section role="region" aria-labelledby="start-page" id="start-section">
    <h1>Welcome to your interview.</h1>
</section>`);
    $("nav").html(generateStartButton());
    setHandleStartButton();
}

function generateStartButton() {
    console.log("`generateStartButton()` was called");
    let startButton = `<button id="start-button">Start</button>`;
    return startButton;
}

function setHandleStartButton() {
    console.log("`setHandleStartButton()` was called");
    $("#start-button").click(event => { // button handler: Controller
        STATE.currentQ = 0;
        console.log(STATE);
        updateView();
    });
}

function renderFeedback(state) {
    console.log("`renderFeedback()` was called");
    let correctness = STATE.currentAnswerCorrect;
    let question = BANK[STATE.currentQ];
    $("main").html(correctness? `You got the right answer.` : `<p>You got the wrong answer.</p><p>The question is: ${question.question}</p><p>The correct answer is: ${question.rightAnswer}</p>`);
}

function renderQuestion(state) {
    console.log("`renderQuestion()` was called");
    $("main").html(generateQuestion(STATE.currentQ));
    $("#question-form > fieldset").append(generateAnswerChoices(STATE.currentQ));
    $("#question-form").append(generateSubmitAnswerButton());
    setHandleAnswerChecked();
    setHandleSubmitAnswer();
}

function generateQuestion(questionIndex) {
    console.log("`generateQuestion()` was called");
    let currentQuestion = BANK[questionIndex];
    let whichQ = `<h3 id="question-number">Question ${questionIndex + 1} of ${BANK.length}</h3><br>`;
    let questionStatement = `${currentQuestion.question}`;
    let questionForm = `<section role="region" aria-labelledby="question" id="question-section"><h3 id="question-number">Question ${questionIndex + 1} of ${BANK.length}</h3><br><form aria-labelledby="question" id="question-form">
    <fieldset><legend id="question-statement">${questionStatement}</legend></fieldset></form></section>`;
    return questionForm;
}

function generateAnswerChoices(questionIndex) {
    console.log("`generateAnswerChoices()` was called");
    let answerStatements = shuffleAnswerChoices(BANK[questionIndex].answers); // array
    let answerChoices = answerStatements.map( (answer, index) => {
        let answerChoice = `<input type="radio" name="answer-checkbox" class="answer-checkbox" id="answer${index}"><label for="answer${index}">${answer}</label><br>`;
        return answerChoice;
    });
    return answerChoices;
}

function shuffleAnswerChoices(answerChoices) {
    console.log("`shuffleAnswerChoices()` was called");
    let currentIndex = answerChoices.length, 
    temporaryValue, 
    randomIndex ;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex); // randomize
        currentIndex -= 1;
        temporaryValue = answerChoices[currentIndex]; // swap
        answerChoices[currentIndex] = answerChoices[randomIndex];
        answerChoices[randomIndex] = temporaryValue;
    }
    return answerChoices;
}

function setHandleAnswerChecked() { // setting up handling of answer check
    console.log("`setHandleAnswerChecked` was called")
    $(".answer-checkbox").change(event => {
        $("#submit-answer").attr("disabled", false); // enables submit answer button
    });
}

function generateSubmitAnswerButton() {
    console.log("`generateSubmitAnswerButton()` was called");
    let answerButton = `<button type="submit" id="submit-answer" disabled>Submit Answer</button>`;
    return answerButton;
}

function setHandleSubmitAnswer() {
    console.log("`setHandleSubmitAnswer()` was called");
    $("#submit-answer").on("click", event => {
        event.preventDefault();
        let checkedID = $("input[name=answer-checkbox]:checked").attr("id");
        let chosenAnswer = $(`label[for=${checkedID}]`).text();
        if(chosenAnswer === BANK[STATE.currentQ].rightAnswer) { // mutate STATE
            STATE.numRight += 1;
            STATE.currentAnswerCorrect = true;
        } else {
            STATE.numWrong += 1;
            STATE.currentAnswerCorrect = false;
        }
        STATE.displayMode = "FEEDBACK"; // mutate STATE
        updateView();
    });
}

function renderStatus(state) {
    console.log("`renderStatus()` was called");
    $("footer").html(generateStatus(STATE)).removeAttr("hidden");
    // setHandleSubmitAnswer();
}

function generateStatus(state) {
    console.log("`generateStatus() was called");
    // check if chosen answer === right answer
    let checkedID = $("input[name=answer-checkbox]:checked").attr("id");
    let chosenAnswer = $(`label[for=${checkedID}]`).text();
    if(chosenAnswer === BANK[STATE.currentQ].rightAnswer) {
    }
    // display status: x right, y wrong, z to go
    let html = `<p>You got ${STATE.numRight} right, ${STATE.numWrong} wrong, ${BANK.length - STATE.currentQ - 1} to go</p>`;
    return html;
}

function renderEnd() {
    console.log("`renderEnd()` was called");
    $("main").html(generateEnd());
    $("nav").html(generateRestartButton());
    setHandleRestartButton();
}

function generateEnd() {
    console.log("`gnerateEnd()` was called");
    let message;
    if(STATE.numRight / STATE.numWrong > 0.5) {
        message = `Congratulations, you are hired!`;
    } else {
        message = `Sorry, you didn't get the job. Please try again!`;
    }
    let end = `<section role="region" aria-labelledby="end-page" id="end-section"><h2>${message}</h2><h3>Your score is:</h3><p>${STATE.numRight} out of ${BANK.length}</p></section>`;
    return end;
}

function generateRestartButton() {
    console.log("`generateRestartButton()` was called");
    let restartButton = `<button type="button" id="restart-button">Try again</button>`
    return restartButton;
}

function setHandleRestartButton() {
    console.log("`setHandleRestartButton()` was called")
    $("#restart-button").on("click", event => { // button handler: Controller
        STATE.currentQ = 0;
        STATE.numRight = 0;
        STATE.numWrong = 0;
        console.log(STATE);
        updateView();
    });
}

$(initialize);
$(updateView);

/*
Model: question, state
View: render, generate
Controller: update, button handlers

separation of concerns:
handlers change state, don't call render
updates changes view, don't change state
*/