require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Body Parser Middleware that allows us to accept form data ro raw json
app.use(express.json()); // Allows us to send raw json to the server.
app.use(express.urlencoded({ extended: false })); // Allows us to send/request form data

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to The RandomIdeas API' });
});

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);

app.listen(port, () => console.log(`Server Listening on port: ${port}`));
