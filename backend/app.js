const express = require("express");
const app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

// Using Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importing Routes
const postRoute = require("./routes/post");

// Using Routes
app.use("api/v1", postRoute);

module.exports = app;
