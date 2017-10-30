# Grokking a program

## The `getTokens()` function
* `getTokens()` cleans up the string for processing
* changes characters to lower case and converts the string content to values suitable for `mostFrequentWord()`

## The `mostFrequentWord()` function
* Takes a `string` of `text` as argument
* Prepare `text` with `getTokens()` to clean up the syntax
* Iterate through `text` to get the count of each word in `text`
* Store word counts in an object literal `wordFrequencies`
* Iterate through the `wordFrequencies` object to find the maximum count value among all entries
* Return the key of the maximum value, i.e. the word that has the maximum count
