# Vim Cheatsheet

## Window Navigation
* `:split [file1] [file2]` open additional files in horizontal split mode
* `:vsplit` open added files in vertical split mode
* `ctrl-w` + `up` or `down` - move between open buffers in same window

## Editing
* Editing between buffers (with `set clipboard=unnamedplus` added in .vimrc file):
    * `"+y` copy selection
    * `"+yy` copy current line
    * `"+d` cut selection
    * `"+dd` cut current line
Pasting: use normal

* [visual] Columnar selection - edit multiple lines simultaneously
    * `ctrl-v` Column selection
    * select with arrow keys
    * type in text and press `esc`
    * added text will appear on every line after a second
* [insert] `ctrl-w` delete word before cursor
* [insert] `ctrl-u` delete from cursor to beginning of line

## Indenting
* [insert] `ctrl-t` - current line forward
* [insert] `ctrl-d` - current line backward
* `10` + `shift->>` indent 10 lines
