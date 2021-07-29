// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA2ltTj-uBBxoh6oYcFmkixBaH_DuFdPQg",
  authDomain: "clone-ea13e.firebaseapp.com",
  projectId: "clone-ea13e",
  storageBucket: "clone-ea13e.appspot.com",
  messagingSenderId: "859426343145",
  appId: "1:859426343145:web:b918823d56db2fb6160878",
  measurementId: "G-EZSLV7T99W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };