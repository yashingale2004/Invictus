import React, { useState } from "react";
import { auth, googleProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const [loading, setLoading] = useState(false); // Track login state
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User Info:", result.user); // Debugging info
      alert(`Welcome, ${result.user.displayName || "User"}!`);
      navigate("/dashboard"); // Redirect after login
    } catch (error) {
      console.error("Google Login Error:", error);
      alert(`Login failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleGoogleLogin} disabled={loading}>
      {loading ? "Signing in..." : "Sign in with Google"}
    </button>
  );
};

export default GoogleLogin;
