import { Provider } from "react-redux"
import React from "react"
import { store } from "../redux/index"
import App from "./App"
import useFirebase from "../hooks/useFirebase"

export default () => {
  const firebaseApp = useFirebase()

  return (
    <Provider store={store}>
      <App firebase={firebaseApp} />
    </Provider>
  )
}