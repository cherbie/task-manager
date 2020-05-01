import { ITaskState, ITask } from "../../Schema/StateSchema"

const initialState: ITaskState = ({
  "list": [{
    "title": "Do homework",
    "description": "This is a lengthy description",
    "tags": ["homework"],
    "progress": 0,
    "complete": false
  }],
  "count": 1,
})

const taskDefault: ITask = {
  "title": "",
  "description": "",
  "tags": [],
  "progress": 0,
  "complete": false
}


export default (state: ITaskState = initialState, action) => {
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