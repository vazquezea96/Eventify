/* 
-------------------------------------------------------------
NOTE: Remember that all routes on this page are prefixed with `localhost:3000/api/comments`
------------------------------------------------------------- */

/* Require modules
---------------------------------------------------------- */
const express = require("express");
// Router allows us to handle routing outisde of server.js
const router = express.Router();

/* Require the db connection, and models
---------------------------------------------------------- */
const db = require("../models");

/* Routes
---------------------------------------------------------- */
// Index Route (GET/Read): Will display all comments
router.get("/", function (req, res) {
  db.Court.find().then((courts) => res.json(courts));
});

// Create Route (POST/Create): This route receives a POST request and
// creates a new comment document using the request body

// Update Route (PUT/Update): This route receives a PUT request and
// edits the specified comment document using the request body

// Destroy Route (DELETE/Delete): This route deletes a comment document
// using the URL parameter (which will always be the comment document's ID)

/* Export these routes so that they are accessible in `server.js`
---------------------------------------------------------- */
module.exports = router;
