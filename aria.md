# Accessible Rich Internet Applications (ARIA)

## Landmark
* `banner`
* `main`
* `complementary`
* `contentinfo`

### HTML Sectioning Elements

| Element | Default Landmark Role |
| --- | --- |
| `header` | `banner` only when in `body`|
| `main` | `main` |
| `nav` | `navigation` |
| `section` | `region` only with `aria-labelledby`, `aria-label`, `title` |
| `form` | `form` only with `aria-labelledby`, `aria-label`, `title` |
| `aside` | `complementary` |
| `footer` | `contentinfo` only when in `body`|

[Source](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/HTML5.html)

## Label
* `aria-label` vs `aria-labelledby`
    * `aria-labelledby` is preferred in general due to screenreader issues
    * use `area-labelledby` when a label is visible on screen
