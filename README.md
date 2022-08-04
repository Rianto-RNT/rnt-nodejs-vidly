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

## Getting Started

- Node is a runtime environment for executing JS code.
- Essentially, Node is a C++ program that embeds Chrome’s v8 engine, the fastest JS engine in the world.
- We use Node to build fast and scalable networking applications. It’s a perfect choice for building RESTful services.
- Node applications are single-threaded. That means a single thread is used to serve all clients.
- Node applications are asynchronous or non-blocking by default. That means when the application involves I/O operations (eg accessing the ﬁle system or the network), the thread doesn’t wait (or block) for the result of the operation. It is released to serve other clients.
- This architecture makes Node ideal for building I/O-intensive applications.
- You should avoid using Node for CPU-intensive applications, such as a video encoding service. Because while executing these operations, other clients have to wait for the single thread to ﬁnish its job and be ready to serve them.
- In Node, we don’t have browser environment objects such as window or the document object. Instead, we have other objects that are not available in browsers, such as objects for working with the ﬁle system, network, operating system, etc.

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
- [VSCode](https://code.visualstudio.com) - Free source-code editor made by Microsoft
- [Git](https://git-scm.com) - Open source distributed version control system

## NPM Packages

- [rnt-example-point](https://github.com/)

## Development Process

- Node Module System
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

## Articles

- [jshint](https://jshint.com/) - This is JSHint, a tool that helps to detect errors and potential problems in your JavaScript code.
- [nodejs-path](https://nodejs.org/dist/latest-v16.x/docs/api/path.html)
- [nodejs-os](https://nodejs.org/dist/latest-v16.x/docs/api/os.html)
- [nodejs-file-system](https://nodejs.org/dist/latest-v16.x/docs/api/fs.html)
- [nodejs-events](https://nodejs.org/dist/latest-v16.x/docs/api/fs.html)
- [nodejs-http](https://nodejs.org/dist/latest-v16.x/docs/api/http.html)
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
