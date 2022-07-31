const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const { PORT } = require("./config");
const { URI } = require.resolve("./config");

console.log(`Your PORT is ${PORT}`); // 8626

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add routes
app.use(routes);

mongoose.connect(URI, (err) => {
  if (err) throw err;
  console.log("connected to MongoDB");
});

const path = require("path");

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
