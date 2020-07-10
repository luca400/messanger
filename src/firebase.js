import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDdd7uM6hSAds2Iz8hrDr0cdzOTM44enpk",
  authDomain: "messanger-4215c.firebaseapp.com",
  databaseURL: "https://messanger-4215c.firebaseio.com",
  projectId: "messanger-4215c",
  storageBucket: "messanger-4215c.appspot.com",
  messagingSenderId: "836517991378",
  appId: "1:836517991378:web:96da0db8bf201d7b31ee0b",
  measurementId: "G-MQ5SNY2DP7",
});

const db = firebaseApp.firestore();

export default db;
