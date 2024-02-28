/* Require modules
---------------------------------------------------------- */
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

/* Require the db connection, models, and seed data
---------------------------------------------------------- */
const db = require("./models");

/* Require the routes in the controllers folder
--------------------------------------------------------------- */
const usersCtrl = require('./controllers/users')


/* Create the Express app
---------------------------------------------------------- */
const app = express();

/* Middleware (app.use)
---------------------------------------------------------- */
// cross origin allowance
app.use(cors());
// body parser - used for POST/PUT/PATCH routes:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* Mount routes
---------------------------------------------------------- */
// This tells our app to look at the `controllers/comments.js` file
// to handle all routes that begin with `localhost:3000/api/comments`
app.use('/api/users', usersCtrl)

/* Tell the app to listen on the specified port
---------------------------------------------------------- */
app.listen(process.env.PORT, function () {
  console.log("Express is listening to port", process.env.PORT);
});
