const express = require('express');
    morgan = require('morgan');
const app = express();

let topMovies = [
  {
    title: 'Harry Potter and the Sorcerer\'s Stone',
  },
  {
    title: 'Lord of the Rings',
  },
  {
    title: 'Twilight',
  }
];

app.use(morgan('common'));

// GET requests
app.get('/', (req, res) => {
  res.send('Welcome to my movie club!');
});

app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.use(express.static('public'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});