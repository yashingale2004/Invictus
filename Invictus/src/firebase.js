// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // ✅ Import getAuth & GoogleAuthProvider

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaigc_VJ-nZvW7Di9eRVJOne7_J2Y9-ks",
  authDomain: "invictus-2e839.firebaseapp.com",
  projectId: "invictus-2e839",
  storageBucket: "invictus-2e839.firebasestorage.app",
  messagingSenderId: "501916390204",
  appId: "1:501916390204:web:4cc0bfa3a2ba51e6cc4439",
  measurementId: "G-TNHZWB0SNG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // ✅ Initialize Authentication
const googleProvider = new GoogleAuthProvider(); // ✅ Initialize Google Provider
const analytics = getAnalytics(app);

export { auth, googleProvider }; // ✅ Export both for use in your components
