// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-_ANqhsb6zFgZBSrSxHRaJYBXswDgHAA",
  authDomain: "pinnacle-food-group.firebaseapp.com",
  projectId: "pinnacle-food-group",
  storageBucket: "pinnacle-food-group.firebasestorage.app",
  messagingSenderId: "207981337151",
  appId: "1:207981337151:web:4a7dae8114af35954cf68a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
