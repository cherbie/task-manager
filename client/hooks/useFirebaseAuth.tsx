import React, { useState } from "react"
import axios from "axios"
import * as firebase from "firebase/app"
import { useDispatch } from "react-redux"
import { setTasks } from "../redux/actions/taskActions"
import { setUser } from "../redux/actions/userActions"
import useApiAsync from "./useApiAsync"

export default (firebaseApp) => {
  const [isLoggedIn, setLoggedIn] = useState(false)
  const dispatch = useDispatch() // redux store dispatch accessor
  const { fetchDbTasks } = useApiAsync()

  // Async action to be processed by redux-thunk middleware
  const onLoginAsync = (uid) => {
    return (dispatch) => {
      return fetchDbTasks(uid).then((res) => {
          if(res.data.ok)
            dispatch(setTasks(res.data.tasks)) // dispatch the set tasks event
          else
            console.error(res.data.msg)
      }).catch(err => console.error(err))
    }
  }

  let provider = new firebase.auth.GoogleAuthProvider() // Google Sign-in

  // Handle third party login
  const firebaseLogin = async () => {
    firebaseApp.auth().signInWithPopup(provider).then(res => {
      setLoggedIn(true)
      dispatch(setUser(res.additionalUserInfo.profile, res.user.uid))
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
        setUser({}, "")
        dispatch(setTasks([])) // clear task list
      })
      .catch(err => console.error(err))
  }

  return { isLoggedIn, firebaseLogin, firebaseLogout }
}