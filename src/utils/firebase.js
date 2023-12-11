// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgw-mb9FJHVSnnMYDy13LGkQTEmrGAanQ",
  authDomain: "netflixgpt-9390a.firebaseapp.com",
  projectId: "netflixgpt-9390a",
  storageBucket: "netflixgpt-9390a.appspot.com",
  messagingSenderId: "738758262482",
  appId: "1:738758262482:web:d5f4fc03531acbd547b70b",
  measurementId: "G-77M0ZCLN9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
