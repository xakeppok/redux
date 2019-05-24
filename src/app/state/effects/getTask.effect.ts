import { GetTasksService } from './../../get-tasks.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, tap } from 'rxjs/operators';
import { ActionTypes, GetTasksSuccess } from '../actions/getTasks.action';
 
@Injectable()
export class GetTask {
 
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
    private getTask: GetTasksService
  ) {}
}