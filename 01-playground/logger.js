// var x =;
// console.log(__dirname); // result >>> D:\Programming\rnt-node-vidly-movie-api\01-playground
// console.log(__filename); // result >>> D:\Programming\rnt-node-vidly-movie-api\01-playground\logger.js

const EventEmitter = require("events"); // class

var url = "http://rnt-creative.io";

class Logger extends EventEmitter {
  log(message) {
    // Send an HTTP request
    console.log(message);

    // Raise an event
    this.emit("messageLogged", {
      id: 1,
      url: "http://rnt-creative.com",
    });
  }
}

module.exports = Logger;
// module.exports.log = log;
// module.exports.endPoint = url;
