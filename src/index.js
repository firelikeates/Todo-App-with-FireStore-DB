import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { collection, getDocs, addDoc, deleteDoc } from 'firebase/firestore';
import { db } from "../src/Firebase/FirebaseConfig"

// create a array to set into main items array
var items2 = []
//get collection from fireStore
var getPromiseFromFirebase = collection(db, "Tasks")
// set values to fake array that we created
getDocs(getPromiseFromFirebase).then(res => res.docs.forEach(snapshot => {
  items2.push(snapshot.data().Task)
})).then(() => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App array={items2} />
    </React.StrictMode>
  );
})



