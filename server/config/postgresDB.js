const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL || 'postgres://localhost:5432/gmail-notes',
  ssl: true,
});

module.exports = client;