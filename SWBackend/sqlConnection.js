const sql = require('mssql');

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

module.exports = {
  sql, poolPromise
};