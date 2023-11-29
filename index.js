const express = require('express');
const fs = require('fs'); // Import the 'fs' module to read the JSON file
const app = express();
const PORT = process.env.PORT || 3000; // Use environment port or 3000 as default

// Read the JSON file containing restaurant data
const dataPath = './data.json';
const rawData = fs.readFileSync(dataPath);
const restaurants = JSON.parse(rawData);
// Route to get a specific menu item by ID
app.get('/menu/:id', (req, res) => {
  const menuId = parseInt(req.params.id);
  const menuItem = menuData.find(item => item.id === menuId);

  if (menuItem) {
    res.json(menuItem);
  } else {
    res.status(404).json({ message: 'Menu item not found' });
  }
});

// Endpoint to get all restaurants and their menus
app.get('/restaurants', (req, res) => {
  res.json(restaurants);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
