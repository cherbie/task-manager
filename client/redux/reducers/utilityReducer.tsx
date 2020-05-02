import { IUtilityState } from "../../Schema/state"
import { initialState, defaultTask } from "../../Schema/defaults"
import TYPES from "../actions/types"

export default (state: IUtilityState = initialState.utility, action) => {
  console.log(state)
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
    default: return state
  }
}