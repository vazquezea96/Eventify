// Require the Moongose package
const mongoose = require("mongoose");

// Create a schema for the properties of the wishlist collection
// NOTE: This must contain all teh properties needed to render the DetailPage
const wishlistSchema = mongoose.Schema({
  eventId: { type: Number, required: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

module.exports = mongoose.model("Wishlist", wishlistSchema);
