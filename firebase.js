import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBD8-nsW-lM_fIurbJ9ENbhTpMJ1EH7oy8",
  authDomain: "blog-react-database.firebaseapp.com",
  projectId: "blog-react-database",
  storageBucket: "blog-react-database.appspot.com",
  messagingSenderId: "649898545146",
  appId: "1:649898545146:web:625ad6efa6cff67ce55e43",
  measurementId: "G-NHPBSC7J17",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
export const auth = firebase.auth();
export const firestore = firebase.firestore;
export default db;
