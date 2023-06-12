import { Component, OnInit } from '@angular/core';
import { MENU_USUARIO_ADMIN, NavbarItem } from 'src/app/shared/components/navbar/model/navbar-item.model';
import { ExplorarService } from 'src/app/services/explorar.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-espacios',
  templateUrl: './admin-espacios.component.html',
  styleUrls: ['./admin-espacios.component.scss']
})

export class AdminEspaciosComponent implements OnInit {

  espacio = {
    nombre: '',
    descripcion: '',
    colectivos: []
  }

  alert: string = '';
  showMessage = false;

  alertEliminar: string = '';
  showMessageEliminar = false;

  constructor(private authService: AuthService, private espacios: ExplorarService) {}
  menu_usuario_admin: NavbarItem[] = MENU_USUARIO_ADMIN;

  datos: any[] = [];
  
  ngOnInit() {
      this.espacios.getEspacios().subscribe(res => {
        console.log(res);
        this.datos = res;
      })
  }

  crearEspacio() {

    if(this.espacio.nombre === "" || this.espacio.descripcion === "") {
      this.alert = "Faltan campos por rellenar"
      this.showMessage = true;

      setTimeout(() => {
        this.showMessage = false;
      }, 1700);
    } else {
      this.authService.crearEspacio(this.espacio)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {console.log(err);
        }
      )
      window.location.reload();
    }

   
  }

  eliminarEspacio(id: any) {
    this.espacios.eliminarEspacio(id).subscribe(res => {
      console.log(res);
    },
    err => {
      console.log(err);
      this.alertEliminar = "Espacio eliminado correctamente"
      this.showMessageEliminar = true;
      setTimeout(() => {
        this.showMessage = false;
        window.location.reload();
      }, 1700);
    });
    
  }
}
