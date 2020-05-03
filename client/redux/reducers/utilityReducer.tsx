import { IUtilityState } from "../../schema/state"
import { initialState, defaultTask } from "../../schema/defaults"
import TYPES from "../actions/types"

export default (state: IUtilityState = initialState.utility, action) => {
  switch(action.type) {
    case TYPES.MODAL: {
      if(typeof action.open === "undefined")
        return state
      let nstate = {...state} // new state
      nstate.modal.open = action.open
      if(action.index >= 0) {
        nstate.modal.index = action.index 
        nstate.modal.task = action.task
      }
      else { // set for adding task
        nstate.modal.index = -1
        nstate.modal.task = Object.assign({}, defaultTask)
      }
      return {...state, ...nstate}
    }
    case TYPES.ACTIONS: {
      if(typeof action.open === "undefined")
        return state
      let nstate = {...state}
      nstate.actions.open = action.open
      return {...state, ...nstate}
    }
    case TYPES.SET_USER: {
      if(typeof action.details === "undefined" || typeof action.uid === "undefined")
        return state
      let nstate = {...state}
      nstate.user.details = {...action.details}
      nstate.user.uid = action.uid
      return {...nstate}
    }
    default: return state
  }
}