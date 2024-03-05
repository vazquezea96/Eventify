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
const db = require("../models");

/* Require the JWT config
--------------------------------------------------------------- */
const config = require("../../jwt.config.js");

/* Middleware that checks if a JWT sent from the client is valid.
   Used for all routes that require authorization
--------------------------------------------------------------- */
const authMiddleware = (req, res, next) => {
  // Check if the 'Authorization' header is present and has the token
  const token = req.headers.authorization;
  if (token) {
    try {
      // Decode the token using the secret key and add the decoded payload to the request object
      const decodedToken = jwt.decode(token, config.jwtSecret);
      req.user = decodedToken;
      next();
    } catch (err) {
      // Return an error if the token is invalid
      res.status(401).json({ message: "Invalid token" });
    }
  } else {
    // Return an error if the 'Authorization' header is missing or has the wrong format
    res
      .status(401)
      .json({ message: "Missing or invalid Authorization header" });
  }
};

/* Routes
--------------------------------------------------------------- */
// Create Route (POST/Create): This route receives a POST request and
// creates a new favorite document using the request body
router.post("/", authMiddleware, async (req, res) => {
  const wishlist = await db.Wishlist.create({
    ...req.body,
    // The auth middleware validated the JWT token
    // and added the decoded payload to the req.user object
    userId: req.user.id,
  });
  res.json(wishlist);
});

/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router;
