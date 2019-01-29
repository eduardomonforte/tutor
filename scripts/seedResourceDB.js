const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/tutor"
);

// This is just an example. It doesn't do anything yet
const resourceSeed = [
  {
    _id: 123456,
    contributor: "jonabar",
    lesson: "string",
    name: "string",
    description: "string",
    url: "string",
    karma: 0
  },
];

db.Resource
  .remove({})
  .then(() => db.Resource.collection.insertMany(resourceSeed))
  .then(data => {
    console.log(data.result.n + " resource records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
