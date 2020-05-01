import { ITask } from "../../Schema/StateSchema"
import { taskDefault } from "../reducers/taskReducer"
import { openModal } from "./modalActions"

export const openActions = ({
  type: "actions",
  open: true
})

export const closeActions = ({
  type: "actions",
  open: false
})


export const actionSelect = (type: "add"|"save"|"edit", values?: ITask) => {
  if (type === "add")
    return ({
      type: "modal",
      open: true
    }) // open modal action object
  else {
    return ({
      type: type
    })
  }
}

export default { openActions, closeActions, actionSelect }