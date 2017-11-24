'use strict';
// TODO: make images responsive
// TODO: make question and logo inline-block
// TODO: responsive layout (grid and/or flexbox), prevent horizontal scrolling

const BANK = [
    [{
        question: 'In an HTML document, <code>!DOCTYPE html</code>...',
        topic: 'HTML',
        answers: [
            { key: 0, answer: 'Informs the browser on how to render the document.' },
            { key: 1, answer: 'Represents the root or the top-level element.' },
            { key: 2, answer: 'Refers to the generic container for flow content.' }, 
            { key: 3, answer: 'Represents the document object.' }
        ]
    }],
    [{
        question: 'In the Document Object Model (DOM), <code>window</code> refers to...',
        topic: 'JavaScript',
        answers: [
            { key: 0, answer: 'The global object in a browser.' },
            { key: 1, answer: 'An element returned by the DOM API.' },
            { key: 2, answer: 'The area of a webpage visible to the user.' },
            { key: 3, answer: 'The container of user display properties.' }
        ]
    }],
    [{
        question: 'In the Document Object Model (DOM), <code>document</code> refers to...',
        topic: 'JavaScript',
        answers: [
            { key: 0, answer: 'The main object of the rendered DOM.' },
            { key: 1, answer: 'The global object in a browser.' },
            { key: 2, answer: 'The area of a webpage visible to the user.' },
            { key: 3, answer: 'An array of nodes or elements.' }
        ]
    }],
    [{
        question: 'What is the correct order of event bubbling?',
        topic: 'JavaScript',
        answers: [
            { key: 0, answer: 'The handlers on an element, its parent, and then its other ancestors.' },
            { key: 1, answer: 'The handlers on an element, then all its children.' },
            { key: 2, answer: 'The handlers on an element, then all its siblings.' },
            { key: 3, answer: 'The handlers on the parent of an element, the element itself, and then its children.' }
        ]
    }],
    [{
        question: 'Event delegation...',
        topic: 'JavaScript',
        answers: [
            { key: 0, answer: 'Allows attachment of an event listener that will fire for an element\'s descendents.' },
            { key: 1, answer: 'Allows attachment of an event listener that will fire for an element\'s parents.' },
            { key: 2, answer: 'Allows attachment of an event listener that will fire for all elements with the same class.' },
            { key: 3, answer: 'Refers to the most deeply nested element that caused an event.' }
        ]
    }],
    [{
        question: 'In the box model, <code>padding</code>...',
        topic: 'CSS',
        answers: [
            { key: 0, answer: 'Represents the space between the box and the border.' },
            { key: 1, answer: 'Represents the space between the border and the other content that interact with the box.' },
            { key: 2, answer: 'Does not affect the size of the box, but it affects the other content that interact with the box.' },
            { key: 3, answer: 'Is on the outside of block elements.' }
        ]
    }],
    [{
        question: 'In the box model, <code>margin</code>...',
        topic: 'CSS',
        answers: [
            { key: 0, answer: 'Represents the space between the border and the other content that interact with the box.' },
            { key: 1, answer: 'Represents the space between the box and the border.' },
            { key: 2, answer: 'Directly determines the size of the box through specifying the size of the space between the box and the border.' },
            { key: 3, answer: 'Is on the inside of block elements.' }
        ]
    }],
    [{
        question: 'What is the difference between <code>fixed</code> and <code>absolute</code> positioning?',
        topic: 'CSS',
        answers: [
            { key: 0, answer: 'Both <code>fixed</code> and <code>absolute</code> elements are positioned relative to the document rather than a parent.' },
            { key: 1, answer: 'A <code>fixed</code> element responds to its parent dimension, while an <code>absolute</code> element does not.' },
            { key: 2, answer: 'A <code>fixed</code> element responds to scrolling, while an <code>absolute</code> element does not.' },
            { key: 3, answer: 'A <code>fixed</code> element follows the normal flow of the document, while an <code>absolute</code> element does not.' }
        ]
    }]
];

const STATE = {
    currentQ: -1, // ?
    numRight: 0,
    numWrong: 0,
    displayMode: "QUESTION", // either START, QUESTION, FEEDBACK, or END
    currentAnswerCorrect: false,
};

