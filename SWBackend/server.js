
const planets = require("./planets");
const people = require("./people");
const films = require("./films");
const express = require('express'); // Importing express
const fs = require('node:fs');
const SQLProfiler = require('./sqlProfiler'); // Importing the SQLProfiler class
const bodyParser = require('body-parser'); // Importing body-parser to parse JSON bodies
const cors = require('cors'); // Importing CORS for handling cross-origin requests

const app = express();
app.use(cors()); // Use CORS to allow cross-origin requests
app.use(express.json());

// Set up the server to listen on port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:4173",
    "https://benbalogh98.github.io"
];

const headers = [
    "ContIndex",
    "ClientCode",
    "ClientName",
    "Client",
    "Service",
    "ClientPartnerName",
    "ServicePartnerName",
    "Office",
    "Department",
    "Staff",
    "Level",
    "SubDepartment",
    "Entity",
    "Industry",
    "ClientMarket",
    "Job",
    "Task",
    "ZIP",
    "ClientGroup",
    "Admin",
    "NonBill",
    "Billable",
    "TotalHours",
    "BillableAmount",
    "Cost",
    "Margin",
    "WIPDate"
];

app.post("/sql", async (req, res) => {
    debugger;
    res.setHeader("Access-Control-Allow-Origin", "https://benbalogh98.github.io");
    //res.setHeader("Access-Control-Allow-Origin", allowedOrigins.includes(req.header('origin').toLowerCase()) ? req.headers.origin : "");
    //res.setHeader('Content-Disposition', 'attachment; filename="example.txt"');
    //es.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'text/plain');
    const { header } = req.body;
    const sqlProfiler = new SQLProfiler(header);
    const resp = await sqlProfiler.walkHeaders();
    //const origin = allowedOrigins.includes(req.header('origin').toLowerCase()) ? req.headers.origin : "";

    res.send(resp);
});

app.get("/table", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173")
    fs.readFile("./table.txt", "utf-8", (err, data) => {
        const tableData = data.split("\n").map(row => row.split("\t"));
        let vmi = [];
        for (let i = 0; i < tableData.length; i++) {
            for (let y = i + 1; y < tableData.length; y++) {
                if (tableData[i][1] == tableData[y][1]) {
                    vmi.push(tableData[i]);
                }
            }

        }
        if (err) {
            console.error(err);
            res.status(500).send("Error reading file");
        } else {
            res.send(vmi);
        }
    });
});

// Create a route that sends a response when visiting the homepage
app.get('/', (req, res) => {
    res.send('<h1>Hello, Express.js Server!</h1>');
});




app.get("/planets", (req, res) => {
    const origin = allowedOrigins.includes(req.header('origin').toLowerCase()) ? req.headers.origin : "";
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.send(planets);
});

app.get("/people", (req, res) => {
    const origin = allowedOrigins.includes(req.header('origin').toLowerCase()) ? req.headers.origin : "";
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.send(people);
});

app.get("/films", (req, res) => {
    const origin = allowedOrigins.includes(req.header('origin').toLowerCase()) ? req.headers.origin : "";
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.send(films);
});