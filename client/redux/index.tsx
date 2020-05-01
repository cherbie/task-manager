import { createStore } from "redux"
import reducer from "./reducers/index"
import initialState from "./initialState"

export const store = createStore(reducer, initialState);