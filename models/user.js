const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    default: 'anonymous'
  },
  contributedResources: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Resource'
    }
  ]
});

module.exports = mongoose.model('User', userSchema)