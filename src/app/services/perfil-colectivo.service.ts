import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PerfilColectivoService {

  constructor(private http: HttpClient) {}

  public getDatos(): Observable<any> {
    const correo = localStorage.getItem('correo');
    return this.http.get<any>(environment.urlBack+`/perfil-colectivo?propiedad=${correo}`)
  }

  public getInfo(): Observable<any> {
    const correo = localStorage.getItem('correo');
    return this.http.get<any>(environment.urlBack+`/info-colectivo?propiedad=${correo}`)
  }

  public actualizarColectivo(colectivo: any) {
    return this.http.put(environment.urlBack+'/actualizar-colectivo', colectivo)
  }
}
