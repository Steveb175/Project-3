import React, { useState } from "react";
import { Button, Input } from "antd";
import { useQuery } from "@apollo/client";
import WorkoutList from "../components/WorkoutList";
import WorkoutForm from "../components/WorkoutForm";

// Define your query constant here
// const QUERY_WORKOUTS = ...;

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  // Need to implement authentication so that only logged in users can see the add workout toggle button====withAuth
  // Execute the query and retrieve the data
  // const { loading, data } = useQuery(QUERY_WORKOUTS);
  // const workouts = data?.workouts || [];

  return (
    <main>
      <div>
        <h1>Welcome to Workout Customizer</h1>
        <Button type="primary" onClick={handleToggleForm}>
          {showForm ? "Hide Form" : "Create New Workout"}
        </Button>
        {showForm && <WorkoutForm />}
      </div>
      <WorkoutList />
    </main>
  );
};

export default Home;
