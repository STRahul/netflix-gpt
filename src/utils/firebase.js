// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOQEuBigf_W-kE9oBFrxANVQDtNPq7o48",
  authDomain: "netflixgpt-e92d4.firebaseapp.com",
  projectId: "netflixgpt-e92d4",
  storageBucket: "netflixgpt-e92d4.appspot.com",
  messagingSenderId: "784075338892",
  appId: "1:784075338892:web:cab51d74ac6932e11837a9",
  measurementId: "G-D5H7RPZBNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
