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

  public getEspacioColectivo(): Observable<any> {
    const id = localStorage.getItem('id');
    return this.http.get<any>(environment.urlBack+`/espacios-colectivo?propiedad=${id}`)
  }

  public eliminarP(id: any): Observable<any> {
    const url = (environment.urlBack+`/eliminar-publicacion/${id}`);
    return this.http.delete(url);
  }
}
