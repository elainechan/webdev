## CSS Tips
* Most common declaration for alignment:
    * `margin-left: auto;` 
    * `margin-right: auto;`
    * `text-align: center`
* pseudo-element
    * `blockquote::before`
* Good convention for images:
    * `border: 1px solid black;`
* `z-index` only works on positioned elements, not on `position: static`

## CSS Tricks
* Browsers impose certain implicit style rules that are only visibile in dev tools. Common problems/solutions:
    * Auto padding in `li` list items: Set element to `margin: 0`
    * Most auto styling can be solved by "poor man's reset": resetting within specific element rather than master-reset.
* Testing text-alignment by creating a mid-line that spans entire page: 
    * add a `id="ruler"` element in HTML file
    * in CSS file set `#ruler` to `position: absolute` (or actually `position: fixed`) and `min-height: 90%`
    * a vertical line will appear in the mid-point of the page

## Schools of Fonts
* Relative: scalable, using `em`
* Absolute: fixed, using `px` or `pt`
* [Detailed discussion of font sizing](https://kyleschaeffer.com/development/css-font-size-em-vs-px-vs-pt-vs/)

## Terminology
* Ruleset 
* Element
* Selector
* Box model
* Normalizing and resetting
* Pseudo-elements
* Pseudo-classes
* `:nth-child()` - matches one or more elements based on their position among a group of siblings
* `::before`, `::after` - usually used to insert symbols before/after text

### Display
* `block`
    * top-to-bottom only, does not tolerate adjacent external elements
* `inline`
    * tolerates adjacent external elements
    * no line-break
    * an infinite number of `inline` elements will flow in one line forever
* `inline-block`
    * `inline` in relation to external elements; `block` within own element
    * tolerates adjacent external elements (side-by-side)
    * content within element flows top-to-bottom as in `block`
[StackOverflow](https://stackoverflow.com/questions/9189810/css-display-inline-vs-inline-block)

### Positioning `position`
* Viewport - browser window
* Normal flow - the default way browsers render content, linearly from top to bottom
* `static` -  default _normal flow_
* `fixed` 
    * stays in position relative to _viewport_ as opposed to _normal flow_, 
    * unaffected by scrolling (e.g. nav menus)
* `relative` - offset relative to its _normal flow_ position (i.e. where it's supposed to be in the top-bottom flow)
* `absolute`
    * outside of _normal flow_
    * offset relative to its first parent with non-static position (e.g. logo in nav menu)

### Float `float`
* Takes elements out of _normal flow_

### Margin and Padding
* `margin` doesn't affect the size of the box but _other_ content interacting with box
* `padding` represents space between the `border` and the box, thus affects box size.
* if undeclared, they are set to browser default or zero (with CSS reset)
[StackOverflow](https://stackoverflow.com/questions/2189452/when-to-use-margin-vs-padding-in-css)
