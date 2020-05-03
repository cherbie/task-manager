import React, { useState } from "react"
import * as firebase from "firebase/app"

export default (firebaseApp) => {
  const [isLoggedIn, setLoggedIn] = useState(false)

  let provider = new firebase.auth.GoogleAuthProvider()

  const firebaseLogin = async () => {
    firebaseApp.auth().signInWithPopup(provider).then(response => {
      setLoggedIn(true)
      console.log(response)
    }).catch(err => {
      setLoggedIn(false)
      console.log(err)
    })
  }

  const firebaseLogout = async () => {
    firebaseApp.auth().signOut()
      .then(() => setLoggedIn(false))
      .catch(err => console.log(err))
  }

  return { isLoggedIn, firebaseLogin, firebaseLogout }
}