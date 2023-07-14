const { Schema, model } = require("mongoose");

const workoutSchema = new Schema({
  name: {
    type: String
  },
  instructions: {
    type: String
  },
  muscle: {
    type: String
  },
  image: {
    type: String
  }
});

const Workouts = model("Workouts", workoutSchema);

module.exports = Workouts;
