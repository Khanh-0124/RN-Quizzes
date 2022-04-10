import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDn3VyvVwJgSzrGrmmuKB0uPTE7fG4rEjk",
  authDomain: "fir-auth-57261.firebaseapp.com",
  projectId: "fir-auth-57261",
  storageBucket: "fir-auth-57261.appspot.com",
  messagingSenderId: "398324912932",
  appId: "1:398324912932:web:25d929061081c0e3b719b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();
export { auth, db };
