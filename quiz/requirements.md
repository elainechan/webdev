# Requirements

## Design Pattern: Model-View-Controller
* _Model_: `BANK` (immutable), `STATE` (mutable)
* _View_: `render`, `generate`
* _Controller_: `update`, `setHandle`
* Separation of concerns:
    * `BANK` _Model_ is never mutated
    * `render` _View_
        * calls `setHandler` to display button
        * does not trigger `setHandler` to mutate `STATE` _Model_
    * `setHandle` _Controller_ 
        * mutates `STATE` _Model_ when triggered by click events
        * does not call `render` to change _View_
    * `update` _Controller_ 
        * calls `render` to change _View_
        * does not mutate `STATE` _Model_

## Files
* `index.html`: startup wireframes
* `main.css`: styles
* `main.js`: main program
* `helpers.js`: helper functions for manipulating data or loading assets
* `question-bank.js`: `BANK` of all question content

## App Implementation
### User experience requirements
* [x] The starting screen should have a button that users can click to start the quiz. (1 point)
* [x] Users should be prompted through a series of at least 5 multiple choice questions which they can answer. (1 point)
* [x] Users should be asked questions one after the other.
* [x] Users should only be prompted with one question at a time. (1 point)
* [x] Users should not be able to skip questions. (1 point)
* [x] Users should also be able to see which question they're on (for instance, "7 out of 10") and their current score ("5 correct, 2 incorrect"). (1 point)

### Upon submitting an answer, users should:
* [x] receive textual feedback about their answer. If they were incorrect, they should be told the correct answer. (2 points)
* [x] be moved onto the next question (or interact with an element to move on). (1 point)
* [x] Users should be shown their overall score at the end of the quiz. In other words, how many questions they got right out of the total questions asked. (1 point)
* [x] Users should be able to start a new game. (1 point)

### Technical requirements
* [x] Render questions in a <form>. (1 point)
* [x] Use other semantic HTML, along with CSS and jQuery. (3 points)
* [x] Follow a11y best-practices. (5 points)
* [x] Use responsive design. (3 points)
* [x] Be fully usable by keyboard and mouse (which will be easy enough if you start with a form). (1 point)

### Process requirements
* [x] gather content for your app. That means typing up the questions you'll ask and gathering any images or icons you'll need in your app.
* [x] think about the user experiences outlined above and how your design must make them possible.
* [x] design your app using HTML wireframes, which are HTML (and minimal CSS) only versions of the different screens in your app.

## TODOs
### Add Features
* [ ] Data store (JSON question bank)
* [ ] Selection menu
    * [ ] Option to select quiz size (number of questions)
    * [ ] Option to select topic area
    * [ ] Option to select difficulty
    * [ ] Access reference material
    * [ ] Access analytics
* [ ] Feedback enhancement
    * [ ] Display answer explanations
    * [ ] Display reference links
* [ ] Review page
    * [ ] Display answer explanations
    * [ ] Display answer history
* [ ] Analytics feature
    * [ ] Overall answer history
    * [ ] Performance by date
    * [ ] Performance by topic
* [ ] Search engine
    * [ ] by keyword
    * [ ] by date

### Improve Design
* [ ] Grid system
* [ ] Style guide

### Refactor
* [ ] Add `START` and `END` states
    * [ ] In `START` state:
```javascript
function initialize() {
    // only called once
    // initialize static elements, some hidden
    // add to updateView()
    setHandleNextButton();
}
$(initialize); // call on first run
```

 * [ ] (Optional) Preload all elements of app use cycle
 * [ ] Hide and show elements through use cycle according to `STATE`

* [ ] Function to crop image
    * associate image filename to cropping data
    * array of filenames
    * key value pairs (img: dimension)
```javascript
function cropGif() {
    /*
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
    */
}
```

## Reference
### Content Reference
* [Google Tech Dev Guide Foundations Path](https://techdevguide.withgoogle.com/paths/foundational/)
* [Coding Interview University repo by an Amazon engineer](https://github.com/jwasham/coding-interview-university)
* [Frontend interview question list](https://github.com/h5bp/Front-end-Developer-Interview-Questions)
* [FreeCodeCamp frontend interview guide](https://medium.freecodecamp.org/cracking-the-front-end-interview-9a34cd46237)
* [Frontend interview guide by David Shariff](http://davidshariff.com/blog/preparing-for-a-front-end-web-development-interview-in-2017/)

### App Reference
* Max Carlquist music quiz 
    * [Codepen](https://codepen.io/Tenkaklet/pen/QEpWPo?editors=1111)
    * [Repo](https://github.com/Tenkaklet/MusicQuiz/blob/master/index.html)
* [W3Schools Quizzes](https://www.w3schools.com/quiztest/quiztest.asp?Qtest=HTML)
* [Building a Simple Quiz (CSS-Tricks)](https://css-tricks.com/building-a-simple-quiz/)
* [Make a Simple Javascript Quiz (Sitepoint)](https://www.sitepoint.com/simple-javascript-quiz/)