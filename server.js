const express = require("express")
const bodyParser = require('body-parser')
const graphqlHttp = require('express-graphql')
const mongoose = require("mongoose")

const graphQLSchema = require('./graphql/schema/index')
const graphQLResolvers = require('./graphql/resolvers/index')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use(
  '/graphql',
  graphqlHttp({
  schema: graphQLSchema,
  rootValue: graphQLResolvers,
  graphiql: true
  })
)

mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost/tutor", 
    { useNewUrlParser: true }
  )
    .then(() => {
      app.listen(PORT, function() {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
      })
    })
    .catch(err => {
      console.log(err)
    })
