import { IUtilityState } from "../../Schema/StateSchema"

const initialState: IUtilityState = ({
  modal: {
    open: false
  },
  options: {
    open: false
  },
  alert: {
    open: false,
    type: "success"
  }
})

export default (state: IUtilityState = initialState, action) => {
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