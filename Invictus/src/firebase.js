// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
