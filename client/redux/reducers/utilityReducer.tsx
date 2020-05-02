import { IUtilityState } from "../../Schema/state"
import { initialState } from "../../Schema/defaults"

export default (state: IUtilityState = initialState.utility, action) => {
  console.log(state)
  switch(action.type) {
    case "modal": {
      console.log("modal reducer")
      console.log(action)
      if(typeof action.open === "undefined")
        return state
      state.modal.open = action.open
      console.log(state)
      return {...state}
    }
    case "actions": {
      if(typeof action.open === "undefined")
        return state
      state.actions.open = action.open 
      return {...state }
    }
    default: return state
  }
}