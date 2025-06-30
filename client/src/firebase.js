// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, 
  authDomain: "aaa-estate-30fb4.firebaseapp.com",
  projectId: "aaa-estate-30fb4",
  storageBucket: "aaa-estate-30fb4.firebasestorage.app",
  messagingSenderId: "678596495819",
  appId: "1:678596495819:web:adfa3fbcc01af64f500e4e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);