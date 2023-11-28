// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpILRQlig-4c3fEDSGUpaoH2RuqHnmkks",
  authDomain: "netflixgpt-a9d48.firebaseapp.com",
  projectId: "netflixgpt-a9d48",
  storageBucket: "netflixgpt-a9d48.appspot.com",
  messagingSenderId: "333277206230",
  appId: "1:333277206230:web:64170675d9ec0161eadb77",
  measurementId: "G-SX5GFGZNMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
