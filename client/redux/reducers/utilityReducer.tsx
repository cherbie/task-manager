import { IUtilityState } from "../../Schema/state"
import { initialState } from "../../Schema/defaults"

export default (state: IUtilityState = initialState.utility, action) => {
  console.log(state)
  switch(action.type) {
    case "modal": {
      if(typeof action.open === "undefined")
        return state
      state.modal.open = action.open
      return {...state }
    }
    default: return state
  }
}