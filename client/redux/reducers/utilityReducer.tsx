import { IUtilityState } from "../../Schema/StateSchema"
import initialState from "../initialState"

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