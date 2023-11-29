const express = require('express');
const fs = require('fs'); // Import the 'fs' module to read the JSON file
const app = express();
const PORT = process.env.PORT || 3000; // Use environment port or 3000 as default

// Read the JSON file containing restaurant data
const dataPath = './data.json';
const rawData = fs.readFileSync(dataPath);
const restaurants = JSON.parse(rawData);

// Endpoint to get all restaurants and their menus
app.get('/restaurants', (req, res) => {
  res.json(restaurants);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
