// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxOvI2CSxNw43Og7Q2hzm2fFzX-xHY0AU",
  authDomain: "flexfitness-eedbf.firebaseapp.com",
  projectId: "flexfitness-eedbf",
  storageBucket: "flexfitness-eedbf.appspot.com",
  messagingSenderId: "762305469246",
  appId: "1:762305469246:web:a975e423ee893545806a6f",
  measurementId: "G-X1TED0E5G2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;