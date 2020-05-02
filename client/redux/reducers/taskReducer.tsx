import { ITaskState, ITask } from "../../Schema/state"
import { initialState, defaultTask } from "../../Schema/defaults"

export default (state: ITaskState = initialState.tasks, action) => {
  switch(action.type) {
    case "add": {
      if(typeof action.task === "undefined")
        return state
      let task = Object.assign(defaultTask, action.task)
      state.list.push(task) // append newly added task to todo list
      state.count++; // increment number of tasks
      return {... state}
    }
    case "addTask": {
      if(typeof action.task === "undefined")
        return state
      state.list.push(action.task)
      return {...state}
    }
    default: return state
  }
}