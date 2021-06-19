// Your web app's Firebase configuration
// import * as  firebase from "firebase/app";
 import firebase from 'firebase'

 import 'firebase/storage';
// import 'firebase/firestore';

const firebaseConfig = {
  
    apiKey: "AIzaSyB4munJYwgBPJ13xone2R_-ZEGwuUCPxWo",
    authDomain: "paasktiti-shop.firebaseapp.com",
    projectId: "paasktiti-shop",
    storageBucket: "paasktiti-shop.appspot.com",
    messagingSenderId: "941227677180",
    appId: "1:941227677180:web:5d7f4ba0ece9715a288e79"
  
  };
  // Initialize Firebase

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

 
  //const Storage = firebase.firestore();

  const Storage = app.storage();
  const db = app.firestore();
  const auth = app.auth()

  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { db, Storage, auth, timestamp };





  