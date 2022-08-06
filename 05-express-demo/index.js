const express = require('express');

const app = express();

app.use(express.json());

const rntArrays = [
  { id: 1, name: 'tech' },
  { id: 2, name: 'software' },
  { id: 3, name: 'design' },
];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/rnt', (req, res) => {
  res.send(rntArrays);
});

app.post('/api/rnt', (req, res) => {
  const rnt = {
    id: rntArrays.length + 1,
    name: req.body.name,
  };

  rntArrays.push(rnt);
  res.send(rnt);
});

app.get('/api/rnt/:id', (req, res) => {
  const rnt = rntArrays.find((c) => c.id === parseInt(req.params.id));
  if (!rnt) {
    res.status(404).send('The Object with the givent ID wad not found');
  }

  res.send(rnt); // result {"id":1,"name":"tech"}
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
