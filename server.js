const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Middleware to parse JSON body
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint to save location data to a file
app.post('/save-location', (req, res) => {
  const { latitude, longitude } = req.body;

  if (latitude && longitude) {
    const data = `Latitude: ${latitude}, Longitude: ${longitude}\n`;

    // Save to a file named 'location.txt'
    fs.appendFile('location.txt', data, (err) => {
      if (err) {
        console.error('Error saving location:', err);
        return res.status(500).send('Failed to save location');
      }

      console.log('Location saved:', data);
      res.status(200).send('Location saved successfully');
    });
  } else {
    res.status(400).send('Invalid location data');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
