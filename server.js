const express = require("express");
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')
const graphqlHttp = require('express-graphql')
const { buildSchema } = require('graphql')

const Resource = require('./models/resource')
const User = require('./models/user')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

const resources = resourceIds => {
  return Resource.find({
    _id: {
      $in: resourceIds
    }
  })
    .then(resources => {
      return resources.map(resource => {
        return {
          ...resource._doc,
          _id: resource.id,
          contributor: user.bind(this, resource.contributor)
        }
      })
    })
    .catch(err => {
      throw err
    })
}

const user = userId => {
  return User.findById(userId)
    .then(user => {
      return {
        ...user._doc,
        _id: user.id,
        contributedResources: resources.bind(this, user._doc.contributedResources)
      }
    })
    .catch(err => {
      throw err
    })
}

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use('/graphql', graphqlHttp({
  schema: buildSchema(`
    type Resource {
      _id: ID!
      title: String!
      description: String!
      rating: Float
      dateAdded: String!
      contributor: User!
    }

    type User {
      _id: ID!
      email: String!
      password: String!
      contributedResources: [Resource!]
    }

    input UserInput {
      email: String!
      password: String! 
    }

    input ResourceInput {
      title: String!
      description: String!
      url: String!
      rating: Float
      dateAdded: String!
      contributor: String!
    }

    type RootQuery {
      resources: [Resource!]!
    }

    type RootMutation {
      contributeResource(resourceInput: ResourceInput): Resource
      createUser(userInput: UserInput): User
    }

    schema {
      query: RootQuery
      mutation: RootMutation
    }
  `),
  rootValue: {
    resources: () => {
      return Resource.find()
        .then(resources => {
          return resources.map(resource => {
            return { 
              ...resource._doc,
              _id: resource.id,
              contributor: user.bind(this, resource._doc.contributor)
            }
          })
        })
        .catch(err => {
          throw err
        })
    },
    contributeResource: args => {
      const resource = new Resource({
        title: args.resourceInput.title,
        description: args.resourceInput.description,
        dateAdded: new Date(args.resourceInput.dateAdded),
        contributor: '5c6237ede020186bc6732ad2'
      })
      let contributedResource
      return resource
        .save()
        .then(result => {
          contributedResource = { 
            ...result._doc, 
            _id: result._doc._id.toString() 
          }
          return User.findById('5c6237ede020186bc6732ad2')
        })
        .then(user => {
          if(!user) {
            throw new Error('User not found')
          }
          user.contributedResources.push(resource)
          return user.save()
        })
        .then (result => {
          return contributedResource
        })
        .catch(err => {
          console.log(err)
          throw err
        })
    },
    createUser: args => {
      return User.findOne({email: args.userInput.email})
        .then(user => {
          if (user) {
            throw new Error('User exists already')
          }
          return bcrypt
            .hash(args.userInput.password, 12)
        })
        .then(hashedPassword => {
          const user = new User({
            email: args.userInput.email,
            password: hashedPassword
          })
          return user.save()
        })
        .then(result => {
          return { ...result._doc, _id: result.id }
        })
        .catch(err => {
          throw err
        })
    }
  },
  graphiql: true
}))

// app.use(
//   './graphql',
//   graphqlHttp({
//     schema: graphqlSchema,
//     rootValue: graphqlResolver,
//     graphiql: true,
//     formatError(err) {
//       if(err.originalError) {
//         return err
//       }
//       const data = err.originalError.data
//       const message = err.message || 'An error occurred'
//       const code = err.originalError || 500
//       return { message: message, status: code, data: data }
//     }
//   })
// )

// app.use(routes);

mongoose.connect(
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

