const express = require('express');
const app = express();

// Endpoint: /home
app.get('/home', (req, res) => {
  res.send('Hello, World! Welcome to the world of programming.');
});

// Endpoint: /user
app.get('/user', (req, res) => {
  res.json({
    name: 'nahida sultana',
    email: 'bsse1318@iit.du.ac.bd',
  });
});

// Start the server (Vercel handles the actual hosting)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
