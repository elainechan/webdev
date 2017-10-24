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
    * in CSS file set `#ruler` to `position: absolute` and `min-height: 90%`
    * a vertical line will appear in the mid-point of the page

