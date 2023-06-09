import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PrivateTaskService {

  constructor(private http: HttpClient) {}

    public getAllTask(): Observable<any> {
      const correo = localStorage.getItem('correoElectronico');
    return this.http.get<any>(environment.urlBack+`/private-task?propiedad=${correo}`);
  }

  public getPublicaciones(id: string) {
    return this.http.get<any>(environment.urlBack+`/contenido-espacios?propiedad=${id}`);
  }

  public abandonar(id: any): Observable<any> {
    const correo = localStorage.getItem('correoElectronico');
    const body = {
      propiedad: id,
      propiedad2: correo
    };
    return this.http.put<any>(environment.urlBack + '/abandonar-espacio', body);
  }
}
