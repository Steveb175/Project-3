import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import WorkoutList from "../components/WorkoutList";
import WorkoutForm from "../components/WorkoutForm";
import Auth from "../utils/auth";
import { saveWorkoutIds, getSavedWorkoutIds } from "../utils/localStorage";
import { useQuery, useMutation } from "@apollo/client";
import { SAVE_WORKOUT } from "../utils/mutations";
import { searchWorkouts } from "../utils/API";

// Define your query constant here
// const QUERY_WORKOUTS = ...;

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  // const [workouts, setWorkouts] = useState([]);
  const [searchedWorkouts, setSearchedWorkouts] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const [savedWorkoutIds, setSavedWorkoutIds] = useState(getSavedWorkoutIds());
  const [saveWorkout, { error }] = useMutation(SAVE_WORKOUT);

  // set up useEffect hook to save `savedWorkoutIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => saveWorkoutIds(savedWorkoutIds);
  });

  const handleToggleForm = async event => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchWorkouts(searchInput);
      // needs changed to fit workout data
      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const { items } = await response.json();

      const workoutData = items.map(workout => ({
        workoutId: workout.id,
        name: workout.volumeInfo.name,
        category: workout.volumeInfo.category,
        instructions: workout.volumeInfo.instructions,
        image: workout.volumeInfo.imageLinks.thumbnail || ""
      }));

      const uniqueWorkouts = Array.from(
        new Set(workoutData.map(workout => workout.workoutId))
      ).map(workoutId => {
        return workoutData.find(workout => workout.workoutId === workoutId);
      });

      setSearchedWorkouts(uniqueWorkouts);
      setSearchInput("");
    } catch (err) {
      console.error(err);
    }

    setShowForm(!showForm);
  };
  // NEED TO ADD MORE TO THIS -  WILL BE A DROP DOWN MENU

  const handleSaveWorkout = async workoutId => {
    // find the workout in `searchedWorkouts` state by the matching id
    const workoutToSave = searchedWorkouts.find(
      workout => workout.workoutId === workoutId
    );
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await saveWorkout({
        variables: { workoutId: { ...workoutToSave } }
      });

      setSavedWorkoutIds([...savedWorkoutIds, workoutToSave.workoutId]);
    } catch (err) {
      console.error(err);
    }
  };

  // Need to implement authentication so that only logged in users can see the add workout toggle button
  // Execute the query and retrieve the data
  // const { loading, data } = useQuery(QUERY_WORKOUTS);
  // const workouts = data?.workouts || [];

  return (
    <>
      <div className="text-light bg-dark pt-5 text-center">
        <Container>
          <h1>Welcome to Workout Customizer</h1>
          <h2>Select for a workout below</h2>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Workout Category
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Chest</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Back</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Legs</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Arms</Dropdown.Item>
              <Dropdown.Item href="#/action-5">Shoulders</Dropdown.Item>
              <Dropdown.Item href="#/action-6">Abs</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </div>

      {/* <WorkoutList /> */}
      {/* 
      <Container>
      <h2 className='pt-5'> 
      {workouts.length
            ? `Viewing ${workouts.length} results:`
            : 'Search for a book to begin'}
        </h2>
        <Row>
          {workouts.map((workout) => {
            return (
          <Col md="4">
            <Card key={workout.workoutId} border='dark'>
              {workout.image ? (
                <Card.Img src={workout.image} alt={`The cover for ${workout.name}`} variant='top' />   
              ) : null}
              <Card.Body>
                <Card.Title>{workout.name}</Card.Title>
                <p className='small'>Category: {workout.category}</p>
                <Card.Text>{workout.instructions}</Card.Text>
                {Auth.loggedIn() && (
                  <Button
                    disabled={savedWorkoutIds?.some((savedWorkoutId) => savedWorkoutId === workout.workoutId)}
                    className='btn-block btn-info'
                    onClick={() => handleSaveWorkout(workout.workoutId)}>
                    {savedWorkoutIds?.some((savedWorkoutId) => savedWorkoutId === workout.workoutId)
                      ? 'This workout has already been saved!'
                      : 'Save this Workout!'}
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
          );
        })}
        </Row>
      </Container> */}
    </>
  );
};

export default Home;
