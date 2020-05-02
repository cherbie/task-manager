import { IReduxState, ITask } from "./state"

export const defaultTask: ITask = {
  "title": "",
  "description": "",
  "tags": [],
  "progress": 0,
  "complete": false,
  "index": undefined
}

export const initialState: IReduxState = {
  tasks: {
    "list": [{
      "title": "Do homework",
      "description": "This is a lengthy description.",
      "tags": ["homework"],
      "progress": 2,
      "complete": false
    },
    {
      "title": "Do homework",
      "description": "This is a lengthy description.",
      "tags": ["homework", "adfdf", "asdfsdaf", "asfdsdaf", "asdfsdaf", "asfsadf"],
      "progress": 0,
      "complete": false
    }],
    "count": 1,
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
    }
  }
}