1. Self-reference

2. DOM

3. array equality

4. open source libraries for grokking

5. diff between vanilla unit tests and testing libraries

6. underscore

## jQuery
* `$` turns element into a jQuery object
* REMEMBER to insert `$` when using jQuery, as JavaScript uses some of the same methods 

### Traverse and Manipulate - "search and destroy"
* `.addClass([className])`, `.addClass([function])`
* `.text()` accepts no arguments, get/set text content
* `.find([selector])`, `.find([element])` - traverse using a filter condition
* `.parent([selector])` - target the first parent element of a jQuery object

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

## Interactivity and Accessibility
* Use jQuery to manipulate classes - `.addClass()`, `.removeClass()`, `.toggleClass()`
* Use CSS to change display quality (color, size, etc.) of selected classes
* Toggle buttons `<input type="image" alt="image description" role="button" aria-pressed="false">`
    * `area-pressed="false"` indicates toggle buttons
    * `.attr()` sets `area-pressed` to `true` or `false` when button is pressed
    * Button elements interpret `Space` key as a standard `click` event
