/*
.split() Method
 Used for:
Splitting a string into an array of substrings, based on a specified separator.
 Syntax:
string.split(separator, limit);
    separator: The character or pattern to split the string on (e.g., " ", ",", "-")
    limit (optional): Limits the number of splits
*/
const str = "helloWorld! How are you today?"
const arr = str.split( ' ', str.length-1);
console.log(arr);
//[ 'helloWorld!', 'How', 'are', 'you', 'today?' ]
