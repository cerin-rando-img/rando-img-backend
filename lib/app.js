const express = require('express');
const app = express();

app.use(express.json());
var cors = require('cors');


app.use(require('./middleware/randomImage'));
app.use('/api/v1/pokemon', require('./routes/pokemon'));
app.use(cors());	
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
