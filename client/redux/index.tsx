import { createStore, applyMiddleware } from "redux"
import reducer from "./reducers/index"
import { initialState } from "../schema/defaults"
import thunk from "redux-thunk"

export const store = createStore(reducer, initialState, applyMiddleware(thunk));