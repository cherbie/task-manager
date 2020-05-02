import { IReduxState, ITask } from "./state"

export const initialState: IReduxState = {
  tasks: {
    "list": [{
      "title": "Do homework",
      "description": "This is a lengthy description.",
      "tags": ["homework"],
      "progress": 0,
      "complete": false
    }],
    "count": 1,
  },
  utility: {
    modal: {
      open: false
    },
    actions: {
      open: false
    },
    alert: {
      open: false,
      type: "success"
    }
  }
}

export const defaultTask: ITask = {
  "title": "",
  "description": "",
  "tags": [],
  "progress": 0,
  "complete": false
}