const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/tutor"
);

// This is just an example. It doesn't do anything yet
const userSeed = [
  {
    _id: 123456,
    username: "edumoran",
    email: "string@email.com",
    totalKarma: 3,
    contributedResources: [12342345, 654364532, 927848347],
    savedResources: [789876, 6543354, 1918373],
  },
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " user records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
