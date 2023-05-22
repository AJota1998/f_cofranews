import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PerfilUsuarioService {

  constructor(private http: HttpClient) {}

  public getDatos(): Observable<any> {
    const correo = localStorage.getItem('correoElectronico');
    return this.http.get<any>(environment.urlBack+`/perfil-usuario?propiedad=${correo}`)
  }
}
