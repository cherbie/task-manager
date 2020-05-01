import { Provider } from "react-redux"
import React from "react"
import { store } from "../redux/index"
import App from "./App"

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)