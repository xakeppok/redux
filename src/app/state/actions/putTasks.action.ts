import { Action } from '@ngrx/store';
 
export enum ActionTypesPut {
    PUT_TASKS= '[Put Tasks Component] Load',
    PUT_TASKS_SUCCESS = '[Put Tasks Component] SUCCESS',
}

export class PutTasks implements Action {
  readonly type = ActionTypesPut.PUT_TASKS;
  constructor(public payload: any) {}
}

export class PutTasksSuccess implements Action {
  readonly type = ActionTypesPut.PUT_TASKS_SUCCESS;
  constructor(public payload: any) {}
}

export type Union1 = PutTasks | PutTasksSuccess;
