
const planets = require("./planets");
const people = require("./people");
const films = require("./films");
const express = require('express'); // Importing express
const app = express(); // Creating an express app

// Create a route that sends a response when visiting the homepage
app.get('/', (req, res) => {
    res.send('<h1>Hello, Express.js Server!</h1>');
});

// Set up the server to listen on port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get("/planets", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173")
    res.send(planets);
});

app.get("/people", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173")
    res.send(people);
});

app.get("/films", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173")
    res.send(films);
});