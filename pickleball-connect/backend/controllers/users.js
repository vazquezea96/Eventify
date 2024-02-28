/* 
---------------------------------------------------------------------------------------
NOTE: Remember that all routes on this page are prefixed with `localhost:3000/api/users`
---------------------------------------------------------------------------------------
*/

/* Require modules
--------------------------------------------------------------- */
const jwt = require("jwt-simple");
const express = require("express");
// Router allows us to handle routing outisde of server.js
const router = express.Router();

/* Require the db connection and models
--------------------------------------------------------------- */
const db = require("../models/index.js");

/* Require the JWT config
--------------------------------------------------------------- */
const config = require("../../jwt.config.js");

/* Routes
--------------------------------------------------------------- */
// SIGN UP ROUTE (create user)
router.post("/signup", (req, res) => {
  // Create a new user in the database
  db.User.create(req.body)
    .then((user) => {
      // after successfully creating a user, assign a JWT to the user and send it in the response object
      const token = jwt.encode({ id: user.id }, config.jwtSecret);
      res.json({ token: token });
    })
    // send an error if the database fails to create a userm a user
    .catch(() => {
      res
        .status(401)
        .json({ message: "Could not create a new user, try again" });
    });
});

// LOG IN (log into a user account)
// attempt to find the user document by the email property in the request body
router.post("/login", async (req, res) => {
  const foundUser = await db.User.findOne({ email: req.body.email });
  // check to:
  // 1. make sure the user was found in the database
  // 2. make sure the user document's password matches the password in the request body
  if (foundUser && foundUser.password === req.body.password) {
    // if the above conditions are met, send a JWT as a response
    const token = jwt.encode({ id: foundUser.id }, config.jwtSecret);
    res.json({
      token: token,
      email: foundUser.email,
    });
  } else {
    res
      .status(401)
      .json({ message: "Could not find user with that email/password" });
  }
});

/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router;
