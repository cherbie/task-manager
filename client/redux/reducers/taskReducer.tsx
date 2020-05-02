import { ITaskState, ITask } from "../../Schema/state"
import { initialState, defaultTask } from "../../Schema/defaults"

export default (state: ITaskState = initialState.tasks, action) => {
  switch(action.type) {
    case "addTask": {
      if(typeof action.task === "undefined")
        return state
      let task = Object.assign({}, defaultTask, action.task)
      let nstate = {...state}
      nstate.list.push(task) // append newly added task to todo list
      nstate.count++; // increment number of tasks
      return {...state, ...nstate}
    }
    default: return state
  }
}