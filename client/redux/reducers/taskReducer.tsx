import { ITaskState, ITask } from "../../Schema/state"
import { initialState, defaultTask } from "../../Schema/defaults"
import TYPES from "../actions/types"

export default (state: ITaskState = initialState.tasks, action) => {
  switch(action.type) {
    case TYPES.TASK: { // ADD & EDIT TASKS
      if(typeof action.task === "undefined")
        return state // error
      
      let task = Object.assign({}, defaultTask, action.task)
      let nstate = {...state} // new state
      if(action.index === -1) {
        nstate.list.push(task)  // add new task
      }
      else {
        nstate.list[action.index] = action.task // edit existing task
      }
      return {...state, ...nstate}
    }
    case TYPES.UPDATE_PROGRESS: {
      if(typeof action.progress === "undefined" || typeof action.index === "undefined" || action.index < 0)
        return state 
      
      let nstate = {...state}
      nstate.list[action.index].progress = action.progress // update progress
      return {...state, ...nstate}
    }
    case TYPES.COMPLETE_TASK: {
      if(typeof action.index === "undefined" || action.index < 0)
        return state
    
      let nstate = {...state}
      nstate.list = state.list.filter((v, index) => index !== action.index) // exclude the appropriate index element
      return {...state, ...nstate}
    }
    default: return state
  }
}