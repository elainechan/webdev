# JavaScript Notes

## Current Interest
* Self-reference with `this`
* DOM manipulation
* diff between vanilla unit tests and testing libraries
* underscore
* asyncronous module definition (AMD)
* function declaration, expression, closure

---
## Document Object Model (DOM)
* `window` is the global object in a browser
* `window.document` is the main object of the visible/rendered DOM
* `screen` contains properties about the user's display
* `viewport` is the user's visible area of a webpage
####  Sources
[StackOverflow](https://stackoverflow.com/questions/9895202/what-is-the-difference-between-window-screen-and-document-in-javascript)
[Eli Geske](http://eligeske.com/jquery/what-is-the-difference-between-document-and-window-objects-2/)
---
## Event Concepts
### Event Propagation
* Event capturing
* Event bubbling
### Event Delegation
* allows attachment of a single event listener to a parent element that will fire for all current and future descendants matching a selector.

#### Sources
[jQuery](https://learn.jquery.com/events/event-delegation/)
[Event propagation explained](https://www.sitepoint.com/event-bubbling-javascript/)
[Bubbling and capturing](https://javascript.info/bubbling-and-capturing)
---
## Syntax

### Functions
* Declaration: `function add(x, y) = { return x + y; }`
* Expression: `var add = function(x, y) { return x + y }`
* Arrow: `var add = (x, y) => { x + y; }

## Objects
* Objects are passed  by reference not value
* `const obj = { a: 1, b: 2 }`
    * contents of `obj` can change but `obj` can't be reassigned
---
## jQuery
* `$` turns element into a jQuery object
* REMEMBER to insert `$` when using jQuery, as JavaScript uses some of the same methods 

### Traverse and Manipulate - "search and destroy"
* `.addClass([className])`, `.addClass([function])`
* `.text()` accepts no arguments, get/set text content
* `.find([selector])`, `.find([element])` - traverse using a filter condition
* `.parent([selector])` - target the first parent element of a jQuery object
* `.closest([selector])` target the closest selected element

### Event Listeners
* `$(callback)` at bottom of file in place of deprecated `.ready()`
 * emits a "ready" event once per page load
* `event.which` monitor keyboard input, normalizes button presses
* `.keydown()` event is sent to an element when the user presses a key on the keyboard
* `event.key` property contains info on which key is pressed when `keydown()` is triggered
* `event.currentTarget` contains information about which DOM element the user has interacted with.
* `event.stopPropagation()` - Prevents the event from bubbling up the DOM tree
* `event.preventDefault()` - prevent form submission to server
* `this` - inside callback function on an event listener, can use `this` to refer to event.currentTarget
* Event delegation with `.on(events[, selector][, data], handler)`
    * Event listeners are effectively deaf to events related to any elements created after initial binding
    * Event delegation allows attaching a single event listener, to a parent element, that will fire for all descendants matching a selector, whether those descendants exist now or are added in the future.
    * `.click()` is shorcut for `.on('click'...)
    * `.hover()` is shortcut for `.on('hover'...)
    * Use `.on()` rather than `.click()` on dynamically generated elements (added to the page after JS has been loaded)
* **IMPORTANT:** when deleting `li` item **never** use `li` as selector; **always** use parent

## Interactivity and Accessibility
* Use jQuery to manipulate classes - `.addClass()`, `.removeClass()`, `.toggleClass()`
* Use CSS to change display quality (color, size, etc.) of selected classes
* Toggle buttons `<input type="image" alt="image description" role="button" aria-pressed="false">`
    * `area-pressed="false"` indicates toggle buttons
    * `.attr()` sets `area-pressed` to `true` or `false` when button is pressed
    * Button elements interpret `Space` key as a standard `click` event
