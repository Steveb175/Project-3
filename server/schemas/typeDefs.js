const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Workout {
    _id: ID
    name: String
    instructions: String
    muscle: String
  }

  type User {
    _id: ID
    username: String
    password: String
  }

  type Query {
    workouts: [Workout]
  }
`;

module.exports = typeDefs;
