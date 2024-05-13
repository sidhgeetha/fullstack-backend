const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  passwordHash: String,
  name: String,
  location: {
    type: String,
    default: "unknown",
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

module.exports = mongoose.model("User", userSchema, "users");
