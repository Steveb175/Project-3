const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedWorkouts: [Workout]
  }

  type Workout {
    _id: ID
    name: String!
    instructions: String
    muscle: String
    image: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
<<<<<<< HEAD
<<<<<<< Updated upstream
    workouts: [Workout]
=======
    Profile(username: String!): User
=======
    profile(username: String!): User
  }

  input WorkoutInput {
    name: String!
    instructions: String
    muscle: String
    image: String
>>>>>>> main
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    saveWorkout(workoutData: WorkoutInput!): User
    deleteWorkout(workoutId: ID!): User
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> main
  }
`;

module.exports = typeDefs;
