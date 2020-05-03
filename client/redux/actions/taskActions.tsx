import { defaultTask } from "../../Schema/defaults"
import TYPES from "./types"
import { ITask, ITaskState } from "../../Schema/state"

export const addTask = (index: number = -1, task: ITask) => ({
  type: TYPES.TASK,
  task: {...defaultTask, ...task}, // ensure all fields are defined
  index: index,
})

export const updateProgress = (index: number = -1, progress: number) => ({
  type: TYPES.UPDATE_PROGRESS,
  progress: progress,
  index: index
})

export const completeTask = (index: number = -1) => ({
  type: TYPES.COMPLETE_TASK,
  index: index
})

export const filterTasksSearch = (on: boolean, match: string) => ({
  type: TYPES.SEARCH_FILTER,
  match: match,
  on: on
})

export const setTasks= (tasks: ITask[]) => ({
  type: TYPES.SET_TASKS,
  tasks: tasks
})