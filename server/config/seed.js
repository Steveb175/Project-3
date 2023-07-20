const db = require("./connection");
const { User, Category } = require("../models");

db.once("open", async () => {
  try {
    await Category.deleteMany();
    await User.deleteMany();

    console.log("Seeding categories...");
    const categories = await Category.insertMany([
      {
        name: "Back",
        workouts: [
          {
            name: "Back exercise name 1",
            instructions: "Back exercise instructions 1",
            image: "../images/back1.jpg",
          },
          {
            name: "Back exercise name 2",
            instructions: "Back exercise instructions 2",
            image: "../images/back2.jpg",
          },
        ],
      },
      {
        name: "Chest",
        workouts: [
          {
            name: "Chest exercise name 1",
            instructions: "Chest exercise instructions 1",
            image: "../images/chest1.jpg",
          },
          {
            name: "Chest exercise name 2",
            instructions: "Chest exercise instructions 2",
            image: "../images/chest2.jpg",
          },
        ],
      },
      {
        name: "Legs",
        workouts: [
          {
            name: "Legs exercise name 1",
            instructions: "Legs exercise instructions 1",
            image: "../images/legs1.jpg",
          },
          {
            name: "Legs exercise name 2",
            instructions: "Legs exercise instructions 2",
            image: "../images/legs2.jpg",
          },
        ],
      },
      {
        name: "Shoulders",
        workouts: [
          {
            name: "Shoulders exercise name 1",
            instructions: "Shoulders exercise instructions 1",
            image: "../images/shoulders1.jpg",
          },
          {
            name: "Legs exercise name 2",
            instructions: "Legs exercise instructions 2",
            image: "../images/shoulders2.jpg",
          },
        ],
      },
      {
        name: "Arms",
        workouts: [
          {
            name: "Arms exercise name 1",
            instructions: "Arms exercise instructions 1",
            image: "../images/arms1.jpg",
          },
          {
            name: "Arms exercise name 2",
            instructions: "Arms exercise instructions 2",
            image: "../images/arms2.jpg",
          },
        ],
      },
      {
        name: "Abs",
        workouts: [
          {
            name: "Abs exercise name 1",
            instructions: "Abs exercise instructions 1",
            image: "../images/abs1.jpg",
          },
          {
            name: "Abs exercise name 2",
            instructions: "Abs exercise instructions 2",
            image: "../images/abs2.jpg",
          },
        ],
      },
    ]);

    console.log("categories and workouts seeded", categories);

    await User.deleteMany();

    await User.create({
      username: "test",
      email: "test@testmail.com",
      password: "test123",
    });

    console.log("users seeded");
    process.exit();
  } catch (error) {
    console.error("Error seeding data", error);
    process.exit(1);
  }
});
