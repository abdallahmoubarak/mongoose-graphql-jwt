import { gql } from "graphql-request";

export const userDefs = gql`
  type User {
    id: ID!
    name: String!
    phone: String!
    email: String
    password: String
    address: String
    userRole: String
  }

  type Token {
    jwt: String!
  }

  type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }

  type Mutation {
    createUser(name: String!, phone: String!, address: String!): User!
    login(email: String, password: String!): Token!
    signup(
      email: String!
      phone: String!
      name: String!
      password: String!
    ): Token!
  }
`;
