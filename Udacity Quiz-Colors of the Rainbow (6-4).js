/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 *
 * Use only the splice() method to modify the rainbow variable:
 *  - remove "Blackberry"
 *  - add "Yellow" and "Green"
 *  - add "Purple"
 */

// your code goes here
var rainbow = ["Red", "Orange", "Blackberry", "Blue"];
rainbow.splice(-2, 1, "Yellow", "Green");
rainbow.splice(5, 0, "Purple"); //we may use push method but question want using only splice()

console.log(rainbow);
