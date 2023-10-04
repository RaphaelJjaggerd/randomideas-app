const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  //res.send('Hello World'); //We are sending a string / text
  res.send({ message: 'Hello World' }); // we are sending a json object
});

app.listen(port, () => console.log(`Server Listening on port: ${port}`));

const ideas = [{}];
