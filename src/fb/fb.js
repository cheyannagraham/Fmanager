import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDtE5-_Z1TtaD97au7pDmWe6AOEXcKIE3M",
    authDomain: "fmanager-ba544.firebaseapp.com",
    databaseURL: "https://fmanager-ba544.firebaseio.com",
    projectId: "fmanager-ba544",
    storageBucket: "fmanager-ba544.appspot.com",
    messagingSenderId: "116993137159"
  };

firebase.initializeApp(config);

const db = firebase.firestore();

export const auth = firebase.auth();
export default db;
