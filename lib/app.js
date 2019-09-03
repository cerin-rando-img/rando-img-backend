const express = require('express');
const app = express();

app.use(express.json());
var cors = require('cors');


app.use(require('./middleware/randomImage'));
app.use('/api/v1/pokemon', require('./routes/pokemon'));
var corsOptions = {
  origin: 'http://localhost:7890',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));	
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
