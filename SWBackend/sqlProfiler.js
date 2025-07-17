const sql = require('mssql');
const fs = require('node:fs');

const config = {
    user: 'tbs_v2_admin',
    password: 'admin',
    server: 'logsearch.net', // e.g. 'localhost' or '192.168.1.10'
    database: 'time_and_billing_system_v2',
    options: {
        encrypt: true, // Use true for Azure or SSL connections
        trustServerCertificate: true // For local development
    },
    port: 49679 // Specify the port if not default
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Connected to SQL Server');
        return pool;
    })
    .catch(err => console.log('Database Connection Failed! Error: ', err));


class SQLProfiler {
    constructor(header) {
        this.testHeader = header;
        this.headers = [
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
    }



    async getRelationshipType(header1, header2) {
        //debugger;
        const pool1 = await poolPromise;
        const result1 = await pool1.request()
            .query(`SELECT ${header1}, COUNT(DISTINCT ${header2}) AS distinct_b_values FROM [time_and_billing_system_v2].[dbo].[MarginReport] GROUP BY ${header1} HAVING COUNT(DISTINCT ${header2}) > 1`);
        const rowCount1 = result1.recordset.toTable().rows;
        const pool2 = await poolPromise;
        const result2 = await pool2.request()
            .query(`SELECT ${header2}, COUNT(DISTINCT ${header1}) AS distinct_b_values FROM [time_and_billing_system_v2].[dbo].[MarginReport] GROUP BY ${header2} HAVING COUNT(DISTINCT ${header1}) > 1`);
        const rowCount2 = result2.recordset.toTable().rows;

        if (rowCount1.length > 0 && rowCount2.length > 0) {
            return "X";
        } else if (rowCount1.length > 0) {
            return "←";
        } else if (rowCount2.length > 0) {
            return "↑";
        } else {
            return "O";
        }
    }

    async walkHeaders() {
        //debugger;
        let response = "\t";
        for (let i = 0; i < this.headers.length; i++) {
            response += this.headers[i] + "\t";
        }
        response += "\n";
        for (let i = 0; i < this.headers.length; i++) {
            const header1 = this.headers[i];
            response += header1 + "\t";
            for (let j = i + 1; j < this.headers.length; j++) {
                const header2 = this.headers[j];
                const relationshipType = await this.getRelationshipType(header1, header2);
                response += `${relationshipType}\t`;
            }
            response += "\n";
        }
        return response;
    }

    async writeToFile(data) {
        const filePath = './table.txt';
        const formattedData = data.map(row => this.headers.map(header => row[header] || '').join('\t')).join('\n');
        fs.writeFileSync(filePath, formattedData, 'utf-8');
    }
}

module.exports = SQLProfiler;