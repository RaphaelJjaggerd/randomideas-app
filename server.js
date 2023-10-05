const express = require('express');
const app = express();
const port = 5000;

const ideas = [
  {
    id: 1,
    text: 'Positive NewsLetter, a news letter that only shares positive, uplfifting news',
    tag: ' Technology',
    username: 'TonyStark',
    date: '2022-01-02',
  },
  {
    id: 2,
    text: 'Milk carotns that turn a different color the older te milk gets.',
    tag: ' Inventions',
    username: 'SteveRogers',
    date: '2022-01-02',
  },
  {
    id: 3,
    text: 'ATM location app which lets you know where the closest ATM is and if it is in service',
    tag: ' Software',
    username: 'BruceBanner',
    date: '2022-01-02',
  },
];

app.get('/', (req, res) => {
  //res.send('Hello World'); //We are sending a string / text
  res.send({ message: 'Hello World' }); // we are sending a json object
});

app.listen(port, () => console.log(`Server Listening on port: ${port}`));
