// import express
const express = require('express');

// express application assigns it to app variable
const app = express();

// load environment variables from .env file
require("dotenv").config();

// import dbconfig
const dbconfig = require("./config/dbconfig");

// adds express.json middleware to application
app.use(express.json());

// import route handlers
const usersRoute = require("./routes/usersRoute");
const movieshowRoute = require("./routes/movieshowRoute");

// Load secret key from environment variable
const jwtSecret = process.env.JWT_SECRET;

// Two routes using app.use
// Matches any URL that starts with /api/users and uses usersRoute handler to handle request
app.use("/api/users", usersRoute);
// Matches any URL that starts with /api/movieShows and uses movieShows handler to handle request
app.use("/api/movieShows", movieshowRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Node JS Server is running on port ${port}`));
