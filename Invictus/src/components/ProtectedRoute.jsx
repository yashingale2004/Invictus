import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

const ProtectedRoute = ({ children }) => {
  const user = auth.currentUser; // Check if user is authenticated

  if (!user) {
    // If user is not authenticated, redirect to the home screen
    return <Navigate to="/" />;
  }

  // If user is authenticated, render the children (protected page)
  return children;
};

export default ProtectedRoute;