function updateView() { // refactor to show correct num of questions; last q is cut
    if(STATE.currentQ === -1) {
        shuffle(BANK);
        renderStart();
    } else if(STATE.currentQ >= 0 && STATE.currentQ < BANK.length) { // steady state
        if(STATE.displayMode === "QUESTION") {
            renderQuestion(STATE);
            renderNav(STATE.displayMode);
        } else { // FEEDBACK mode
            renderFeedback(STATE);
            renderNav(STATE.displayMode);
        }
        renderStatus(STATE);
    } else {
        renderEnd();
    }
}

function renderStart() {
    console.log("`renderStart()` was called");
    let startImage = `./gifs/start/start.gif`
    $("main").html(`<section role="region" aria-labelledby="start-page" id="start-section">
    <h2>Welcome to your interview.</h2><p>To get the job, get at least half of the questions right.</p><div id="start-image"><img src=${startImage} alt="Mulder and Scully looking at the sky"></div>
</section>`);
    $("nav").html(generateStartButton());
    setHandleStartButton();
}

function generateStartButton() {
    console.log("`generateStartButton()` was called");
    let startButton = `<div class="button-container"><button id="start-button">Start</button></div>`;
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

function renderQuestion(state) {
    console.log("`renderQuestion()` was called");
    //$("main").html(`<div id="question-block"></div>`); // wrap question and logo in div container
    $("main").html(generateQuestion(state.currentQ));
    $("#question-form > fieldset").append(generateAnswerChoices(state.currentQ)); // append choices
    $("#question-form").append(generateSubmitAnswerButton()); // append submit button
    $("#question-body").prepend(generateTopicLogo(BANK[state.currentQ][0].topic)); // append logo
    //$("main").append(`<div id="topic-logo"><img src="./logos/JavaScript-logo.png" alt="logo"></div>`)
    setHandleAnswerChecked();
    setHandleSubmitAnswer();
}

function generateQuestion(questionIndex) {
    console.log("`generateQuestion()` was called");
    let currentQuestion = BANK[questionIndex];
    let whichQ = `<h3 id="question-number">Question ${questionIndex + 1} of ${BANK.length}</h3>`;
    let questionStatement = `${currentQuestion[0].question}`;
    let questionForm = `<section role="region" aria-labelledby="question" id="question-section"><h3 id="question-number">Question ${questionIndex + 1} of ${BANK.length}</h3><div id="question-body"><form aria-labelledby="question" id="question-form">
    <fieldset class="question-content"><legend id="question-statement">${questionStatement}</legend></fieldset></form></div></section>`;
    return questionForm;
}

function nakedValues(arrayOfObjects, zeroOrOne) { // zeroOrOne: 0 for keys, 1 for properties
    var twoDArray = arrayOfObjects.map( (entry, i) => {
        return Object.values(arrayOfObjects[i]);
    });
    var oneDArray = twoDArray.map(entry => {
        return entry[zeroOrOne];
    });
    return oneDArray;
}

function getOriginalIndex(value) {
    let originalIndex = _.findIndex(BANK[STATE.currentQ][0].answers, function(o) { return o.answer == value; });
    return originalIndex;
}

function generateAnswerChoices(questionIndex) {
    console.log("`generateAnswerChoices()` was called");
    let answers = nakedValues(BANK[STATE.currentQ][0].answers, 1);
    let shuffledAnswers = shuffle(answers); // array
    let answerChoices = shuffledAnswers.map( (answer, index) => {
        let answerChoice = `<div class="answer-choice"><input type="radio" name="answer-checkbox" class="answer-checkbox" id=${getOriginalIndex(answer)}><label for="answer${getOriginalIndex(answer)}" class="answer-text">${answer}</label></div>`;
        return answerChoice;
    });
    return answerChoices;
}

function generateTopicLogo(topic) {
    let logo = `<div id="logo-container"><img id="topic-logo" src="./logos/${topic}-logo.png" alt="${topic} logo"></div>`;
    return logo;
}

function shuffle(arr) {
    console.log("`shuffle()` was called");
    let currentIndex = arr.length, 
    temporaryValue, 
    randomIndex ;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex); // randomize
        currentIndex -= 1;
        temporaryValue = arr[currentIndex]; // swap
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
    }
    return arr;
}

function setHandleAnswerChecked() { // setting up handling of answer checkmark
    console.log("`setHandleAnswerChecked` was called")
    $(".answer-checkbox").change(event => {
        $("#submit-answer").attr("disabled", false); // enables submit answer button
    });
}

