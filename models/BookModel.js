'use strict'

const mongoose = require('mongoose')
//extracting the schema property from the mongoose object
const {Schema} = mongoose;

//create a something schema, defin how our somehting objects will be structured

const bookSchema = new Schema({//properties of something is instantiated below
    title : {type: String, required: true},
    description: {type: String, required: true},
    status: {type: String, required: true}
});


//define our model

//this will give functionality 
const Book = mongoose.model('Books', bookSchema);
module.exports = Book;

