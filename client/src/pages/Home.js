import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Auth from "../utils/auth";
import { saveWorkoutIds, getSavedWorkoutIds } from "../utils/localStorage";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import { SAVE_WORKOUT } from "../utils/mutations";
import { QUERY_CATEGORIES, QUERY_CATEGORY } from "../utils/queries";

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [searchedWorkouts, setSearchedWorkouts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [savedWorkoutIds, setSavedWorkoutIds] = useState(getSavedWorkoutIds());

  const [getCategory, { loading: categoryLoading, data: data_category }] = useLazyQuery(QUERY_CATEGORY);
  const [saveWorkout, { error }] = useMutation(SAVE_WORKOUT);
  const { loading: categoriesLoading, data: data_categories } = useQuery(QUERY_CATEGORIES);

  console.log(data_categories);
  console.log(data_category);

  // set up useEffect hook to save `savedWorkoutIds` list to localStorage on component unmount
  useEffect(() => {
    return () => saveWorkoutIds(savedWorkoutIds);
  });

  const handleSaveWorkout = async workoutId => {
    // // find the workout in `searchedWorkouts` state by the matching id
    // const workoutToSave = searchedWorkouts.find(
    //   workout => workout.workoutId === workoutId
    // );
    // const token = Auth.loggedIn() ? Auth.getToken() : null;

    // if (!token) {
    //   return false;
    // }

    // try {
    //   const { data } = await saveWorkout({
    //     variables: { workoutId: { ...workoutToSave } }
    //   });

    //   setSavedWorkoutIds([...savedWorkoutIds, workoutToSave.workoutId]);
    // } catch (err) {
    //   console.error(err);
    // }
  };

  // Need to implement authentication so that only logged in users can see the add workout toggle button
  // NEED TO ADD BACK IN

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

              { data_categories?.categories.map((category) => (
                 <Dropdown.Item
                    key={category._id}
                    value={category.name}
                    onClick={() => getCategory({ variables: { name: category.name } })}>
                    {category.name}
                  </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </div>

        {/* Display the workouts from the selected category */}
      <div>
        <Container>
          <Row>
          {data_category?.category?.workouts.map(workout => (
             <Col md="4">
              <Card key={workout._id} border='dark'>
                {workout.image ? (
                  <Card.Img src={workout.image} alt={`The cover for ${workout.name}`} variant='top' />
                ) : null}
                <Card.Body>
                  <Card.Title>{workout.name}</Card.Title>
                  <p className='small'>Category: {workout.category}</p>
                  <Card.Text>{workout.instructions}</Card.Text>
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedWorkoutIds?.some((savedWorkoutId) => savedWorkoutId === workout._id)}
                      className='btn-block btn-info'
                      onClick={() => handleSaveWorkout(workout._id)}>
                       {savedWorkoutIds?.some((savedWorkoutId) => savedWorkoutId === workout._id)
                        ? 'This workout has already been saved!'
                        : 'Save this Workout!'}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
          </Row>
        </Container>
       </div>
    </>
  );
};

export default Home;
