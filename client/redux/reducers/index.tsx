import taskReducer from "./taskReducer"
import utilityReducer from "./utilityReducer"
import { combineReducers } from "redux"

export default combineReducers({tasks: taskReducer, utility: utilityReducer})