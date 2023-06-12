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
  alert: string = '';
  showMessage = false;

  alertEliminar: string = '';
  showMessageEliminar = false;

  alertComprobar: string = ''
  showMessageComprobar = false;

  alertAbandonar: string = '';
  showMessageAbandonar = false;

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
        this.alertComprobar = error.error;
        this.showMessageComprobar = true; 
        setTimeout(() => {
          this.showMessageComprobar = false;
        }, 1700);
      }
    );
  }

  eliminarColectivoEspacio(colectivoId: string): void {
    this.colectivos.eliminarColectivoEspacio(colectivoId).subscribe(
      (res) => {
        console.log(res);
        this.alertAbandonar = "Colectivo eliminado del espacio correctamente";
        this.showMessageAbandonar = true;
        setTimeout(() => {
          this.showMessageAbandonar = false;
          window.location.reload();
        }, 1700);
      },
      (error) => {
        console.error('Error al eliminar el colectivo del espacio:', error);
      }
    );
    
  }

  registroColectivo() {

    if(this.colectivo.nombreColectivo === "" || this.colectivo.correo === "" || this.colectivo.contrasena === "" ||
     this.colectivo.tipo === "" || this.colectivo.provincia === "" || this.colectivo.localidad === ""
     || this.colectivo.anoFundacion === "" || this.colectivo.descripcion === "") {
      this.alert = "Faltan campos por rellenar"
      this.showMessage = true;

      setTimeout(() => {
        this.showMessage = false;
      }, 1700);
     } else {
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

    
  }

  eliminarColectivo(id: any) {
    this.colectivos.eliminarColectivo(id).subscribe(res => {
      console.log(res);
      this.alertEliminar = "Colectivo eliminado correctamente"
      this.showMessageEliminar = true;

     
    },
    err => {
      console.log(err);
      this.alertEliminar = "Colectivo eliminado correctamente"
      this.showMessageEliminar = true;
      setTimeout(() => {
        this.showMessageEliminar = false;
        window.location.reload();
      }, 1700);
    });
   
  }

}
