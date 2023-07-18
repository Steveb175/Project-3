const db = require("./connection");
const { User, Workouts, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Back" },
    { name: "Chest" },
    { name: "Legs" },
    { name: "Shoulders" },
    { name: "Arms" },
  ]);

  console.log("categories seeded");

  await Workouts.deleteMany();

  const workouts = await Workouts.insertMany([
    {
      name: "Back exercise name 1",
      instructions: "Back exercise instructions 1",
      category: "categories[0]._id",
      image: "../images/back1.jpg",
    },
    {
      name: "Back exercise name 2",
      instructions: "Back exercise instructions 2",
      category: "categories[0]._id",
      image: "../images/back2.jpg",
    },
    {
      name: "Chest exercise name 1",
      instructions: "Chest exercise instructions 1",
      category: "categories[1]._id",
      image: "../images/chest1.jpg",
    },
    {
      name: "Chest exercise name 2",
      instructions: "Chest exercise instructions 2",
      category: "categories[1]._id",
      image: "../images/chest2.jpg",
    },
    {
      name: "Legs exercise name 1",
      instructions: "Legs exercise instructions 1",
      category: "categories[2]._id",
      image: "../images/legs1.jpg",
    },
    {
      name: "Legs exercise name 2",
      instructions: "Legs exercise instructions 2",
      category: "categories[2]._id",
      image: "../images/legs2.jpg",
    },
    {
      name: "Shoulders exercise name 1",
      instructions: "Shoulders exercise instructions 1",
      category: "categories[3]._id",
      image: "../images/shoulders1.jpg",
    },
    {
      name: "Shoulders exercise name 2",
      instructions: "Shoulders exercise instructions 2",
      category: "categories[3]._id",
      image: "../images/shoulders2.jpg",
    },
    {
      name: "Arms exercise name 1",
      instructions: "Arms exercise instructions 1",
      category: "categories[4]._id",
      image: "../images/arms1.jpg",
    },
    {
      name: "Arms exercise name 2",
      instructions: "Arms exercise instructions 2",
      category: "categories[4]._id",
      image: "../images/arms2.jpg",
    },
  ]);

  console.log("workouts seeded");

  await User.deleteMany();

  await User.create({
    username: "test",
    email: "test@testmail.com",
    password: "test1234",
  });

  process.exit();
});
