/** 
// 1) LOADING A MODULE
const log = require("./logger");

// console.log(logger); // result >>> { log: [Function: log], endPoint: 'http://rnt-creative.io' }

// logger = 1; // testing jshint

log("message"); // result >>> message
*/

/** 
// 2) PATH MODULE
const path = require("path");

var pathObj = path.parse(__filename);

console.log(pathObj);
// result path >>>
  {
    root: 'D:\\',
    dir: 'D:\\Programming\\rnt-node-vidly-movie-api\\01-playground',
    base: 'app.js',
    ext: '.js',
    name: 'app'
  } 
*/

/** 
 // 3) OS MODULE
 const os = require("os");
 
 var totalMemory = os.totalmem();
 var freeMemory = os.freemem();
 
 // console.log("Total Memory:", totalMemory);
 
 // Template string
 // ES6 / ES2015 : ECMAScript 6
 console.log(`Total Memory:, ${totalMemory}`);
 console.log(`Free Memory:, ${freeMemory}`);
 // Result OS >>>
 // Total Memory:, 17111228416
 // Free Memory:, 8677928960
 */

// 4) FILE SYSTEM
/**

 const fs = require("fs");
 
 const files = fs.readdirSync("./");
 console.log(files);
 // result fs >>>  [ 'app.js', 'logger.js', 'playground.js' ]
 
 fs.readdir("$", function (err, files) {
   if (err) console.log("Error ===>>>", err);
   else console.log("Result ===>>>", files);
 });
 
 // Result fs with error status >>>
 // Error ===>>> [Error: ENOENT: no such file or directory, scandir 'D:\Programming\rnt-node-vidly-movie-api\01-playground\$'] {
 //     errno: -4058,
 //     code: 'ENOENT',
 //     syscall: 'scandir',
 //     path: 'D:\\Programming\\rnt-node-vidly-movie-api\\01-playground\\$'
 //   }
  */

/**
// 5) EVENTS
  
const EventEmitter = require("events"); // class

// Raise: logging (data: message)
const Logger = require("./logger");
const logger = new Logger();

// Register a listener
logger.on("messageLogged", (arg) => {
  console.log("Listener Called ===>>>", arg); // result >>> Listener Called ===>>> { id: 1, url: 'http://rnt-creative.com' }
});

logger.log("message");
*/

/**
 // 6) HTTP

*/
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("rnt creative");
    res.end();
  }

  if (req.url === "/api/rnt") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.listen(3000);

console.log("Listening on port 3000...");
