// Your web app's Firebase configuration
// import * as  firebase from "firebase/app";
 import firebase from 'firebase'

 import 'firebase/storage';
// import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBt1rilutVzpbJptcLHGRVBDg_upI2atKs",
    authDomain: "ghana-bead-landing.firebaseapp.com",
    projectId: "ghana-bead-landing",
    storageBucket: "ghana-bead-landing.appspot.com",
    messagingSenderId: "581453582119",
    appId: "1:581453582119:web:2738aac4bf6de4f10fe302"
  };
  // Initialize Firebase

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

 
  //const Storage = firebase.firestore();

  const Storage = app.storage();
  const db = app.firestore();
  const auth = app.auth()

  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { db, Storage, auth, timestamp };





  