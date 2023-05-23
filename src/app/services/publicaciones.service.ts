import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';


@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  constructor(private http: HttpClient) {}

  public getPublicaciones(): Observable<any> {
    const id = localStorage.getItem('id');
    return this.http.get<any>(environment.urlBack+`/publicaciones?propiedad=${id}`)
  }
}
