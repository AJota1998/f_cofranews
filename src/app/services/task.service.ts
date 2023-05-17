import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  public getAllTask(): Observable<{_id: string, nombre: string}> {
    return this.http.get<{_id: string, nombre: string}>(environment.urlBack+'/task');
  }
}
