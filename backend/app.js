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
const userRoute = require("./routes/user");

// Using Routes
app.use("api/pt", postRoute);
app.use("/api/pt", userRoute);

module.exports = app;
