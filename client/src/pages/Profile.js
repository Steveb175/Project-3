import React from "react";
import {
  Container,
  Card,
  Button,
  Row,
  Col
} from 'react-bootstrap';
import Auth from "../utils/auth";
// import { } from '../utils/localStorage';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { DELETE_WORKOUT } from '../utils/mutations';

const Profile = () => {
  // Retrieve the logged-in user's information
  // const user = Auth.getLoggedInUser();

  const username = Auth.getProfile().data.username;
  // console.log(username);

  const { loading, data } = useQuery(QUERY_ME, {
    variables: { username },
  });

  const userData = data?.me || {};
  // console.log(data);

  const [deleteWorkout, { error }] = useMutation(DELETE_WORKOUT);

  // create function that accepts the book's mongo _id value as param and deletes the workout from the database
  const handleDeleteWorkout = async (workoutId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await deleteWorkout({
        variables: { workoutId },
      });

      removeWorkoutId(workoutId);
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  if (error) {
    return <h2>SOMETHING WENT WRONG...</h2>;
  }

  return (
    // <main>
    //   <div>
    //     <h4>Profile</h4>
    //     {user ? (
    //       <p>Welcome, {username}!</p>
    //     ) : (
    //       <p>Please log in to view your profile.</p>
    //     )}
    //   </div>
    // </main>
    <>
    <div className="text-light bg-dark pt-5">
      <Container>
        <h1>Profile</h1>
        <h2>Welcome, {username}!</h2>
        <h3>Here's a list of your workouts:</h3>
      </Container>
    </div>
      <Container>
        <h2 className="pt-5">
          {userData.workouts?.length
            ? `Viewing ${userData.workouts.length} saved ${
                userData.workouts.length === 1 ? 'workout' : 'workouts'
              }:`
            : 'You have no saved workouts!'}
        </h2>
        <Row>
          {userData.workouts?.map((workout) => {
            return (
              <Col md="4">
                <Card key={workout.workoutId} border="dark">
                  {workout.image ? <Card.Img src={workout.image} alt={`The cover for ${workout.name}`} variant="top" /> : null}
                  <Card.Body>
                    <Card.Title>{workout.name}</Card.Title>
                    <p className="small">Muscle: {workout.muscle}</p>
                    <Card.Text>{workout.instructions}</Card.Text>
                    <Button className="btn-block btn-danger" onClick={() => handleDeleteWorkout(workout.workoutId)}>
                      Delete this Workout!
                    </Button>
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

export default Profile;
