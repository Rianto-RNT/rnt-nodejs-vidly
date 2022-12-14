<h1 align="center">
  <br>
  Vidly: Simple movies RESTful API. 
  <br>
</h1>

<h4 align="center"> Build fast, scalable and secure RESTful services with Node, Express and MongoDB, from setup to production for Vidly RESTful Application Programming Interface (API), which is a built on top of <a href="https://nodejs.org/" target="_blank">Node.js</a>.</h4>

 <p align="center">
 <a href="#deployed-version">Demo</a> •
  <a href="#api-usage">API Usage</a> •
  <a href="#deployment">Deployment</a> •
  <a href="#development-process">Development Process</a> •
  <a href="#installation">Installation</a> •
  <a href="#build-with">Build With</a> •
  <a href="#npm-packages">NPM Packages</a> •
  <a href="#demonstration">Demonstration</a> •
  <a href="#future-updates">Future Updates</a> • 
  <a href="#known-bugs">Known Bugs</a> • 
  <a href="#acknowledgement">Acknowledgement</a>
</p>

## Deployed Version

Live demo (Feel free to visit) 👉 :

- [Vidly - RESTful API](https://coming-soon-for-deploy)

## API Usage

Check:

[API Documentation Postman (comming soon)](https://coming-soon-for-deploy)

[API Documentation Swagger (comming soon)](https://coming-soon-for-deploy)

for more info.

## Deployment

The website is deployed with build into Heroku. Below are the steps taken:

1. rnt-example-point

## Installation

You can fork the app or you can git-clone the app into your local machine. Once done that, please install all the dependencies by running

```sh
$ cd rnt-vidly
$ npm i
```

## Run App in Development

```sh
$ cd rnt-vidly
$ npm start
```

## Build With

- [Node.js](https://nodejs.org/en) - JS runtime environment
- [Express.js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [MongoDB](https://www.mongodb.com/) - Cloud-hosted NoSQL database service
- [Postman](https://www.getpostman.com/) - API testing
- [VSCode](https://code.visualstudio.com) - Free source-code editor made by Microsoft
- [NPM](https://www.npmjs.com/) - Software Package Manager and Installer (Node.js)
- [Git](https://git-scm.com) - Open source distributed version control system

## NPM Packages

- [underscore](https://github.com/jashkenas/underscore)
- [mongoose](https://github.com/Automattic/mongoose)
- [nodemon](https://github.com/remy/nodemon)
- [prettier](https://github.com/prettier/prettier)
- [joi](https://github.com/sideway/joi)
- [dotenv](https://github.com/motdotla/dotenv)
- [helmet](https://github.com/helmetjs/helmet)
- [morgan](https://github.com/expressjs/morgan)
- [rc](https://github.com/dominictarr/rc)
- [config](https://github.com/node-config/node-config)
- [colors](https://github.com/Marak/colors.js)
- [fawn](https://github.com/e-oj/Fawn)
- [joi-objectid](https://github.com/mkg20001/joi-objectid)
- [rnt-example-point](https://github.com/)

## Development Process

### 1) Getting Started

- Node is a runtime environment for executing JS code.
- Essentially, Node is a C++ program that embeds Chrome's v8 engine, the fastest JS engine in the world.
- We use Node to build fast and scalable networking applications. It's a perfect choice for building RESTful services.
- Node applications are single-threaded. That means a single thread is used to serve all clients.
- Node applications are asynchronous or non-blocking by default. That means when the application involves I/O operations (eg accessing the ﬁle system or the network), the thread doesn't wait (or block) for the result of the operation. It is released to serve other clients.
- This architecture makes Node ideal for building I/O-intensive applications.
- You should avoid using Node for CPU-intensive applications, such as a video encoding service. Because while executing these operations, other clients have to wait for the single thread to ﬁnish its job and be ready to serve them.
- In Node, we don't have browser environment objects such as window or the document object. Instead, we have other objects that are not available in browsers, such as objects for working with the ﬁle system, network, operating system, etc.

### 2) Node Module System (Node Core)

- We don't have the window object in Node.
- The global object in Node is “global”.
- Unlike browser applications, variables we deﬁne are not added to the “global”object.
- Every ﬁle in a Node application is a module. Node automatically wraps the code in each ﬁle with an IIFE (Immediately-invoked Function Expression) to create scope. So, variables and functions deﬁned in one ﬁle are only scoped to that ﬁle and not visible to other ﬁles unless explicitly exported.
- To export a variable or function from a module, you need to add them to

module.exports:

```sh
  module.exports.sayHello = sayHello;
```

- To load a module, use the require function. This function returns the module.exports object exported from the target module:

```sh
const logger = require('./logger');
```

- Node has a few built-in modules that enable us to work with the ﬁle system, path objects, network, operating system, etc.
- EventEmitter is one of the core classes in Node that allows us to raise (emit) and handle events. Several built-in classes in Node derive from EventEmitter.
- To create a class with the ability to raise events, we should extend EventEmitter:

```sh
 class Logger extends EventEmitter {

 }
```

- Global object
- Modules
- Creating a Module
- Loading a Module
- Module Wrapper Function
- Module Path (lighlight)
  - Path
- OS module
  - Operating system
- File system module
  - File system
- Events module
  - Events
  - Event Arguments
- Http module
  - Http
  - Stream

### 3) Node Packages Manager (NPM)

- Every Node application has a package.json ﬁle that includes metadata about the application. This includes the name of the application, its version, dependencies, etc.
- We use NPM to download and install 3rd-party packages from NPM registry:
- All the installed packages and their dependencies are stored under node_modules folders. This folder should be excluded from the source control.
- Node packages follow semantic versioning: major.minor.patch
- Install NPM on machine using terminal

- Create Package.json file

```sh
$ npm init
or
$ npm init --yes or npm init -y
```

- Installing a node package

```sh
$ npm i <rnt-package-name> or npm install <rnt-package-name>
```

- Using a Package
- Package dependencies

- Npm packages and source control

```sh
$ npm i
or
$ npm install
```

```sh
$ git init
$ git status
$ git add .
$ git commit -m "<rnt-commit-message>"
```

- Semantic versioning (SemVer)
  - Patch >>> use for bugs fixing then increase patch version (6.5.1 to 6.5.2)
  - Minor >>> Adding new features without break an existing APIs then increase the Minor version (6.5.1 to 6.6.0)
  - Major >>> If potentialy break the existing application depend upon version of application then increase the Major version (6.5.1 to 7.0.0)

```sh
  "dependencies": {
    "mongoose": "^6.5.1", // Major.Minor.Patch
    "underscore": "^1.13.4" // Major.Minor.Patch
  }
```

- Listing the installed Packages

```sh
$ npm list
or
$ npm list --depth=0
```

- Viewing Registry info for a package

```sh
$ npm view <rnt-package-name>
or
$ npm view <rnt-package-name> dependencies
$ npm view <rnt-package-name> versions
```

- Installing a specific version of a package

```sh
$ npm i <rnt-packages-name>@<rnt-packages-version>
// example: npm i mongoose@2.4.2 >>> downgrade or upgrade package version
```

- Updating local packages

```sh
$ npm outdated
example:
result >>>
Package     Current  Wanted  Latest  Location                 Depended by
underscore    1.4.0  1.13.4  1.13.4  node_modules/underscore  02-npm-demo

$ npm update
```

```sh
// update to latest version of packages
$ npm i -g npm-check-updates
$ npm-check-updates
or
$ ncu -u
// to install new versions. after update and run:
$ npm install
or
$ npm i
// check any outdated package again
$ npm outdated
```

- Dev Dependencies

```sh
$ npm i <rnt-packages-name> --save-dev
```

- Uninstalling package

```sh
$ npm uninstall <rnt-packages-name>
or
$ npm un <rnt-packages-name>
```

- Working with global packages

```sh
$ npm install -g <rnt-packages-name>
or
$ npm i -g <rnt-packages-name>

// Outdated global package
$ npm -g outdated

// Uninstalling global package
$ npm un -g <rnt-packages-name>
```

- Publishing a package

```sh
// Create an account at npm
$ npm adduser
or
$ npm login
// Add username and password
Username:------
Password:------
```

```sh
$ mkdir <rnt-lib>
$ cd <rnt-lib-directory>
$ npm init -y
$ touch index.js

// In index.js file add line of code down below
module.exports.add = function (a, b) {
  return a + b;
};

$ npm publish

// Create a new folder to install new library/package that have been publish at npm

$ mkdir <node-app-directory>
$ cd <node-app-directory>
$ npm init -y
$ npm install 03-rnt-lib / npm i 03-rnt-lib
$ touch index.js

// In index.js load the node module
var rnt = require("03-rnt-lib");
// and then run index.js
```

- Updating a published package

```sh
// Example: New major/minor/patch version number
$ npm version major
or
$ npm version minor
or
$ npm version patch

// Case: we will update the minor version number

// In library directory
$ npm version minor
// result >>> from version 1.0.0 to 1.1.0

// Publish new version
$ npm publish
```

- Publish result
- [![](https://github.com/Rianto-RNT/rnt-nodejs-vidly/blob/main/00-documentation-assets/images-file/publish-new-minor-version-03-rnt-lib.png)](https://github.com/Rianto-RNT/rnt-nodejs-vidly)

### 4) Building RESTful APIs using Express

- Introduction
- RESTful services (Representational State Transfer)
- Introducing Express
- Build simple web server
- Nodemon - implementing to app
- Environtment variable (ENV)
  - Setup PORT
- Route Parameters
  - Query string
- Handling HTTP GET requests
  - data response
  - error response
- Handling HTTP POST requests
- Calling endpoints using postman
- Input validation
- Handling HTTP PUT requests
- Handling HTTP DELETE requests
- RECAP
- REST deﬁnes a set of conventions for creating HTTP services:
- POST: to create a resource
- PUT: to update it
- GET: to read it
- DELETE: to delete it
- Express is a simple, minimalistic and lightweight framework for building web servers.

```sh
# // Build a web server
const express = require('express');
const app = express();
```

```sh
# // Creating a course
app.post('/api/courses', (req, res) => {
# // Create the course and return the course object
  res.send(course);
```

});

```sh
# // Getting all the courses
app.get('/api/courses', (req, res) => {
# // To read query string parameters (?sortBy=name)
  const sortBy = req.query.sortBy;

# // Return the courses
  res.send(courses);
});
```

```sh
#// Getting a single course
app.get('/api/courses/:id', (req, res) => {
  const courseId = req.params.id;

# // Lookup the course
# // If not found, return 404
  res.status(404).send('Course not found.');

# // Else, return the course object
  res.send(course);
});
```

```sh
#// Updating a course
app.put(‘/api/courses/:id’, (req, res) => {
# // If course not found, return 404, otherwise update it
# // and return the updated object.
});
```

```sh
# // Deleting a course
app.delete(‘/api/courses/:id’, (req, res) => {
# // If course not found, return 404, otherwise delete it
# // and return the deleted object.
});
```

```sh
# // Listen on port 3000
app.listen(3000, () => console.log(‘Listening…’));
```

- We use Nodemon to watch for changes in ﬁles and automatically restart the node process.
- We can use environment variables to store various settings for an application. To read an environment variable, we use process.env.

```sh
# // Reading the port from an environment variable
const port = process.env.PORT || 3000;
app.listen(port);
```

- You should never trust data sent by the client. Always validate! Use Joi package to perform input validation.

### 5) Express Advanced Topic

- Middleware
- Creating custom middleware
- Build-in Midlleware
  - express.static
  - express.json
  - express.urlencoded
- Third-party midleware
  - Helmet
  - Morgan
- Environtments
  - NODE_ENV
  - env in running production, testing, staging, or development
- Configuration
  - Install config
  - Implementing config
- Debugging
- Templating Engines
- RECAP
  - A middleware function is a function that takes a request object and either terminates the request/response cycle or passes control to another middleware function.
  - Express has a few built-in middleware functions:
  - json(): to parse the body of requests with a JSON payload
  - urlencoded(): to parse the body of requests with URL-encoded payload
  - static(): to serve static ﬁles
  - You can create custom middleware for cross-cutting concerns, such as logging, authentication, etc

### 6) Asynchronous in Javascript

- Synchronous vs asynchronous code
- Pattern for dealing with asynchronous code
- Callbacks
- Callback Hell
- Named function to rescue
- Promises
- Replacing Callbacks with Promises
- Consuming Promises
- Creating settled Promises
- Running parallel promisses
- Async and Await

### 7) CRUD Operations Using MongoDB

- Introduction to mongodb
- Installing mongodb in our machine
- Connecting to mongodb
- Schema
  - Type
    - String
    - Number
    - Date
    - Buffer
    - Boolean
    - ObjectId
    - Array
- Models
- Saving a Doucument
- Querying Documents
- Comparison query operators
- Logical query operators
- Regular Expression (Regex)
- Counting
- Pagination
- Install MongoDb database tools on PC
  - To [install](https://www.mongodb.com/try/download/database-tools?tck=docs_databasetools)
  - Setup path: (mostly C:\Program Files\MongoDB\Tools\[version]\bin)
- Import json data to collection

```sh
$ mongoimport --db <database-name> --collection courses --drop --file <file.json-name-or-path-name> --jsonArray

# or

// Add json data to collection using mongo commpass manually
```

- Get Array data from database collection
- Updating Document - query first
- Updating document - update first
- Removing document
- RECAP
- MongoDB is an open-source document database. It stores data in ﬂexible, JSONlike documents.
- In relational databases we have tables and rows, in MongoDB we have
  collections and documents. A document can contain sub-documents.
- We don’t have relationships between documents.
- To connect to MongoDB:

```sh
// Connecting to MongoDB
const mongoose = require(‘mongoose’);
mongoose.connect(‘mongodb://localhost/playground')
   .then(() => console.log(‘Connected…’))
   .catch(err => console.error(‘Connection failed…’));
```

- To store objects in MongoDB, we need to deﬁne a Mongoose schema ﬁrst. The schema deﬁnes the shape of documents in MongoDB.

```sh
// Deﬁning a schema
const courseSchema = new mongoose.Schema({
     name: String,
     price: Number
});
```

- We can use a SchemaType object to provide additional details:

```sh
// Using a SchemaType object
const courseSchema = new mongoose.Schema({

    isPublished: { type: Boolean, default: false }
});
```

- Supported types are: String, Number, Date, Buffer (for storing binary data), Boolean and ObjectID.
- Once we have a schema, we need to compile it into a model. A model is like a class. It’s a blueprint for creating objects:

```sh
// Creating a model
const Course = mongoose.model(‘Course’, courseSchema);
```

- CRUD Operations

```sh
// Saving a document
let course = new Course({ name: ‘…’ });
course = await course.save();
```

```sh
// Querying documents
const courses = await Course
   .ﬁnd({ author: ‘Mosh’, isPublished: true })
   .skip(10)
   .limit(10)
   .sort({ name: 1, price: -1 })
   .select({ name: 1, price: 1 });
```

```sh
// Updating a document (query ﬁrst)
const course = await Course.ﬁndById(id);
if (!course) return;
course.set({ name: ‘…’ });
course.save();
```

```sh
// Updating a document (update ﬁrst)
const result = await Course.update({ _id: id }, {
    $set: { name: ‘…’ }
});
```

```sh
// Updating a document (update ﬁrst) and return it
const result = await Course.ﬁndByIdAndUpdate({ _id: id }, {
    $set: { name: ‘…’ }
}, { new: true });
```

```sh
// Removing a document
const result = await Course.deleteOne({ _id: id });
const result = await Course.deleteMany({ _id: id });
const course = await Course.ﬁndByIdAndRemove(id);
```

### 8) Mongoose Data Validation

- Validation
- Build-in Validators
- custom validators
- Validation errors
- SchemaType Options
- RECAP
- When deﬁning a schema, you can set the type of a property to a SchemaType object. You use this object to deﬁne the validation requirements for the given property.

```sh
// Adding validation
new mongoose.Schema({
    name: { type: String, required: true }
})
```

- Validation logic is executed by Mongoose prior to saving a document to the database. You can also trigger it manually by calling the validate() method.
- Built-in validators:
- Strings: minlength, maxlength, match, enum
- Numbers: min, max
- Dates: min, max
- All types: required

```sh
// Custom validation
tags: [
     type: Array,
     validate: {
         validator: function(v) { return v && v.length > 0; },
         message: ‘A course should have at least 1 tag.’
     }
]
```

- If you need to talk to a database or a remote service to perform the validation, you need to create an async validator:

```sh
validate: {
  isAsync: true
  validator: function(v, callback) {
       // Do the validation, when the result is ready, call the callback
       callback(isValid);
  }
}
```

- Other useful SchemaType properties:
  - Strings: lowercase, uppercase, trim
  - All types: get, set >>> to deﬁne a custom getter/setter

```sh
    price: {
         type: Number,
         get: v => Math.round(v),
         set: v => Math.round(v)
    }
```

### 8) Mongoose - Modeling Relationships Between Connected Data

- Modelling relationships
- Referencing document
- Population
- Embedding documents
- Using an Array of Sub-documents
- RECAP
- To model relationships between connected data, we can either reference a document or embed it in another document.
- When referencing a document, there is really no relationship between these two documents. So, it is possible to reference a non-existing document.
- Referencing documents (normalization) is a good approach when you want to enforce data consistency. Because there will be a single instance of an object in the database. But this approach has a negative impact on the performance of your queries because in MongoDB we cannot JOIN documents as we do in relational databases. So, to get a complete representation of a document with its related documents, we need to send multiple queries to the database.
- Embedding documents (denormalization) solves this issue. We can read a complete representation of a document with a single query. All the necessary data is embedded in one document and its children. But this also means we’ll have multiple copies of data in different places. While storage is not an issue these days, having multiple copies means changes made to the original document may not propagate to all copies. If the database server dies during an update, some documents will be inconsistent. For every business, for every problem, you need to ask this question: “can we tolerate data being inconsistent for a short period of time?” If not, you’ll have to use references. But again, this means that your queries will be slower.

```sh
// Referencing a document
const courseSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: ‘Author’
    }
})
```

```sh
// Referencing a document
const courseSchema = new mongoose.Schema({
    author: {
        type: new mongoose.Schema({
             name: String,
             bio: String
        })
   }
})
```

- Embedded documents don’t have a save method. They can only be saved in the context of their parent.

```sh
// Updating an embedded document
const course = await Course.ﬁndById(courseId);
course.author.name = ‘New Name’;
course.save();
```

- We don’t have transactions in MongoDB. To implement transactions, we use a pattern called “Two Phase Commit”. If you don’t want to manually implement this pattern, use the Fawn NPM package:

```sh
// Implementing transactions using Fawn
try {
   await new Fawn.Task()
       .save(‘rentals’, newRental)
       .update(‘movies’, { _id: movie._id }, { $inc: numberInStock: -1 }})
       .run();
}
catch (ex) {
    // At this point, all operations are automatically rolled back
}
```

- ObjectIDs are generated by MongoDB driver and are used to uniquely identify a document. They consist of 12 bytes:
  - 4 bytes: timestamp
  - 3 bytes: machine identiﬁer
  - 2 bytes: process identiﬁer
  - 3 byes: counter
- ObjectIDs are almost unique. In theory, there is a chance for two ObjectIDs to be equal but the odds are very low (1/16 000,000) for most real-world applications.

```sh
// Validating ObjectIDs
mongoose.Types.ObjectID.isValid(id);
```

- To validate ObjectIDs using joi, use joi-objectid NPM package.

### Vidly RESTful API Application

- Setup application

```sh
$ mkdir <rnt-vidly-directory>
$ cd <rnt-vidly-directory>
$ npm init / npm init -y
$ npm i express joi@13.1.0
$ touch server.js
```

- rnt-vidly app - restructure/refactor the routes
- Add presistance to genre API
- Build the Customers API
- Restructuring the project and custom validator
- Transaction
- ObjectID (Explaination)
- Validating Object IDs
- Controllers and restructuring the code in customers
- Restructure Routes and add more controller

### number) rnt-example-point

## Articles

- [jshint](https://jshint.com/) - This is JSHint, a tool that helps to detect errors and potential problems in your JavaScript code.
- [nodejs-path](https://nodejs.org/dist/latest-v16.x/docs/api/path.html)
- [nodejs-os](https://nodejs.org/dist/latest-v16.x/docs/api/os.html)
- [nodejs-file-system](https://nodejs.org/dist/latest-v16.x/docs/api/fs.html)
- [nodejs-events](https://nodejs.org/dist/latest-v16.x/docs/api/fs.html)
- [nodejs-http](https://nodejs.org/dist/latest-v16.x/docs/api/http.html)
- [underscore-js-contains](https://underscorejs.org/#containsl)
- [about-semantic-versioning](https://docs.npmjs.com/about-semantic-versioning)
- [express-api-reference-request](https://expressjs.com/en/4x/api.html#req)
- [express-using-middleware](http://expressjs.com/en/guide/using-middleware.html#using-middleware)
- [express-Third-party-middleware](http://expressjs.com/en/guide/using-middleware.html#middleware.third-party)
- [javascript-regular-expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [mongodb-Installing-the-Database-Tools-on-Windows](https://www.mongodb.com/docs/database-tools/installation/installation-windows/)
- [mongodb-update-operators](https://www.mongodb.com/docs/manual/reference/operator/update/)
- [rnt-example-point](https://github.com)

## Future Updates

- rnt-example-point

## Known Bugs

Feel free to email me at rianto.rnt@gmail.com if you run into any issues or have questions, ideas or concerns.
Please enjoy and feel free to share your opinion, constructive criticism, or comments about my work. Thank you! 🙂

## Route Structure

1. Vidly RESTful API
   > /

# Acknowledgement

- This project is part of the online course I've taken at Udemy. Thanks to Mosh Hamedani! for creating this awesome course! Link to the course: [Node.js: The Complete Guide to Build RESTful APIs (2018)](https://www.udemy.com/course/nodejs-master-class/?utm_source=adwords&utm_medium=udemyads&utm_campaign=LongTail_la.EN_cc.ROW&utm_content=deal4584&utm_term=_._ag_77879424134_._ad_535397245863_._kw__._de_c_._dm__._pl__._ti_dsa-1007766171312_._li_20445_._pd__._&matchtype=&gclid=CjwKCAjw3K2XBhAzEiwAmmgrAtqKObI5qAyb5Yqut6WOgQReetC1WiFjiOAdJiQ644bCR48C9hsRAxoCZscQAvD_BwE)

```

```
