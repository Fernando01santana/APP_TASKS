import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDS8eHi6i8ht80a1RcZP9npUte8BJH9CuM",
  authDomain: "to-do-list-6bc79.firebaseapp.com",
  projectId: "to-do-list-6bc79",
  storageBucket: "to-do-list-6bc79.appspot.com",
  messagingSenderId: "157369763469",
  appId: "1:157369763469:web:fbcada7fdcccf75c3e04c4"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const database = firebaseApp.firestore();
const auth = firebase.auth();

export default database


