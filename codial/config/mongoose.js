const mongoose = require('mongoose'); 


mongoose.connect('mongodb://localhost/codial_development');

const db = mongoose.connection;
db.on('error', console.error.bind(console , "Error connection :: Mongo DB"));


db.once('open' , function(){
    console.log('Connected to database ::MongoDB');
})

module.exports = db;