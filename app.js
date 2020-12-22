const express = require('express')

const app = express();

// NOW YOU HAVE THE ABILITY TO CREATE ROUTES IN A VERY SIMPLE WAY

// ROUTES

app.get('/', (req, res) => {
    res.send('We are on homegit add README.md');
});

// HOW TO DO WE START LISTENING TO THE SERVER

app.listen(3000);
console.log('test nodemon');