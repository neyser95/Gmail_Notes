const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const port = process.env.PORT || 5000;

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.get('/api/greeting', (req, res) => {
  res.json({res: 'HELLO FROM EXPRESS'});
});

app.listen(port, () => console.log(`Server running on port ${port}`));