const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
  origin:true
}));	
app.use(express.json());
app.use(require('./middleware/randomImage'));
app.use('/api/v1/pokemon', require('./routes/pokemon'));
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
