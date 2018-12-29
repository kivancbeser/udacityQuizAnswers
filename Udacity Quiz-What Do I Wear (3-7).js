/*
 * Programming Quiz: What do I Wear? (3-7)
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

// Write your if/else code here
if ( (shirtWidth > 17 && shirtWidth < 20 ) && (shirtLength > 27 && shirtLength < 29) && (shirtSleeve > 8.12 && shirtSleeve < 8.38) ) { 
    console.log("S");
}
else if ( (shirtWidth >19 && shirtWidth < 22) && (shirtLength > 28 && shirtLength < 30) && (shirtSleeve > 8.37 && shirtSleeve < 8.63) ) { 
      console.log("M");
}
else if ( (shirtWidth >21 && shirtWidth < 24) && (shirtLength > 29 && shirtLength < 31) && (shirtSleeve > 8.62 && shirtSleeve < 8.88) ) {
      console.log("L");
}
else if ( (shirtWidth >23 && shirtWidth < 26) && (shirtLength > 30 && shirtLength < 33) && (shirtSleeve > 8.87 && shirtSleeve < 9.63) ) {
      console.log("XL");
}
else if ( (shirtWidth >25 && shirtWidth < 28) && (shirtLength > 32 && shirtLength < 34) && (shirtSleeve > 9.62 && shirtSleeve < 10.13) ) { 
      console.log("2XL");
}
else if ( shirtWidth >= 28 && shirtLength >= 34 && shirtSleeve >= 10.13 ) { 
      console.log("3XL");
}
else { 
      console.log("N/A");
}
