import { IUtilityState } from "../../Schema/state"
import { initialState } from "../../Schema/defaults"

export default (state: IUtilityState = initialState.utility, action) => {
  console.log(state)
  switch(action.type) {
    case "modal": {
      if(typeof action.open === "undefined")
        return state
      let nstate = {...state}
      nstate.modal.open = action.open
      return {...state, ...nstate}
    }
    case "actions": {
      if(typeof action.open === "undefined")
        return state
      let nstate = {...state}
      nstate.actions.open = action.open
      return {...state, ...nstate}
    }
    default: return state
  }
}