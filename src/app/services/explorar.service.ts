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

  public getUsuarios(): Observable<any> {
    return this.http.get<any>(environment.urlBack+'/all-users');
  }

  public getPublicaciones(): Observable<any> {
    return this.http.get<any>(environment.urlBack+'/all-publicaciones');
  }

  public getColectivos(): Observable<any> {
    return this.http.get<any>(environment.urlBack+'/all-colectivos');
  }  

  public seguir(id: string): Observable<any> {
    const correo = localStorage.getItem('correoElectronico');
    return this.http.get<any>(environment.urlBack+`/seguir-espacio?propiedad=${id}?propiedad2=${correo}`);
  }
  
}
