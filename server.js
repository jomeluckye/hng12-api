// Import necessary modules
const express = require('express');
const cors = require('cors');

// Initialize the Express app
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Define the API endpoint
app.get('/api/info', (req, res) => {
  // Create the response object with the requested data
  const response = {
    email: 'your-email@example.com',  // Replace with your actual email
    current_datetime: new Date().toISOString(),  // ISO 8601 formatted timestamp
    github_url: 'https://github.com/your-username/your-repo'  // Replace with the actual GitHub URL of your project
  };

  // Send the JSON response
  res.json(response);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
