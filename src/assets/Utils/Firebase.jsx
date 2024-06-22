// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzzP-MbUk0YecuIo6GxEXikOPEew7zbn4",
  authDomain: "netflixgpt-9590d.firebaseapp.com",
  projectId: "netflixgpt-9590d",
  storageBucket: "netflixgpt-9590d.appspot.com",
  messagingSenderId: "786540152697",
  appId: "1:786540152697:web:aedebbb86467d275ccd1a8",
  measurementId: "G-REH2RJ4012"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);