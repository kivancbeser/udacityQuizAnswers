/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
  name: "Kivanc Beser",
  friends: 5,
  messages: ["Test", "Test2"],
  postMessage(message) {
    facebookProfile.messages.push(message);
  },
  deleteMessage(index) {
    facebookProfile.messages.splice(index, 1);
  },
  addFriend() {
    facebookProfile.friends += 1;
  },
  removeFriend() {
    facebookProfile.friends = facebookProfile.friends - 1;
  }
};

facebookProfile.removeFriend(); //call removeFriend method and decrease 1
console.log(facebookProfile.friends); //
