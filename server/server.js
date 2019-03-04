const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const config = require('./config/config');
const postgresDB = require('./config/postgresDB');

const app = express();

// Connecting to postgres db
postgresDB.connect();

// Passport middleware to authenticate users
app.use(passport.initialize());
// Body parser middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../client/build/index.html'));
});

const port = process.env.PORT || config.get('http.port');

app.listen(port, () => console.log(`Server running on port ${port}`));