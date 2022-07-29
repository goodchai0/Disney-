import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCeX4Y7edOWmZA7HBsom9NAWRhLt4HyNzM",
    authDomain: "disneyplus-clone-83487.firebaseapp.com",
    projectId: "disneyplus-clone-83487",
    storageBucket: "disneyplus-clone-83487.appspot.com",
    messagingSenderId: "918389199715",
    appId: "1:918389199715:web:9ad0933a27b3a03aeff956",
    measurementId: "G-9K51NM3T8P"
  };

  const firebaseapp=firebase.initializeApp(firebaseConfig);
  const db=firebaseapp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage();

  export {auth,provider,storage};
  export default db;