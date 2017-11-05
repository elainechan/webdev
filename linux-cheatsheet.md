# Linux Commands

* `man [command]`    # show manual for command
* `cd` # change directory
    * with `-`  # to previous directory
    * with `..` # to parent directory
    * with `../folder` to sibling directory
    * with `~/folder` relative to home directory

* `echo`

* `cat [file]`    # stream file in shell
* `cat ->[file]`
    * opens file in shell and awaits edit
    * when done editing press `[return]` and `[ctrl-d]`

* `ls`     # list contents of working rirectory
    * with `-a`    # show hidden files
    * with `-l` # show long-form file info
    * with `li` # prints out the *inode* number
        * linked files have the same *inode* number

* `less [file]`

* `mv [old-file] [new-file]`    # rename file

* `touch [file]`    # create new file

* `mkdir [directory]`    # create new directory

* `grep -rn [string] *`    # seach for string in files recursively

* `strace` examing processes, OSX equivalent `dtruss` or `dtrace`

* `which [program]`  # request location of the program in the filesystem
* `whereis [program]` # looks for packages in a wider range of system directories
* `ln [file1] [file2]` create a hard link to `file1`
    * with `-s` # create symbolic/soft link.
