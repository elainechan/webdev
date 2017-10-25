# HTML

# CSS Tips
  * Most common declaration for alignment:
    * `margin-left: auto;` 
    * `margin-right: auto;`
    * `text-align: center`
  * pseudo-element
    * `blockquote::before`
  * Good convention for images:
    * `border: 1px solid black;`

# Common CSS Assessments
  * Describing the different parts of a CSS ruleset (the selector, the declaration block, declarations, properties, values)
  * Explaining what is meant when people say CSS is about presentation (vs. structure or behavior)
  * Explaining the box model
  * Inspecting and manipulating CSS using Developer Tools
  * Learning new CSS properties
  * Solving basic CSS problems like setting background colors, font colors, width, height, etc.
  * Using CSS selectors to target HTML elements

  * Browsers impose certain implicit style rules that are only visibile in dev tools. Common problems/solutions:
    * Auto padding in `li` list items: Set element to `margin: 0`
    * Most auto styling can be solved by "poor man's reset": resetting within specific element rather than master-reset.
  * Testing text-alignment by creating a mid-line that spans entire page: 
    * add a `id="ruler"` element in HTML file
    * in CSS file set `#ruler` to `position: absolute` (or actually `position: fixed`) and `min-height: 90%`
    * a vertical line will appear in the mid-point of the page

# Schools of Fonts
  * Relative: scalable, using `em`
  * Absolute: fixed, using `px` or `pt`
  * [Detailed discussion of font sizing](https://kyleschaeffer.com/development/css-font-size-em-vs-px-vs-pt-vs/)

# Terminology
    * Ruleset 
    * Element
    * Selector
    * Box model
    * Normalizing and resetting
    * Pseudo-elements
    * Pseudo-classes
    * `:nth-child()` - matches one or more elements based on their position among a group of siblings
    * `::before`, `::after` - usually used to insert symbols before/after text

# Positioning
    * Viewport - browser window
    * Normal flow - the default way browsers render content, linearly from top to bottom
    * `position: static` -  default _normal flow_
    * `position: fixed` - stays in position relative to viewport regardless of scrolling (e.g. nav menus)
    * `position: relative` - offset relative to its _normal flow_ position (i.e. where it's supposed to be in the top-bottom flow)
    * `position: absolute` - outside of _normal flow_, offset relative to its first parent with non-static position (e.g. logo in nav menu)

# Float
* Takes elements out of _normal flow_
