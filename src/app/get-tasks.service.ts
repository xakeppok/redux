import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class GetTasksService {
  constructor(private http: HttpClient) { }
  getTasks(){
    return this.http.get(`${environment.api_url}/getTasks`);
  }
  putInto(task): Observable<any>{
    console.log('fasdfsdafs', task);
    return this.http.post(`${environment.api_url}/createTask`, task);
  }
  deleteTask(id): Observable<any> {
    return this.http.delete(`${environment.api_url}/delete/${id}`);
  }
}
