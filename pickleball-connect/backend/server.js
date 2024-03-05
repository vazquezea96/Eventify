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
const commentsCtrl = require('./controllers/comment')
const wishlistCtrl = require('./controllers/wishlist')

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
// use the React build folder for static files
app.use(express.static(path.join(path.dirname(__dirname), 'frontend', 'dist')))


/* Mount routes
--------------------------------------------------------------- */
// This tells our app to look at the `controllers/comments.js` file 
// to handle all routes that begin with `localhost:3000/api/comments`
app.use('/api/comments', commentsCtrl)

// This tells our app to look at the `controllers/users.js` file 
// to handle all routes that begin with `localhost:3000/api/favorites`
app.use('/api/favorites', wishlistCtrl)

// This tells our app to look at the `controllers/users.js` file 
// to handle all routes that begin with `localhost:3000/api/users`
app.use('/api/users', usersCtrl)

// Any other route not matching the routes above gets routed by React
app.get('*', (req, res) => {
  res.sendFile(path.join(path.dirname(__dirname), 'frontend', 'dist', 'index.html'));
});


/* Tell the app to listen on the specified port
---------------------------------------------------------- */
app.listen(process.env.PORT, function () {
  console.log("Express is listening to port", process.env.PORT);
});
