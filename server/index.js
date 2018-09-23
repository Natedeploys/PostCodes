const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./routes/routes');

// Setup express app
const app = express();
app.use(bodyParser());
app.use(cors());
app.use('/', apiRoutes);

// Run express
app.listen(5000, err => {
  console.log('Express listening on port 5000');
});