# Web Developer Interview Quiz

Brush up your Web development knowledge for that dream job interview.

[Click here to take the quiz](https://elainechan.github.io/webdev/quiz/index.html)

See [requirements.md](./requirements.md) for requirements checklist.

## Topics Covered
* [x] HTML
* [x] CSS
* [x] JavaScript
* [x] Linux
* [ ] Network Protocols
* [ ] Debugging
* [ ] Testing
* [ ] Web Tooling
* [ ] Data Structures
* [ ] Algorithms
* [ ] Design Patterns

## Displays
* Start page
* Question content
* Feedback: number of questions right, number wrong, number remaining
* Overall result

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
* `index.html`: startup wireframe
* `main.css`: styles and layout
* `main.js`: main program
* `helpers.js`: helper functions for manipulating data and loading assets
* `question-bank.js`: question content

## Enhancement

## Add Backend
* [ ] Server
* [ ] JSON data structure ([example](./questions.json))
* [ ] Database
* [ ] Get/request APIs

### Add Features
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

### App Refactor
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