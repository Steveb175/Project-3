const { Workout } = require("../models");

const resolvers = {
  Query: {
    workouts: async () => {
      return await Workout.find({})
        .populate("workout")
        .populate({
          path: "workouts",
          populate: "workouts"
        });
    }
  }
};

module.exports = resolvers;
