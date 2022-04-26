'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./models/BookModel.js');
//schema

mongoose.connect(process.env.DB_URL);
//add validation to confirm we are wired to mongodb
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'cennection error:'));
db.once('open', function(){
    console.log('Mongoose is connected');
});
//middleware
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3002;

async function getBooks(request, response, next)
{
    try{
        let queryObj = {};
        if(request.query.result){
            queryObj.description = request.query.description;
        }
        let results = await Book.find();
        //let results = await Book.find(queryObj);
        response.status(200).send(results);
    }catch(error)
    {
        next(error);
    }
}

async function addBook(request, response, next)
{
  try {
    //  get info from body of request object
    const newBook = request.body.newBook;

    //  create a record and save
    const book = new Book(
      request.body.newBook.title, 
      request.body.newBook.description,
      request.body.newBook.status
      );
    book.save();
  }
  catch (error)
  {
    console.log('An error occurred in addBook callback: ', error.message);
    next(error);
  }
}

app.post('/add', addBook);

app.get('/books', getBooks);

app.get('/', (request, response) => {
    response.send('test requested');
});
app.get('*', (request, reponse) => response.status(404).send('not correct webpage. try again'))

app.listen(PORT, () => console.log(`listening on ${PORT}`));