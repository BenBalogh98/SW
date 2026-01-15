import planets from "./planets";
import films from "./films";
import people from "./people";
//const planets = require("./planets");
//const people = require("./people");
//const films = require("./films");
const express = require('express');
const cors = require('cors');

const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:4173",
    "http://localhost:5173/SW",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:5173/SW",
    "http://127.0.0.1:4173",
    "https://benbalogh98.github.io"
];

const app = express();

app.use(cors({
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);

        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${process.env.PORT || port}`);
});

app.get("/planets", (req, res) => {
    res.send(planets);
});

app.get("/planets/:name", (req, res) => {
    const name = req.params.name.toLowerCase();
    const planet = planets.find(p => p.name.toLowerCase() === name);

    if (!planet) {
        return res.status(404).send({ error: "Planet not found" });
    }

    res.send(planet);
});

app.get("/people", (req, res) => {
    res.send(people);
});

app.get("/films", (req, res) => {
    res.send(films);
});