import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore"; // Import Firestore
import "firebase/compat/auth"; // Import Auth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyN80atjvk9XmMW3EStDFWivpAcRofrEs",
  authDomain: "cone-b766f.firebaseapp.com",
  projectId: "cone-b766f",
  storageBucket: "cone-b766f.appspot.com",
  messagingSenderId: "941859828511",
  appId: "1:941859828511:web:cecfffab69946331d4b62a",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firestore and Auth
export const auth = getAuth(app);
export const db = app.firestore(); // Call firestore() to get the Firestore instance
