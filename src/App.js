import React, { Fragment, useEffect, useState } from 'react'
import Add from './Components/Add'
import Navbar from './Components/Navbar'
import Todo from './Components/Todo'
import { doc, collection, getDocs, addDoc, deleteDoc } from 'firebase/firestore';
import { db } from "../src/Firebase/FirebaseConfig"



const App = (props) => {

  const [items, SetItems] = useState(props.array);
  const [error, SetError] = useState("")

  useEffect(() => {

  }, [items.length])
  const AddItem = (item) => {
    if (item === "") {
      SetError(`You must write some task to do!`)
    } else {
      SetError("")
      if (items.indexOf(item) < 0) {
        SetItems(items.concat(item))
        SetError("")
        addDoc(collection(db, "Tasks"), {
          Task: item
        })
      } else {
        SetError(`You have already added the ${item} to your list!`)
      }
    }
  }

  const ClearAll = () => {
    SetItems([])
    var getPromiseFromFirebase = collection(db, "Tasks")
    // set values to fake array that we created
    getDocs(getPromiseFromFirebase).then(res => res.docs.forEach(snapshot => {
        deleteDoc(doc(db, "Tasks", snapshot.id))
    }))
  }

  const deleteone = (item) => {
    var getPromiseFromFirebase = collection(db, "Tasks")
    // set values to fake array that we created
    getDocs(getPromiseFromFirebase).then(res => res.docs.forEach(snapshot => {
      if (snapshot.data().Task === item) {
        deleteDoc(doc(db, "Tasks", snapshot.id))

      }
    }))
    const arr = items.filter(i => {
      return i !== item
    })
    SetItems(arr)
  }

  return (
    <Fragment>
      <Navbar />
      <main>
        <Add error={error} AddItem={AddItem} />
        <Todo deleteone={deleteone} clearAll={ClearAll} items={items} />
      </main>
    </Fragment>
  )
}

export default App