
const planets = require("./planets");
const people = require("./people");
const films = require("./films");
const express = require('express'); // Importing express
const fs = require('node:fs');
const app = express(); // Creating an express app
const sql = require('mssql');
const SQLProfiler = require('./sqlProfiler'); // Importing the SQLProfiler class

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

app.get("/sql", async (req, res) => {
    const sqlProfiler = new SQLProfiler(headers);
    const resp = await sqlProfiler.walkHeaders();
    const origin = allowedOrigins.includes(req.header('origin').toLowerCase()) ? req.headers.origin : "";
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader('Content-Disposition', 'attachment; filename="example.txt"');
    res.setHeader('Content-Type', 'text/plain');
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

const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:4173",
    "https://benbalogh98.github.io"
];
// Set up the server to listen on port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
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