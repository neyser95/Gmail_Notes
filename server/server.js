const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const port = process.env.PORT || 5000;

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'../client/build/index.html'));
});

app.listen(port, () => console.log(`Server running on port ${port}`));