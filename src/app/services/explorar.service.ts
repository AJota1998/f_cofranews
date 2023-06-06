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
    const body = {
      propiedad: id,
      propiedad2: correo
    };
    return this.http.put<any>(environment.urlBack + '/seguir-espacio', body);
  }
  
  public pertenecer(id: any) {
    const id_colectivo = localStorage.getItem('id');
    const body = {
      propiedad: id_colectivo,
      propiedad2: id
    };
    return this.http.put<any>(environment.urlBack + '/pertenecer-espacio', body);
  }

  public dejarde(id: any) {
    const id_colectivo = localStorage.getItem('id');
    const body = {
      propiedad: id_colectivo,
      propiedad2: id
    };
    return this.http.put<any>(environment.urlBack + '/salir-espacio', body);
  }

  public verificar(id_colectivo: any) {
    const url = environment.urlBack + '/verificar';
    return this.http.post<boolean>(url, { id_colectivo });
  }

  eliminarColectivo(id_colectivo: any) {
    const url = environment.urlBack + `/eliminar-colectivo/${id_colectivo}`;
    return this.http.delete(url);
  }

  eliminarEspacio(id_espacio: any) {
    const url = environment.urlBack + `/eliminar-espacio/${id_espacio}`;
    return this.http.delete(url);
  }

  eliminarUsuario(id_espacio: any) {
    const url = environment.urlBack + `/eliminar-usuario/${id_espacio}`;
    return this.http.delete(url);
  }

  comprobarEspacio(id_colectivo: any) {
    return this.http.get<any>(environment.urlBack+`/espacio_del_colectivo/${id_colectivo}`);
  }

  eliminarColectivoEspacio(colectivoId: string) {
    return this.http.delete(environment.urlBack+`/eliminar-colectivo-espacio/${colectivoId}`);
  }
   
}
