import { defaultTask } from "../../Schema/defaults"

export const addNewTask = (task) => ({
  type: "addTask",
  task: Object.assign(defaultTask, task) // ensure all fields are defined
})