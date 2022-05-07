// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC56jkxKx1whO8GXOppXhpIqFcryZ-sCA4",
  authDomain: "cars-den.firebaseapp.com",
  projectId: "cars-den",
  storageBucket: "cars-den.appspot.com",
  messagingSenderId: "796502989174",
  appId: "1:796502989174:web:89d028ea138d5f17270257"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
