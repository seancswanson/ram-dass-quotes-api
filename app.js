const express = require('express');
var cors = require('cors')
var app = express()

app.use(cors())
const port = 3000;

const allQuotes = require('./data/all-quotes.json');
const allFoundations = require('./data/all-foundations.json');

app.get('/', (req, res) => {
  res.sendFile(
    __dirname + '/index.html'
  );
});

app.get('/api/foundations/all', (req, res) => {
  res.send(allFoundations.payload);
});

app.get('/api/quotes/all', (req, res) => {
  res.send(allQuotes.payload);
});

app.get('/api/quotes/love', (req, res) => {
  const loveQuotes = allQuotes.payload.filter(
    (quote) => quote.category === 'love'
  );
  console.log(loveQuotes);
  res.send(loveQuotes);
});

app.get('/api/quotes/inspiration', (req, res) => {
  const inspirationQuotes = (allQuotes.payload).filter((quote) => quote.category === 'inspiration');
  console.log(inspirationQuotes);
  res.send(inspirationQuotes);
});

app.get('/api/quotes/relationship', (req, res) => {
  const relationshipQuotes = (allQuotes.payload).filter((quote) => quote.category === 'relationships');
  console.log(relationshipQuotes);
  res.send(relationshipQuotes);
});

app.get('/api/quotes/death', (req, res) => {
  const deathQuotes = (allQuotes.payload).filter((quote) => quote.category === 'death');
  console.log(deathQuotes);
  res.send(deathQuotes);
});

app.get('/api/quotes/other', (req, res) => {
  const otherQuotes = (allQuotes.payload).filter((quote) => quote.category === 'other things');
  console.log(otherQuotes);
  res.send(otherQuotes);
});

app.get('/api/quotes/random', (req, res) => {
  const randomIndex = Math.floor((Math.random() * allQuotes.payload.length));
  const randomQuote = allQuotes.payload[randomIndex];
  res.send(randomQuote);
})

app.listen(process.env.PORT || port, () => {
  console.log(`Ram Dass Quote App is listening at ${process.env.PORT || 'http://localhost:' + port}!`);
});