// route to get logged in user's info (needs the token)
export const getMe = (token) => {
    return fetch('/api/users/me', {
        headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
        },
    });
};

export const createUser = (userData) => {
    return fetch('/api/users', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};

export const loginUser = (userData) => {
    return fetch('/api/users/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};

// save workout data for a logged in user
export const saveWorkout = (workoutData, token) => {
    return fetch('/api/users', {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(workoutData),
    });
}

// remove saved workout data for a logged in user
export const deleteWorkout = (workoutId, token) => {
    return fetch(`/api/users/workouts/${workoutId}`, {
        method: 'DELETE',
        headers: {
        authorization: `Bearer ${token}`,
        },
    });
}

// search for workouts
export const searchWorkouts = (query) => {
    return fetch(`https://wger.de/api/v2/exercise/?format=json&language=2&limit=20&muscles=${query}`);
};