import taskReducer from "./taskReducer"
import utilityReducer from "./utilityReducer"
import { combineReducers } from "redux"
import { IReduxState, ITask } from "../../Schema/StateSchema"
import initialState from "../initialState"

//export default combineReducers({tasks: taskReducer, utility: utilityReducer})

export const taskDefault: ITask = {
  "title": "",
  "description": "",
  "tags": [],
  "progress": 0,
  "complete": false
}

export default (state: IReduxState = initialState, action: {type: string, [propsName: string]: any}) => {
  switch(action.type) {
    case "add": {
      if(typeof action.task === "undefined")
        return state
      let task = Object.assign(taskDefault, action.task)
      state.tasks.list.push(task) // append newly added task to todo list
      state.tasks.count++; // increment number of tasks
      return {...state }
    }
    case "modal": {
      console.log("modal reducer")
      console.log(action)
      if(typeof action.open === "undefined")
        return state
      state.utility.modal.open = action.open
      console.log(state)
      return {...state}
    }
    case "actions": {
      if(typeof action.open === "undefined")
        return state
      state.utility.actions.open = action.open 
      return {...state }
    }
    default: return state
  }
}