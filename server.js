// filepath: /c:/Users/Alankritha/OneDrive/Documents/Codes/JAVASCRIPT/tracking/app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to GeoTracker!');
});

app.listen(3000, () => console.log('Server running on port 3000'));