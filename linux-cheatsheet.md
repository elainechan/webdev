# Linux Commands

* `man [command]`    # show manual for command

* `echo`

* `cat [file]`    # stream file in shell
* `cat ->[file]`
    * opens file in shell and awaits edit
    * when done editing press `[return]` and `[ctrl-d]`

* `ls`     # list contents of working rirectory
    * with `-a`    # show hidden files
    * with `-l` # show long-form file info

* `less [file]`

* `mv [old-file] [new-file]`    # rename file

* `touch [file]`    # create new file

* `mkdir [directory]`    # create new directory

* `grep -rn [string] *`    # seach for string in files recursively

* `strace` examing processes, OSX equivalent `dtruss` or `dtrace`

* `which [app]`  # request location of the program in the filesystem
* `whereis [app]` # looks for packages in a wider range of system directories
