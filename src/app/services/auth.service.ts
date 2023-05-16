import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:5000/api';

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
    this.router.navigate(['/']);
  }

  crearPublicacion(publicacion: any) {
    return this.http.post<any>(this.URL + '/crear-publicacion', publicacion)
  }

  crearEspacio(espacio: any) {
    return this.http.post<any>(this.URL + '/crear-espacio', espacio)
  }
}
