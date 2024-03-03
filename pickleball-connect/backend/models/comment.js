// Require the Mongoose package
const mongoose = require("mongoose");

// Create a schema to define the properties of the comment collection
const commentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    content: { type: String, required: true },
    eventId: { type: Number, required: true },
  },
  { timestamps: true },
);

// Export the schema as a Monogoose model.
// The Mongoose model will be accessed in `models/index.js`
module.exports = mongoose.model("Comment", commentSchema);
