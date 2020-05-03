import { ITaskState, ITask } from "../../Schema/state"
import { initialState, defaultTask } from "../../Schema/defaults"
import TYPES from "../actions/types"

export default (state: ITaskState = initialState.tasks, action) => {
  switch(action.type) {
    case TYPES.TASK: { // ADD & EDIT TASKS
      if(typeof action.task === "undefined")
        return state // error
      
      let task = Object.assign({}, defaultTask, action.task)

      // Set filter status if appropriate
      let regex = new RegExp(state.filter.search.match, "i")
      if(state.filter.search.on && regex.test(task.title))
        task.filter = true
      
      let nstate = {...state} // new state

      if(action.index === -1) // add new task
        nstate.list.push(task)
      else // edit existing task
        nstate.list[action.index] = task

      return {...state, ...nstate}
    }
    case TYPES.UPDATE_PROGRESS: {
      if(typeof action.progress === "undefined" || typeof action.index === "undefined" || action.index < 0)
        return state 
      
      let nstate = {...state}
      nstate.list[action.index].progress = action.progress // update progress
      return {...state, ...nstate}
    }
    case TYPES.COMPLETE_TASK: {
      if(typeof action.index === "undefined" || action.index < 0)
        return state
      let nstate = {...state}
      nstate.list = state.list.filter((v, index) => index !== action.index) // exclude the appropriate index element
      return {...state, ...nstate}
    }
    case TYPES.SEARCH_FILTER: {
      if(typeof action.match === "undefined" || typeof action.on === "undefined")
        return state
      
      let nstate = {...state}
      nstate.filter.search.on = action.on
      nstate.filter.search.match = action.match

      // SET TASK TO DISPLAY OR NOT
      let regex = new RegExp(action.match, 'i')
      
      nstate.list = state.list.map((value, index) => {
        if(regex.test(value.title)) // match string with regular expression
          value.filter = true
        else
          value.filter = false
        return value
      })

      return {...state, ...nstate}
    }
    case TYPES.SET_TASKS: {
      if(typeof action.tasks === "undefined")
        return state
      let nstate = {...state}
      nstate.list = [...action.tasks] // set task list
      return Object.assign({}, nstate);
    }
    default: return state
  }
}