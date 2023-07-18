import React, { useState, useEffect } from "react";
import { Button, Input } from "antd";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import WorkoutList from "../components/WorkoutList";
import WorkoutForm from "../components/WorkoutForm";
import Auth from "../utils/auth";
import { saveWorkoutIds, getSavedWorkoutIds } from '../utils/localStorage';
import { useQuery, useMutation } from "@apollo/client";
import { SAVE_WORKOUT } from "../utils/mutations";

// Define your query constant here
// const QUERY_WORKOUTS = ...;

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const [savedWorkoutIds, setSavedWorkoutIds] = useState(getSavedWorkoutIds());
  const [saveWorkout, { error }] = useMutation(SAVE_WORKOUT);

  // set up useEffect hook to save `savedWorkoutIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => saveWorkoutIds(savedWorkoutIds);
  });

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };
  // NEED TO ADD MORE TO THIS -  WILL BE A DROP DOWN MENU

  const handleSaveWorkout = async workoutId => {
    // find the workout in `workouts` state by the matching id
    const workoutToSave = workouts.find(
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
      <div className="text-light bg-dark pt-5">
        <Container>
        <h1>Welcome to Workout Customizer</h1>
        <Button type="primary" onClick={handleToggleForm}>
          {showForm ? "Hide Form" : "Create New Workout"}
        </Button>
        {showForm && <WorkoutForm />}
        </Container>
      </div>
      {/* <WorkoutList /> */}

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
                <p className='small'>Muscle: {workout.muscle}</p>
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
      </Container>
    </>
  );
};

export default Home;
