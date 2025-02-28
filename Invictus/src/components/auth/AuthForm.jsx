import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { auth } from "../../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Form validation schema
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
  });

  // Handle Login
  const handleLogin = async (values) => {
    setIsSubmitting(true);
    setErrorMessage("");
    try {
      const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
      alert("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage(error.message);
    }
    setIsSubmitting(false);
  };

  // Handle Sign Up
  const handleSignUp = async (values) => {
    setIsSubmitting(true);
    setErrorMessage("");
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
      alert("Account created successfully!");
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage(error.message);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Sign In / Register</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ values }) => (
            <Form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-gray-600 font-medium">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="password" className="block text-gray-600 font-medium">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {errorMessage && <p className="text-red-500 text-sm text-center">{errorMessage}</p>}

              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-all"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>

              <button
                type="button"
                onClick={() => handleSignUp(values)}
                className="w-full bg-gray-500 text-white font-semibold py-2 rounded-lg hover:bg-gray-600 transition-all"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing up..." : "Sign Up"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AuthForm;
