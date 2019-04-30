'use strict';

const express = require('express');
const morgan = require('morgan');
const data = require('./data');

const app = express();
const PORT = 8080;

app.use(morgan('dev'));

const genres =['Action', 'Puzzle', 'Strategy', 'Casual', 'Arcade', 'Card'];

app.get('/apps', (req, res)=>{
  const sort = req.query.sort;
  const genre = req.query.genre;

  if (genre){
    if(!genres.includes(genre)){
      res.status(400).send('That Genre is not existent. PLease check it');
    }
    let results = data.filter(item=>item.Genres.includes(genre));
  

  }

});





app.listen(PORT, ()=>{
  console.log('The Portal has opened');
});

