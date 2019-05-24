import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetTasksService {
  getTasks(){
    return this.http.get('http://localhost:3000/todoList')
  }
  constructor(private http: HttpClient) { }
}
