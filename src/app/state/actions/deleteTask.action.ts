import { Action } from '@ngrx/store';
 
export enum ActionTypesDelete {
    DELETE_TASK= '[Delete Task] Load',
    DELETE_TASK_SUCCESS = '[Delete Task Component] SUCCESS',
}

export class DeleteTask implements Action {
  readonly type = ActionTypesDelete.DELETE_TASK;
  constructor(public payload: any) {}
}

export class DeleteTaskSuccess implements Action {
    DELETE_TASK_SUCCESS = '[Delete Task Component] SUCCESS';
    readonly type = ActionTypesDelete.DELETE_TASK_SUCCESS;
  constructor(public payload: any) {}
}

export type Union2 = DeleteTask | DeleteTaskSuccess;
