import { GetTasksService } from './../../get-tasks.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, tap } from 'rxjs/operators';
import { ActionTypes, GetTasksSuccess } from '../actions/getTasks.action';
import { ActionTypesPut, PutTasksSuccess } from '../actions/putTasks.action';
import { ActionTypesDelete } from '../actions/deleteTask.action';
import { DeleteTaskSuccess } from './../actions/deleteTask.action';

@Injectable()
export class GetTask {
  @Effect()
  deleteTask$ = this.actions$
    .pipe(
      ofType(ActionTypesDelete.DELETE_TASK),
      switchMap((task: { type: string, payload: any }) => this.getTask.deleteTask(task.payload)
        .pipe(
          map((result) => new DeleteTaskSuccess(result))
        )
      )
    );
  @Effect()
  putTask$ = this.actions$
    .pipe(
      ofType(ActionTypesPut.PUT_TASKS),
      switchMap((task: { type: string, payload: any }) => this.getTask.putInto(task.payload)
        .pipe(
          map((result) => new PutTasksSuccess(result))
        )
      )
    );
  @Effect()
  loadMovies$ = this.actions$
    .pipe(
      ofType(ActionTypes.GET_TASKS),
      switchMap(() => this.getTask.getTasks()
        .pipe(
          map((result) => new GetTasksSuccess(result))
        )
      )
    );

  constructor(
    private actions$: Actions,
    private getTask: GetTasksService,
  ) { }
}