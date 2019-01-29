const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
  _id: { type: Number, required: true },
  contributor: { type: String, required: true },
  lesson: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, default: `A ${this.lesson} lesson` },
  url: { type: String, required: true },
  karma: { type: Number, default: 0 },
});

const Resource = mongoose.model("Resource", resourceSchema);

module.exports = Resource;