function generateSubmitAnswerButton() { // initially disabled
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
        if(checkedID === 0 || checkedID === '0') { // mutate STATE
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
}

function generateStatus(state) {
    console.log("`generateStatus() was called");
    // display status: x right, y wrong, z to go
    let html = `<p>You got ${STATE.numRight} right, ${STATE.numWrong} wrong, ${BANK.length - STATE.currentQ} to go</p>`;
    return html;
}

function renderNav(displayMode) {
    console.log("`renderNav()` was called");
    if(displayMode === "FEEDBACK" && STATE.currentQ < BANK.length) { // adding < BANK.length fixed issue where after last question it still shows "1 to go"
        $("nav").html(generateNextButton()); // display "Next" button
        STATE.currentQ += 1; // mutate state for correct display info
    } else {
        $("nav").html("");
    }
    setHandleNextButton();
}

function setHandleNextButton() {
    console.log("`setHandleNextButton()` was called");
    $("#next-button").on("click", event => { // mutate STATE
        STATE.displayMode = "QUESTION";
        updateView();
    });
}

function generateNextButton() {
    console.log("`generatNextButton()` was called");
    let nextButton = `<button type="button" id="next-button">Next</button>`;
    return nextButton;
}

function gif(state) {
    console.log("`gif()` was called");
    let happyGifs = [
        './gifs/happy/happy-catpaws.gif', './gifs/happy/happy-feet.gif', './gifs/happy/happy-golden.gif', './gifs/happy/happy-lab.gif', './gifs/happy/happy-pup.gif','./gifs/happy/happy-shiba.gif', './gifs/happy/happy-pug.gif', './gifs/happy/happy-tiny-dog.gif'
    ]; 
    let sadGifs = [
        './gifs/sad/sad-cat.gif', './gifs/sad/sad-creature.gif', './gifs/sad/sad-fluff.gif', './gifs/sad/sad-nope-cat.gif', './gifs/sad/sad-pup-sleep.gif', './gifs/sad/sad-pup.gif'
    ];
    if (STATE.currentAnswerCorrect) {
        return shuffle(happyGifs)[0]; 
    } else {
        return shuffle(sadGifs)[0];
    }
}

function renderFeedback(state) {
    console.log("`renderFeedback()` was called");
    let question = BANK[STATE.currentQ];
    if(STATE.currentAnswerCorrect) {
        $("main").html(`<section role="region" aria-labelledby="feedback" id="feedback-section"><h3>Correct.</h3><p>${question[0].question}</p><p>${question[0].answers[0].answer}</p></section>`);
        $("main").prepend(`<div class="feedback-image"><img src="${gif(state)}" alt="Happy animal GIF"></div>`); // add gif
    } else {
        $("main").html(`<section role="region" aria-labelledby="feedback" id="feedback-section"><h3>Wrong.</h3><p>${question[0].question}</p><p>${question[0].answers[0].answer}</p></section>`);
        $("main").prepend(`<div class="feedback-image"><img src="${gif(state)}" alt="Sad animal GIF"></div>`);
    }
}

function renderEnd() {
    console.log("`renderEnd()` was called");
    $("main").html(generateEnd());
    $("nav").html(generateRestartButton());
    $("footer").html(""); // remove status display
    setHandleRestartButton();
}

function generateEnd() {
    console.log("`gnerateEnd()` was called");
    let message;
    let image;
    let alt;
    if(STATE.numRight >= STATE.numWrong) { // works for both odd and even num of questions
        image = `./gifs/end/hire.gif`;
        alt = `Michael and Pam from The Office having a celebration dance`;
        message = `Congratulations, you are hired!`;
    } else {
        image = `./gifs/end/no-hire.gif`;
        alt = `Dr. Who crying in the rain`;
        message = `Sorry, you didn't get the job. Please try again!`;
    }
    let end = `<section role="region" aria-labelledby="end-page" id="end-section"><h2>${message}</h2><h3>Your score is:</h3><p>${STATE.numRight} out of ${BANK.length}</p><div id="end-image"><img src=${image} alt="${alt}"></div></section>`;
    return end;
}

function generateRestartButton() {
    console.log("`generateRestartButton()` was called");
    let restartButton = `<div class="button-container"><button type="button" id="restart-button">Restart</button></div>`
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

/* todo: optional redesign
function initialize() {
    // only called once
    // initialize static elements, some hidden
    // updateView() hides and shows elements through app cycle
    setHandleNextButton();
}
$(initialize); part of optional redesign
*/

$(updateView);

/*
Model: question, state
View: render, generate
Controller: update, button handlers
separation of concerns:
handlers change state, don't call render
updates changes view, don't change state
*/