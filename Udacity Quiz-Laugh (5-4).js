/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num) {
  /* finish the function expression */
  var string = "";
  for (i = 0; i < +num; i++) {
    string += "ha";
  }
  return string + "!";
};

console.log(laugh(10));
