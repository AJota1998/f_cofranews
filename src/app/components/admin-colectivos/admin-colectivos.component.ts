import { Component, OnInit } from '@angular/core';
import { MENU_USUARIO_ADMIN, NavbarItem } from 'src/app/shared/components/navbar/model/navbar-item.model';
import { ExplorarService } from 'src/app/services/explorar.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-admin-colectivos',
  templateUrl: './admin-colectivos.component.html',
  styleUrls: ['./admin-colectivos.component.scss']
})

export class AdminColectivosComponent implements OnInit {

  colectivo = {
    nombreColectivo: '',
    correo: '',
    contrasena: '',
    tipo: '',
    provincia: '',
    localidad: '',
    anoFundacion: '',
    descripcion: ''
  }

  constructor(private authService: AuthService, private colectivos: ExplorarService) {}
  menu_usuario_admin: NavbarItem[] = MENU_USUARIO_ADMIN;

  datos: any[] = []
  respuestas: { [key: string]: any } = {};

  ngOnInit() {
    this.colectivos.getColectivos().subscribe(res => {
      console.log(res);
      this.datos = res;
    })

  }

  comprobarEspacio(colectivoId: string): void {
    this.colectivos.comprobarEspacio(colectivoId).subscribe(
      (respuesta) => {
        this.respuestas[colectivoId] = respuesta;
      },
      (error) => {
        console.error('Error al obtener la respuesta:', error);
        alert(error.error);
      }
    );
  }

  eliminarColectivoEspacio(colectivoId: string): void {
    this.colectivos.eliminarColectivoEspacio(colectivoId).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.error('Error al eliminar el colectivo del espacio:', error);
      }
    );
    window.location.reload();
  }

  registroColectivo() {
    this.authService.registroColectivo(this.colectivo)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('correo', res.correo);
        localStorage.setItem('id', res.id);
      },
      err => {
        console.log(err);
      }
    )
    window.location.reload();
  }

  eliminarColectivo(id: any) {
    this.colectivos.eliminarColectivo(id).subscribe(res => {
      console.log(res);
    },
    err => {
      console.log(err);
    });
    window.location.reload();
  }

}
