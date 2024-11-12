const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res){
  res.send("I am the homepage")
})

// To parse http request body on each request:
app.get('/dogs', function(req, res){
  console.log('You asked for dogs')
  console.log(req)
  res.send('Woof Woof')
})

app.get('/chickens', function sendChickens(req, res){
  res.send('get chickens')
})

app.post('/chickens', function createChicken(req, res){
  res.send('Created new chickens')
})

const greetings = {
  en: 'Hello',
  es: 'Hola',
  fr: 'Bonjour'
}

app.get('/greet/:lang', function getLanguage(req, res){
  const lang = req.params.lang;
  res.send(greetings[lang]);
})

app.get('/search', function(req, res){
  const {term = 'piggies', sort = 'top'} = req.query; 
  return res.send(`SEARCH PAGE! Term is: ${term}, sort is: ${sort}`)
})

app.get('/show-me-header', function(req, res){
  return res.send(req.headers)
})

app.get('/show-language', function(req, res){
  const lang = req.headers['accept-language']
  return res.send(`Your language preference is: ${lang}`)
})

app.post('/register', function(req, res){
  return res.send(req.body)
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
});


