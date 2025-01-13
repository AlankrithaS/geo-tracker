const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

app.post('/save-location', (req, res) => {
  const { latitude, longitude } = req.body;
  const locationData = `Latitude: ${latitude}, Longitude: ${longitude}\n`;
  fs.appendFile('lat_long.txt', locationData, (err) => {
    if (err) {
      console.error('Error saving location:', err);
      res.status(500).send('Error saving location');
    } else {
      console.log('Location saved:', locationData);
      res.send('Location saved successfully');
    }
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
