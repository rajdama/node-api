const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Another simple route
app.get("/about", (req, res) => {
  res.send("About this app");
});

// Example POST route
app.post("/data", (req, res) => {
  const data = req.body;
  res.send(`Received data: ${JSON.stringify(data)}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
