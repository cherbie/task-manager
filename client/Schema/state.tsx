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
  index?: number
  filter?: boolean
}

export interface ITaskState {
  list: ITask[];
  filter?: IFilter; // toggle if tasks should be filtered -- only support regex search match for now
}

export interface IUtilityState {
  modal: IModalState;
  actions: IActionsState;
  alert: IAlertState;
  user: IUser;
}

export interface IFilter {
  search: ISearchFilter
}

export interface ISearchFilter {
  on: boolean;
  match: string;
}

export interface IModalState {
  open: boolean;
  task?: ITask; // edit task functionality
  index?: number; // edit task functionality
}

export interface IActionsState {
  open: boolean;
}

export interface IAlertState {
  open: boolean;
  type: "success"|"error";
}

export interface IUser {
  details: object;
  uid: string;
}