// var x =;
// console.log(__dirname); // result >>> D:\Programming\rnt-node-vidly-movie-api\01-playground
// console.log(__filename); // result >>> D:\Programming\rnt-node-vidly-movie-api\01-playground\logger.js

var url = "http://rnt-creative.io";

function log(message) {
  // Send an HTTP request
  console.log(message);
}

module.exports = log;
// module.exports.log = log;
// module.exports.endPoint = url;
