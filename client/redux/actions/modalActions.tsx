import TYPES from "./types"
import { ITask } from "../../Schema/state"
import { defaultTask } from "../../Schema/defaults"

// Open Modal - redux action object
export const openModal = ({
  type: TYPES.MODAL,
  open: true
})

// Close Modal - redux action object
export const closeModal = ({
  type: TYPES.MODAL,
  open: false
})

export const openEditModal = (id: number, task: ITask) => ({
  type: TYPES.MODAL,
  open: true,
  index: id,
  task: {...defaultTask, ...task}
})