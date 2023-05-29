import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = environment.urlBack;

  constructor(private http: HttpClient, private router: Router) {}

  registro(user: any) {
    return this.http.post<any>(this.URL + '/registroUser', user)
  }

  registroColectivo(colectivo: any) {
    return this.http.post<any>(this.URL + '/registro-colectivo', colectivo)
  }

  login(user: any) {
    return this.http.post<any>(this.URL + '/login', user)
  }

  loginColectivo(colectivo: any) {
    return this.http.post<any>(this.URL + '/login-colectivo', colectivo)
  }

  logueado() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('Rol')
    localStorage.removeItem('correoElectronico')
    localStorage.removeItem('correo')
    localStorage.removeItem('id')
    localStorage.removeItem('espacio')
    this.router.navigate(['/']);
  }

  crearPublicacion(publicacion: any) {
    return this.http.post<any>(this.URL + '/crear-publicacion', publicacion)
  }

  crearEspacio(espacio: any) {
    return this.http.post<any>(this.URL + '/crear-espacio', espacio)
  }
}
