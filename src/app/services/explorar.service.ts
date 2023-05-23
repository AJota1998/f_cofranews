import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ExplorarService {

  constructor(private http: HttpClient) {}

  public getEspacios(): Observable<any> {
    return this.http.get<any>(environment.urlBack+'/explorar')
  }

  public getEspaciosColectivo(): Observable<any> {
    const id = localStorage.getItem('id');
    return this.http.get<any>(environment.urlBack+`/espacios-colectivo?propiedad=${id}`)
  }
}
