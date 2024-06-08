// Create web server
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path');

// Load the comments from the file
const comments = JSON.parse(fs.readFileSync(path.join(__dirname, 'comments.json'), 'utf8'));

// Serve the static files
app.use(express.static('public'));

// Get the comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

