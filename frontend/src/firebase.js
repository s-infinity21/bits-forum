// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB51eQwqmI1hNZOz5Fb-zWyq40Dwu2IJ0A",
  authDomain: "bits-bytes-8a2c6.firebaseapp.com",
  projectId: "bits-bytes-8a2c6",
  storageBucket: "bits-bytes-8a2c6.appspot.com",
  messagingSenderId: "501970561546",
  appId: "1:501970561546:web:ae1034c279eb2934628df3",
  measurementId: "G-GBQ34C535F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Pass the app to getAuth
const provider = new GoogleAuthProvider();

export { app, auth, provider }; // Export the app object as well