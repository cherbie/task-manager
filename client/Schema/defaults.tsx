import { IReduxState, ITask } from "./state"

export const defaultTask: ITask = {
  "title": "",
  "description": "",
  "tags": [],
  "progress": 0,
  "complete": false,
  "index": undefined,
  "filter": false
}

export const initialState: IReduxState = {
  tasks: {
    "list": [{
      "title": "Take the dogs for a work",
      "description": "Sign in with google to personalise your experience.",
      "tags": ["dogs", "excercise"],
      "progress": 0,
      "complete": false
    },
    {
      "title": "This is another",
      "description": "Sign in with google to personalise your experience.",
      "tags": ["reactjs", "expressjs", "firebase"],
      "progress": 0,
      "complete": false
    }],
    filter: {
      search: {
        on: false,
        match: ""
      }
    } 
  },
  utility: {
    modal: {
      open: false,
      task: defaultTask,
      index: -1
    },
    actions: {
      open: false
    },
    alert: {
      open: false,
      type: "success"
    },
    user: {
      details: {},
      uid: "test"
    }
  }
}