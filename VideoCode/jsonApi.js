const express = require('express');

const app = express();

app.use(express.json());

const CANDIES = [
  {name: 'snickers', qty: 43, price: 1.50},
  {name: 'skittles', qty: 23, price: 0.99},
  {name: 'milky way', qty: 10, price: 1.25}
]

app.get('/candies', function(req, res){
  return res.json(CANDIES);
})

app.post('/candies', function(req, res){
  if(req.body.name.toLowerCase() === 'circus peanuts'){
    return res.status(403).json( { msg: 'Horrible Choice. Circus Peanuts Forbidden!' } )
  }
  CANDIES.push(req.body)
  return res.status(201).json(CANDIES);
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
});


