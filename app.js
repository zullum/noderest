const express = require('express')
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');
// NOW YOU HAVE THE ABILITY TO CREATE ROUTES IN A VERY SIMPLE WAY

// Middlewares
// usualy used for auth

// app.use('/posts', () => {
//     console.log('Hello from middleware');
//     return true;
// });

// IMPORT ROUTES

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// ROUTES

app.get('/', (req, res) => {
    res.send('We are on home');
});


// CONNECT TO DB

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB!');
});

// HOW TO DO WE START LISTENING TO THE SERVER

app.listen(3000);
console.log('test nodemon');