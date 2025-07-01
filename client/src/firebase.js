// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-89e4b.firebaseapp.com",
  projectId: "mern-estate-89e4b",
  storageBucket: "mern-estate-89e4b.firebasestorage.app",
  messagingSenderId: "333100529732",
  appId: "1:333100529732:web:3a011a08eca646256d2411"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);