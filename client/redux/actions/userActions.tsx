import { ITask } from "../../Schema/state"
import TYPES from "./types"

export const openActions = ({
  type: TYPES.ACTIONS,
  open: true
})

export const closeActions = ({
  type: TYPES.ACTIONS,
  open: false
})


export const actionSelect = (type: "add"|"save") => {
  if(type === "add")
    return ({
      type: TYPES.MODAL,
      open: true
    })
  else 
    return {type: type}
}