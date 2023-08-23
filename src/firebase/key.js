// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCrg6dcsbHtKKmoBZs2C5jnYXidbYC-Ujg",
  authDomain: "qitt-login.firebaseapp.com",
  projectId: "qitt-login",
  storageBucket: "qitt-login.appspot.com",
  messagingSenderId: "700781099120",
  appId: "1:700781099120:web:f67b540b787e351b489cb5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);