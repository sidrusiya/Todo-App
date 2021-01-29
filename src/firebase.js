import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBKsvPqBJw6DH4LuTRppkL44WyBLdu6eso",
  authDomain: "todo-app-913a8.firebaseapp.com",
  projectId: "todo-app-913a8",
  storageBucket: "todo-app-913a8.appspot.com",
  messagingSenderId: "595703763627",
  appId: "1:595703763627:web:e799484b9b88c518f8ddee",
  measurementId: "G-7T2LGVDE6P"
}); 

const db = firebaseApp.firestore();

export default db;