const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Resource {
  _id: ID!
  title: String!
  description: String!
  url: String!
  date: String!
  contributor: User!
  rating: Float
}
type User {
  _id: ID!
  email: String!
  password: String!
  username: String
  contributedResources: [Resource!]
}
input ResourceInput {
  title: String!
  description: String!
  url: String!
  date: String!
  contributor: String!
}
input UserInput {
  email: String!
  password: String!
  username: String
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
`);