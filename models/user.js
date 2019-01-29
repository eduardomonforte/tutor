const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: { type: Number, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  totalKarma: { type: Number, default: 0 },
  contributedResources: { type: Array, default: [] },
  savedResources: { type: Array, default: [] }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
