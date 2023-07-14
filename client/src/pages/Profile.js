import React from "react";
import Auth from "../utils/auth";

const Profile = () => {
  // Retrieve the logged-in user's information
  const user = Auth.getLoggedInUser();

  return (
    <main>
      <div>
        <h4>Profile</h4>
        {user ? (
          <p>Welcome, {user.username}!</p>
        ) : (
          <p>Please log in to view your profile.</p>
        )}
      </div>
    </main>
  );
};

export default Profile;
