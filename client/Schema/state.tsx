export interface IReduxState {
  tasks: ITaskState;
  utility: IUtilityState;
}

export interface ITask {
  title: string;
  description?: string;
  tags: string[];
  progress: number;
  complete: boolean;
}

export interface ITaskState {
  list: ITask[];
  count: number;
}

export interface IUtilityState {
  modal: IModalState;
  actions: IActionsState;
  alert: IAlertState;
}


export interface IModalState {
  open: boolean;
}

export interface IActionsState {
  open: boolean;
}

export interface IAlertState {
  open: boolean;
  type: "success"|"error";
}