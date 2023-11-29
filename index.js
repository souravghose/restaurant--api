const express = require('express');
const app = express();

// Mocked menu data
const menuData = [
    [
        {
          "id": 1,
          "name": "Tasty Bites",
          "image": "https://www.saltandlavender.com/wp-content/uploads/2021/08/spicy-chicken-pasta-recipe-1-720x1080.jpg",
          "menu": [
            {
              "id": 101,
              "name": "Spicy Chicken Pasta",
              "ingredients": ["Chicken", "Pasta", "Tomato Sauce", "Spices"],
              "price": 12.99
            },
            {
              "id": 102,
              "name": "Mediterranean Salad",
              "ingredients": ["Lettuce", "Tomatoes", "Cucumbers", "Olives", "Feta Cheese", "Olive Oil"],
              "price": 8.49
            }
          ]
        },
        {
          "id": 2,
          "name": "Sizzling Grill",
          "image": "https://d1ralsognjng37.cloudfront.net/5fd0411f-c3fe-4d2a-9ccc-fc4f49e47e92.jpeg",
          "menu": [
            {
              "id": 201,
              "name": "BBQ Ribs",
              "ingredients": ["Pork Ribs", "BBQ Sauce", "Spices"],
              "price": 15.99
            },
            {
              "id": 202,
              "name": "Grilled Vegetables",
              "ingredients": ["Bell Peppers", "Zucchini", "Mushrooms", "Onions", "Herbs", "Olive Oil"],
              "price": 10.99
            }
          ]
        },
        {
          "id": 3,
          "name": "Sushi Delight",
          "image": "https://static.vecteezy.com/system/resources/previews/028/627/728/non_2x/sushi-delight-on-white-background-ai-generated-free-photo.JPG",
          "menu": [
            {
              "id": 301,
              "name": "California Roll",
              "ingredients": ["Sushi Rice", "Avocado", "Crab Meat", "Cucumber", "Nori"],
              "price": 14.49
            },
            {
              "id": 302,
              "name": "Salmon Nigiri",
              "ingredients": ["Sushi Rice", "Salmon", "Wasabi", "Soy Sauce"],
              "price": 9.99
            }
          ]
        },
        {
          "id": 4,
          "name": "Pizza Haven",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/California_Sushi_%2826571101885%29.jpg/1200px-California_Sushi_%2826571101885%29.jpg",
          "menu": [
            {
              "id": 401,
              "name": "Margherita Pizza",
              "ingredients": ["Pizza Dough", "Tomato Sauce", "Mozzarella Cheese", "Fresh Basil"],
              "price": 11.99
            },
            {
              "id": 402,
              "name": "Pepperoni Pizza",
              "ingredients": ["Pizza Dough", "Tomato Sauce", "Mozzarella Cheese", "Pepperoni Slices"],
              "price": 13.49
            }
          ]
        },
        {
          "id": 5,
          "name": "Burger Shack",
          "image": "https://iambaker.net/wp-content/uploads/2019/05/cheeseburger-1.jpg",
          "menu": [
            {
              "id": 501,
              "name": "Classic Cheeseburger",
              "ingredients": ["Beef Patty", "Cheese", "Lettuce", "Tomato", "Pickles", "Burger Bun"],
              "price": 9.99
            },
            {
              "id": 502,
              "name": "Veggie Burger",
              "ingredients": ["Vegetable Patty", "Lettuce", "Tomato", "Avocado", "Whole Wheat Bun"],
              "price": 8.49
            }
          ]
        }
      ]
];

// Define a route to get all restaurants and their menus
app.get('/restaurants', (req, res) => {
  // For simplicity, returning the whole data
  res.json(menuData);
});

// Define a route to get a specific restaurant's menu by ID
app.get('/restaurants/:id/menu', (req, res) => {
  const restaurantId = parseInt(req.params.id);
  const restaurant = menuData.find(restaurant => restaurant.id === restaurantId);

  if (!restaurant) {
    return res.status(404).json({ message: 'Restaurant not found' });
  }

  res.json(restaurant.menu);
});

// Start the server
const PORT = 3000; // Change the port if needed
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
