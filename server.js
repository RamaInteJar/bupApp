// Importing required modules
const express = require('express');
const app = express();
const port = 3000;

// Importing data models
const drinks = require('./models/drinks.js');
const food = require('./models/food.js');

app.set('view engine', 'ejs');

// Home route
app.get('/', (req, res) => {
    res.render('home-index.ejs');
});

// INDEX - Drinks
app.get('/drinks', (req, res) => {
    res.render('drinks/drinks-index.ejs', {
        drinks: drinks
    });
});

// INDEX - Food
app.get('/food', (req, res) => {
    res.render('food/food-index.ejs', {
        food: food
    });
});

// SHOW - Drink by ID
app.get('/drinks/:id', (req, res) => {
    res.render('drinks/drinks-show.ejs', {
        drink: drinks[req.params.id]
    });
});

// SHOW - Food by ID
app.get('/food/:id', (req, res) => {
    res.render('food/food-show.ejs', {
        meal: food[req.params.id]
    });
});

// Start the server
app.listen(port, () => {
    console.log('Server is running on port', port);
});
