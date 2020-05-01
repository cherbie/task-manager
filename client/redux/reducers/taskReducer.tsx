import { ITaskState, ITask } from "../../Schema/StateSchema"
import initialState from "../initialState"

export const taskDefault: ITask = {
  "title": "",
  "description": "",
  "tags": [],
  "progress": 0,
  "complete": false
}


export default (state: ITaskState = initialState.tasks, action) => {
  switch(action.type) {
    case "add": {
      if(typeof action.task === "undefined")
        return state
      let task = Object.assign(taskDefault, action.task)
      state.list.push(task) // append newly added task to todo list
      state.count++; // increment number of tasks
      return {... state}
    }
    default: return state
  }
}