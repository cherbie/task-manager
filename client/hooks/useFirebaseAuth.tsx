import React, { useState } from "react"
import * as firebase from "firebase/app"
import { useDispatch } from "react-redux"
import axios from "axios"
import { setTasks } from "../redux/actions/taskActions"

const onLoginAsync = (uid) => {
  const fetchTasks = (uid: string) => {
    let body = {
      "uid": uid
    }
    return axios.post("https://us-central1-todo-61039.cloudfunctions.net/api/getTasks", body) // firebase function
  }

  return (dispatch) => {
    return fetchTasks(uid).then((res) => {
        console.log(res.data)
        if(res.data.ok)
          dispatch(setTasks(res.data.tasks)) // dispatch the set tasks event
    }).catch(err => console.error(err))
  }
}

export default (firebaseApp) => {
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState(undefined)
  const dispatch = useDispatch()

  let provider = new firebase.auth.GoogleAuthProvider() // Google Sign-in

  // Handle third party login
  const firebaseLogin = async () => {
    firebaseApp.auth().signInWithPopup(provider).then(res => {
      setLoggedIn(true)
      setUser(res.user)
      console.log(res)
      dispatch(onLoginAsync(res.user.uid))
    }).catch(err => {
      setLoggedIn(false)
      console.log(err)
    })
  }

  // handle user logout
  const firebaseLogout = async () => {
    firebaseApp.auth().signOut()
      .then(() => {
        setLoggedIn(false) // toggle user login
        setUser(undefined)
        dispatch(setTasks([])) // clear task list
      })
      .catch(err => console.error(err))
  }

  return { isLoggedIn, user, firebaseLogin, firebaseLogout }
}