const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');

const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');

const logger = require('./logger');

const express = require('express');
const app = express();

// Environtments
// console.log(`NODE_ENV===>>>: ${process.env.NODE_ENV}`);
// console.log(`App: ${app.get('env')}`);

// Midleware Build-in
app.use(express.json());
app.use(express.urlencoded({ extends: true }));
app.use(express.static('public'));

// Middleware third-party
app.use(logger);
app.use(helmet());

// Configuration
console.log(`Aplication Name: ${config.get('name')}`);
console.log(`Mail Server: ${config.get('mail.host')}`);
console.log('Mail Password:' + config.get('mail.password'));

// tell application is running in development/testing/staging/production.
if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  startupDebugger('Morgan enabeled...');
}

//DB works..
dbDebugger('Connected to the database...');

// list of courses
const courses = [
  { id: 1, name: 'tech' },
  { id: 2, name: 'software' },
  { id: 3, name: 'design' },
];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/courses', (req, res) => {
  res.send(courses);
});

app.post('/api/courses', (req, res) => {
  const { error } = validateCourses(req.body);

  if (error) return res.status(400).send(result.error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };

  courses.push(course);
  res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
  // Look up the course
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  // if not existing, return 404
  if (!course)
    return res.status(404).send('The Object with the givent ID wad not found');

  // if invalid, return 400 = bad request
  const { error } = validateCourses(req.body);
  if (error) return res.status(400).send(result.error.details[0].message);

  // Update couse
  course.name = req.body.name;
  // Return the updated course
  res.send(course);
});

function validateCourses(course) {
  // validate
  const schema = {
    name: Joi.string().min(3).required(),
  };

  return Joi.validate(course, schema);
}

app.delete('/api/courses/:id', (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));

  if (!course)
    return res.status(404).send('The Object with the givent ID wad not found');

  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);
});

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send('The Object with the givent ID wad not found');

  res.send(course); // result {"id":1,"name":"tech"}
});

app.get('/api/post/:year/:month', (req, res) => {
  res.send(req.query); // Result: querystring: http://localhost:3001/api/post/2022/07?sortBy=name >>> {sortBy: "name"}
});

// PORT
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// app.post();
// app.put();
// app.delete();
