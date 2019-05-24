import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GetTasks } from './state/actions/getTasks.action';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { Task } from './task';
import { GetTasksService } from './get-tasks.service';
import { PutTasks } from './state/actions/putTasks.action';
import { DeleteTask } from './state/actions/deleteTask.action';
import { map, switchMap, tap, distinctUntilChanged, take } from 'rxjs/operators';
import { Subscription } from 'types/rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public tasks$: Observable<any>;
  public subscr: Subscription;
  taskForm = new FormGroup({
    taskName: new FormControl(''),
    taskDate: new FormControl(''),
  });
  constructor(private store: Store<any>, private getTasksService: GetTasksService) { }

  ngOnInit() {
    this.store.dispatch(new GetTasks());
    this.tasks$ = this.store.select((res) => res.Tasks.tasks);
    // this.taskForm.valueChanges.subscribe((data: Task) => console.log(data));
  }
  putIntoTasks() {
    const data$ = this.tasks$;
    this.subscr = data$.pipe(
      take(1),
      map((data: any) => {
        if (data.length === 0) {
          return 0;
        }
        return data[data.length - 1].id;
      }),
      tap((res: any) => this.store.dispatch(new PutTasks({ id: res + 1, ...this.taskForm.value })))
    ).subscribe((res) => console.log(res));
    // data$.unsubscribe()
    // this.getTasksService.putInto(this.taskForm.value).subscribe();
  }
  deleteTask(id) {
    this.store.dispatch(new DeleteTask(id))
    //this.getTasksService.deleteTask(id).subscribe((data) => console.log(data));
  }

  ngOnDestroy() {
    this.subscr.unsubscribe();
  }



}
