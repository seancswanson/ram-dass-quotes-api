const express = require('express');
const app = express();
const port = 3000;

const allQuotes = require('./data/all-quotes.json');

app.get('/', (req, res) => {
  res.send('Welcome!\n GET quotes from api/all, api/love, api/inspiration, api/relationship, api/death, api/other.\n All quotes have been sourced from https://www.ramdass.org/ram-dass-quotes/.\n This API is for educational purposes only.\n Sean C Swanson 2021 https://seancswanson.com.');
});

app.get('/api/all', (req, res) => {
  res.send(allQuotes.payload);
});

app.get('/api/love', (req, res) => {
  const loveQuotes = allQuotes.payload.filter(
    (quote) => quote.category === 'love'
  );
  console.log(loveQuotes);
  res.send(loveQuotes);
});

app.get('/api/inspiration', (req, res) => {
  const inspirationQuotes = (allQuotes.payload).filter((quote) => quote.category === 'inspiration');
  console.log(inspirationQuotes);
  res.send(inspirationQuotes);
});

app.get('/api/relationship', (req, res) => {
  const relationshipQuotes = (allQuotes.payload).filter((quote) => quote.category === 'relationship');
  console.log(relationshipQuotes);
  res.send(relationshipQuotes);
});

app.get('/api/death', (req, res) => {
  const deathQuotes = (allQuotes.payload).filter((quote) => quote.category === 'death');
  console.log(deathQuotes);
  res.send(deathQuotes);
});

app.get('/api/other', (req, res) => {
  const otherQuotes = (allQuotes.payload).filter((quote) => quote.category === 'other');
  console.log(otherQuotes);
  res.send(otherQuotes);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}!`);
});