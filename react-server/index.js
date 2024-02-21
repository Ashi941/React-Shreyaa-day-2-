const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Endpoint to handle form submission
app.post('/submit-form', (req, res) => {
  // Respond with 401 Unauthorized
  res.status(401).send('Unauthorized');
});

// Start the server
app.listen(port, () => {
  console.log(`Mock server listening at http://localhost:${port}`);
});
