import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GetTasks } from './state/actions/getTasks.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  public tasks$: Observable<any>;
  constructor(private store: Store<any>) {  }

  ngOnInit() {
    this.store.dispatch(new GetTasks());
    this.tasks$ = this.store.select((res) => res.Tasks.tasks);
  }
}
