import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBPSb-FMpYmWYL2YxV0DAQ5iz4LXk4WSZs",
    authDomain: "clone-3ba98.firebaseapp.com",
    projectId: "clone-3ba98",
    storageBucket: "clone-3ba98.appspot.com",
    messagingSenderId: "1013853595653",
    appId: "1:1013853595653:web:8f9c97b3f9202d1de4d46c",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = app.firestore();

export { auth, provider, db };
