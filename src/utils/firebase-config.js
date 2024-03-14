// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBTfRVExaOgxjmcr6jPjh-AUidcu9Rs1oA",
  authDomain: "beatstream-97cb4.firebaseapp.com",
  projectId: "beatstream-97cb4",
  storageBucket: "beatstream-97cb4.appspot.com",
  messagingSenderId: "955330807470",
  appId: "1:955330807470:web:be88557124e0b1cc6b4f3f",
  measurementId: "G-6HTZ27J486"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app);