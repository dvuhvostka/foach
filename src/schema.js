const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: Int
    email: String
    firstName: String
    lastName: String
    phoneNumber: String
    vacation: Boolean
    position: String
    info: String
  }

  input createUserInput {
      firstName: String!
      lastName: String!
      phoneNumber: String!
      email: String!
      password: String!
  }

  type Query {
    getAllUsers: [User]
    findUser(email: String): User
  }

  type Mutation {
      createUser(input: createUserInput): User
      changeUserVacation(email: String): User
  }
`;

module.exports = { typeDefs }