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

  let results;

  if (genre){
    if(!genres.includes(genre)){
      return res.status(400).send('That Genre is not existent. PLease check it');
    }
    results = data.filter(item=>item.Genres.includes(genre));
  }

  if(sort){
    const sortOptions = ['Rating', 'App'];
    if(!sortOptions.includes(sort)){
      return res.status(400).send('That is not a sort option. Possibliy check your casing');
    }
    results = results.sort( (a,b) => {
      return a[sort].toString().localeCompare(b[sort].toString(), 'en', {sensitivity: 'base', numeric: true});
    });
  }
  return  res.json(results);

});


app.use( (req, res) =>{
  res.status(404).send('That resource does not exist');
});


module.exports = app;
