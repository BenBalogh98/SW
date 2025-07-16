const sql = require('mssql');
const fs = require('node:fs');
const { sql, poolPromise } = require('./sqlConnection');

class SQLProfiler {
    constructor() {
        this.headers = headers;
        this.config = config;
    }
    "SELECT client, COUNT(DISTINCT zip) AS distinct_b_values FROM [time_and_billing_system_v2].[dbo].[MarginReport] GROUP BY client HAVING COUNT(DISTINCT zip) > 1;"
    async getTableData() {
        try {
            const pool = await poolPromise;
            const result = await pool.request().query('SELECT * FROM YourTableName'); // Replace with your actual table name
            return result.recordset;
        } catch (err) {
            console.error('SQL Error: ', err);
            throw err;
        }
    }

    async getRelationshipType(header1, header2) {
        try {
            const pool = await poolPromise;
            const result = await pool.request()
                .query('SELECT client, COUNT(DISTINCT zip) AS distinct_b_values FROM [time_and_billing_system_v2].[dbo].[MarginReport] GROUP BY client HAVING COUNT(DISTINCT zip) > 1');
            return result.recordset;
        } catch (err) {
            console.error('SQL Error: ', err);
            throw err;
        }

    }

    async walkHeaders() {
        for (let i = 0; i < this.headers.length; i++) {

        }
    }

    async writeToFile(data) {
        const filePath = './table.txt';
        const formattedData = data.map(row => this.headers.map(header => row[header] || '').join('\t')).join('\n');
        fs.writeFileSync(filePath, formattedData, 'utf-8');
    }
}