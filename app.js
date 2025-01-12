const express = require('express');
const app = express();

// Endpoint: /home
app.get('/home', (req, res) => {
  res.send('Hello, World! Welcome to DevOps with Vercel.');
});

// Endpoint: /user
app.get('/user', (req, res) => {
  res.json({
    name: 'John',
    email: 'john.doe@example.com',
  });
});

// Start the server (Vercel handles the actual hosting)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
