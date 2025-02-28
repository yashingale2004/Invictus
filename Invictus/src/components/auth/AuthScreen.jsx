import React, { useState } from "react";
import GoogleLogin from "./GoogleLogin";
import AuthForm from "./AuthForm";

const AuthScreen = () => {
  const [showForm, setShowForm] = useState(false); // Toggle between Google Sign-In and Form

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Welcome to the App</h1>
      {!showForm ? (
        <>
          <GoogleLogin />
          <p>Don't want to use Google?</p>
          <button onClick={() => setShowForm(true)}>Sign In with Email</button>
        </>
      ) : (
        <AuthForm />
      )}
    </div>
  );
};

export default AuthScreen;