import { createStore } from "redux"
import reducer from "./reducers/index"
import { initialState } from "../Schema/defaults"

export const store = createStore(reducer, initialState);