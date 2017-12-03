// Exercise #1
// Write your solution below
var hashtag = '';

for (var counter = 0; counter <7; counter = counter + 1) {
    hashtag = hashtag + '#';
    console.log(hashtag);
}

/* 
Write your explanation for Exercise #1 here
The hashtag variable is initially given an empty string value ('') so 
that once the loop begins, the printed result will start at ('' + #) = #. Afterwards, 
the 'hashtag's to print will have one additonal "#" and so forth. 
The counter variable is give an inital value of 0. Every time the program loops,
the counter will be supplemented with a value of 1, up until it reaches 7. 
*/

/* Exercise #2 (write a function that checks 
    whether a number is odd or even)
*/
// Write your solution below
x = "your number";
    if (x%2===0) {
     console.log("The number is even!")
 } else {
     console.log("The number is odd!")
 };
/* 
All even numbers that are divided by 2 will have a remainder of 0. If the number inputted has a remainder of 0, the function will return 
"this number is even!"
If not, the function will return, "the number is odd!"
*/
