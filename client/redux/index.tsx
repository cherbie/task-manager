import { createStore, applyMiddleware } from "redux"
import reducer from "./reducers/index"
import { initialState } from "../Schema/defaults"
import thunk from "redux-thunk"

export const store = createStore(reducer, initialState, applyMiddleware(thunk));