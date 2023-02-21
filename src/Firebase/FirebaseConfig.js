// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxKxBIHcQHJU6d5iZpKYjMKLvYmPTUb84",
  authDomain: "todo-app-with-firestore-88771.firebaseapp.com",
  projectId: "todo-app-with-firestore-88771",
  storageBucket: "todo-app-with-firestore-88771.appspot.com",
  messagingSenderId: "646769425091",
  appId: "1:646769425091:web:7d9209355addd25c84c076",
  measurementId: "G-GDFGQPCG4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)