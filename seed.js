'use strict'


require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
const Books = require('./models/BookModel.js');

async function seed()
{
        await Books.create({
            title: 'noName',
            description: 'test book',
            status: "checkedout"
    });
        await Books.create({
            title: 'noName2',
            description: 'test2 book',
            status: "checkedout2"
    });

    mongoose.disconnect();
}
let checker = (someVar) =>{
    console.log("-------------------------->",someVar,"<---------------------------------");
    return someVar;
}
seed();