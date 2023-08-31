import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBiyq5NDJXTQy5DO2UJXODSpOigM13M7Hc",
  authDomain: "subtle-twitter-clone-58f66.firebaseapp.com",
  databaseURL: "https://subtle-twitter-clone-58f66-default-rtdb.firebaseio.com",
  projectId: "subtle-twitter-clone-58f66",
  storageBucket: "subtle-twitter-clone-58f66.appspot.com",
  messagingSenderId: "135993794645",
  appId: "1:135993794645:web:8748124c59fefbfb8bb4dc",
  measurementId: "G-DND930MQYL",
};

const firestoreApp = firebase.initializeApp(firebaseConfig)

const db = firestoreApp.firestore()

export default db;
