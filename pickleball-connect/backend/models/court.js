// Require the Mongoose package
const mongoose = require("mongoose");

// Create a schema to define the properties of the comment collection
const courtSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: Number, required: true },
  },
  { timestamps: true },
);

// Export the schema as a Monogoose model.
// The Mongoose model will be accessed in `models/index.js`
module.exports = mongoose.model("Courts", courtSchema);
