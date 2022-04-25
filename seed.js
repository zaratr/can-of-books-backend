'use strict'


require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
const Books = require('./models/BookModel.js');

async function seed()
{
        await Books.create({
            title: 'BookOfEli',
            description: 'Fastest gun slinger from the future',
            status: "Available"
    });
        await Books.create({
            title: 'Tombstone',
            description: 'fastest gun slingers in the west from the past',
            status: "Not-Available"
    });
        await Books.create({
            title: 'Back To the Future 2',
            description: 'Not a fast gun slinger',
            status: "Available"
    });

    mongoose.disconnect();
}
let checker = (someVar) =>{
    console.log("-------------------------->",someVar,"<---------------------------------");
    return someVar;
}
seed();