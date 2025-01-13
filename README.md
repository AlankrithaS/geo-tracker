# Location Tracker Project

This project is a simple location-tracking web application that retrieves the exact latitude and longitude of users who click a link and grant location access. The project uses HTML, JavaScript, and Node.js, and is hosted on Vercel.

---

## Features
- Retrieves user's exact latitude and longitude upon granting location access.
- Saves the location data to a `location.txt` file on the server.
- Includes a simple UI for user interaction.
- Hosted on Vercel for public access.

---

## Project Structure
```
tracking/
├── .vercel/          # Vercel configuration files
├── public/           # Public assets and HTML files
│   ├── index.html    # Main HTML file
│   └── amazon.jpg    # Example image
├── node_modules/     # Dependencies installed via npm
├── .gitignore        # Files to ignore in Git
├── package.json      # Project metadata and dependencies
├── package-lock.json # Dependency lock file
├── server.js         # Node.js server script
├── location.txt      # Logs of user latitude and longitude
└── vercel.json       # Vercel deployment configuration
```

---

## Setup Instructions

### 1. Prerequisites
- Install [Node.js](https://nodejs.org/) on your system.
- Set up a [Vercel](https://vercel.com/) account.

### 2. Clone the Repository
```bash
git clone <repository-url>
cd tracking
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Locally
Start the server on your local machine:
```bash
node server.js
```
Visit `http://localhost:3000` in your browser.

### 5. Deploy to Vercel
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Deploy the project:
   ```bash
   vercel
   ```
3. Access the live URL provided by Vercel.

---

## Usage
1. Share the hosted link with users.
2. When users click the link and grant location access, their latitude and longitude are saved to the `location.txt` file.
3. Retrieve the `location.txt` file to view the logged data.

---

## API Endpoints
### 1. Save Location
**Endpoint:** `/save-location`  
**Method:** POST  
**Body:**
```json
{
  "latitude": <latitude>,
  "longitude": <longitude>
}
```
**Description:** Logs user location data to `location.txt`.

### 2. Download Location File
**Endpoint:** `/download-location`  
**Method:** GET  
**Description:** Downloads the `location.txt` file with logged user locations.

---

## Technologies Used
- HTML, CSS, JavaScript
- Node.js (Express.js)
- Vercel (Hosting)

---

## Future Enhancements
- Replace `location.txt` with a database for scalable storage.
- Add a notification system to alert when new locations are logged.
- Enhance UI for a better user experience.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Disclaimer
This project is for educational purposes only. Ensure to comply with local laws and ethical guidelines when handling user data.

