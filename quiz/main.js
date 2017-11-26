'use strict';
// TODO: make images responsive


const BANK = [
    [{
        question: 'In an HTML document, <code>!DOCTYPE html</code>...',
        topic: 'HTML',
        answers: [
            { key: 0, answer: 'Tells the browser how to render the document.' },
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
            { key: 0, answer: 'The element, its parent, then its other ancestors.' },
            { key: 1, answer: 'The element, then all its children.' },
            { key: 2, answer: 'The element, then all its siblings.' },
            { key: 3, answer: 'The element, then all other elements of the same class.' }
        ]
    }],
    [{
        question: 'Event delegation refers to...',
        topic: 'JavaScript',
        answers: [
            { key: 0, answer: 'An event listener that will fire for an element\'s descendents.' },
            { key: 1, answer: 'An event listener that will fire for an element\'s parents.' },
            { key: 2, answer: 'An event listener that will fire for an element\'s siblings .' },
            { key: 3, answer: 'The most deeply nested element that caused an event.' }
        ]
    }],
    [{
        question: 'In the box model, <code>padding</code> affects...',
        topic: 'CSS',
        answers: [
            { key: 0, answer: 'The space between the box and the border.' },
            { key: 1, answer: 'The space between the border and other content that interact with the box.' },
            { key: 2, answer: 'Font size in pixels.' },
            { key: 3, answer: 'Image size in pixels.' }
        ]
    }],
    [{
        question: 'In the box model, <code>margin</code> affects...',
        topic: 'CSS',
        answers: [
            { key: 0, answer: 'The space between the border and other content that interact with the box.' },
            { key: 1, answer: 'The space between the box and the border.' },
            { key: 2, answer: 'The size of the viewport.' },
            { key: 3, answer: 'The size of the browser window.' }
        ]
    }],
    [{
        question: 'Which of the following is true?',
        topic: 'CSS',
        answers: [
            { key: 0, answer: 'Both <code>fixed</code> and <code>absolute</code> elements are positioned relative to the document rather than a parent.' },
            { key: 1, answer: 'A <code>fixed</code> element responds to its parent, while an <code>absolute</code> element does not.' },
            { key: 2, answer: 'A <code>fixed</code> element responds to scrolling, while an <code>absolute</code> element does not.' },
            { key: 3, answer: 'A <code>fixed</code> element follows the normal flow of the document, while an <code>absolute</code> element does not.' }
        ]
    }]
];

// optional:
// separate BANK in JSON file
// use AJAX to retrieve
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
    <h2 id="subhead">Welcome to your interview.</h2><div id="start-image-container"><img id="start-image" src=${startImage} alt="Mulder and Scully looking at the sky"></div>
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
    $("main").html(generateQuestion(state.currentQ));
    $("#logo-container").append(generateTopicLogo(BANK[state.currentQ][0].topic)); // append logo
    $("#question-form > fieldset").append(generateAnswerChoices(state.currentQ)); // append choices
    $("#question-form").append(generateSubmitAnswerButton()); // append submit button
    setHandleAnswerChecked();
    setHandleSubmitAnswer();
}

/* optional:
Crop image
associate image filename to cropping data
array of filenames
key value pairs (img: dimension)

function cropGif() {
    use AJAX to get JSON containing cropping information
    fetch image URL
    apply cropping
        size: a bounding box starting top left corner, ending bottom right corner
        calculate height and width
        set cropping container to height and width in pixels
        set cropping container `top, left`
        CSS
            position: absolute
            use negative values to hide part of image
}
*/

function generateQuestion(questionIndex) {
    console.log("`generateQuestion()` was called");
    let currentQuestion = BANK[questionIndex];
    let questionStatement = `${currentQuestion[0].question}`;
    let questionForm = `<section role="region" aria-labelledby="question" id="question-section">

    <div class="row">
    <div class="col" id="logo-container">
    </div><!--col-->
    <div class="col" id="question-container"><form aria-labelledby="question" id="question-form">
    <h3 id="question-number">
    Question ${questionIndex + 1} of ${BANK.length}
    </h3>
    <fieldset id="question-content"><legend id="question-statement">${questionStatement}</legend></fieldset></form>
    </div><!--col-->
    </div><!--row-->
    </section>`;
    return questionForm;
}

function getOriginalIndex(value) { // get pre-shuffle answer index
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
    let logo = `<img id="topic-logo" src="./logos/${topic}-logo.png" alt="${topic} logo">`;
    return logo;
}

function setHandleAnswerChecked() { // setting up handling of answer checkmark
    console.log("`setHandleAnswerChecked` was called")
    $(".answer-checkbox").change(event => {
        $("#submit-answer").attr("disabled", false); // enables submit answer button
    });
}

function generateSubmitAnswerButton() { // initially disabled
    console.log("`generateSubmitAnswerButton()` was called");
    let answerButton = `<button type="submit" id="submit-answer" disabled>Submit</button>`;
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
    let html = `<p>${STATE.numRight} right, ${STATE.numWrong} wrong, ${BANK.length - STATE.currentQ} to go</p>`;
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
        $("main")
        .html(`<div class="col" id="feedback-container">
        <section role="region" aria-labelledby="feedback" id="feedback-section">
        <h3>Correct.</h3>
        <p>${question[0].question}</p><p>${question[0].answers[0].answer}</p>
        </section></div>
        <!--col-->`);
        $("main").prepend(`<div class="col" id="feedback-image-container">
        <img id="feecback-image" src="${gif(state)}" alt="Happy animal GIF">
        </div><!--col-->`); // add gif
    } else {
        $("main").html(`<div class="col" id="feedback-container"><section role="region" aria-labelledby="feedback" id="feedback-section"><h3>Wrong.</h3><p>${question[0].question}</p><p>${question[0].answers[0].answer}</p></section></div>`);
        $("main").prepend(`<div class="col" id="feedback-image-container"><img id="feedback-image" src="${gif(state)}" alt="Sad animal GIF"></div>`);
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
    let end = `<section role="region" aria-labelledby="end-page" id="end-section"><h2>${message}</h2><h3>Your score is:</h3><p>${STATE.numRight} out of ${BANK.length}</p><div id="end-image-container"><img id="end-image" src=${image} alt="${alt}"></div></section>`;
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