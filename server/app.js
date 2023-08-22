const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware Configuration
app.use(bodyParser.json());

// Error Handling (Optional)
app.use((err, req, res, next) => {
  res.status(err.status || 500).send({ error: err.message });
});

module.exports = app;

