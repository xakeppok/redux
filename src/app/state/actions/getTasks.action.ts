import { Action } from '@ngrx/store';
 
export enum ActionTypes {
  GET_TASKS = '[Tasks Component] Load',
  GET_TASKS_SUCCESS = '[Tasks Component] SUCCESS',
}

export class GetTasks implements Action {
  readonly type = ActionTypes.GET_TASKS;
}

export class GetTasksSuccess implements Action {
  readonly type = ActionTypes.GET_TASKS_SUCCESS;
  constructor(public payload: any) {}
}

export type Union = GetTasks | GetTasksSuccess;
