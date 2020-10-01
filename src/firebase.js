import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOGoQ3yh5hIw7eaYNu3XUwCcrRPopOMvY",
  authDomain: "messenger-clone-6f125.firebaseapp.com",
  databaseURL: "https://messenger-clone-6f125.firebaseio.com",
  projectId: "messenger-clone-6f125",
  storageBucket: "messenger-clone-6f125.appspot.com",
  messagingSenderId: "280860159875",
  appId: "1:280860159875:web:3683f9a785e168f5da10b6",
  measurementId: "G-FGNJVVPQ1L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
