# Linux Commands

* `man [command]`    # show manual for command
* `cd` # change directory
    * with `-`  # to previous directory
    * with `..` # to parent directory
    * with `../folder` to sibling directory
    * with `~/folder` relative to home directory
* `shutdown -r now` reboot
* `shutdown -h now` or `halt` sleep
* `poweroff` shutdown

### Traversing Directories
* `pushd [nextdir]` # push current dir into a list and change to `[nextdir]`
* `pushd .` push current dir into list
* `dirs` # display all directories in the stack
* `popd` # pop top-most dir from the stack 

### Inspecting Files

* `ls`     # list contents of working rirectory
    * with `-a`    # show hidden files
    * with `-l` # show long-form file info
    * with `li` # prints out the *inode* number
        * linked files have the same *inode* number
* `echo` used to modify command line prompt
* `cat [file]`    # stream file in shell
* `cat ->[file]`
    * opens file in shell and awaits edit
    * when done editing press `return` and `ctrl-d`
* `tac` # look at file backwards, starting with last line
* `head` # print first 10 lines of file by default
    * add `-n` (n = any number) to print n lines
* `tail` # print last 10 lines of file by default

* `less [file]`

* `which [program]`  # request location of the program in the filesystem
* `whereis [program]` # looks for packages in a wider range of system directories
* `ln [file1] [file2]` create a hard link to `file1`
    * with `-s` # create symbolic/soft link.

### Manipulating Files
* `mv [old-file] [new-file]`    # rename file
* `touch [file]`    # create new file
    * `touch -t 11031600 [file]` for timestamp of 4pm Nov 3
* `mkdir [directory]`    # create new directory
* `rm [file]` remove a file
    * with `-i` interactively remove; receive prompt before each removal (useful when removing many files)
* `rmdir [dir]` remove directory
* `rm -rf [dir]` remove directory and all its contents

* `grep -rn [string] *`    # seach for string in files recursively

### Examining Processes
* `strace` examing processes, OSX equivalent `dtruss` or `dtrace`

### Mac OSX
* `ifconfig | grep inet` # find IP address

#### Notes from Ubuntu install
* If you continue the following will be written to disks
* Partition tables of following devices are changed:
* LVM VG ubuntu-vg, LV root
* LVM VG ubuntu-vg, LV swap_1
* MMC/SD card #1 (mmcblk0)
* Following partitions will be formatted:
* LVM VG ubuntu-vg, LV root as ext4
* LVM VG ubuntu-vg, LV swap_1 as swap
* partition #1 of MMC/SD card #1 (mmcblk0) as ESP
* partition #2 of MMC/SC card #1 (mmcblk0) as ext2
