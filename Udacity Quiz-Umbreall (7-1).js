/*
 * Programming Quiz: Umbrella (7-1)
 */

var umbrella = {
  color: "pink",
  isOpen: true,
  open: function() {
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
  },
  // your code goes here
  isClose: true,
  close: function() {
    if (umbrella.isClosed === true) {
      return "The umbrella is already closed!";
    } else {
      umbrella.isOpen = false;
      umbrella.isClosed = true;

      return "Julia closes the umbrella";
    }
  }
};
