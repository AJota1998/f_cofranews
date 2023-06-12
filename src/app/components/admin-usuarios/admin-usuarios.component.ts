import { Component, OnInit } from '@angular/core';
import { MENU_USUARIO_ADMIN, NavbarItem } from 'src/app/shared/components/navbar/model/navbar-item.model';
import { ExplorarService } from 'src/app/services/explorar.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.scss']
})
export class AdminUsuariosComponent implements OnInit {

  user = {
    nombre: '',
    nombreUsuario: '',
    correoElectronico: '',
    contrasena: '',
    rol: 'General',
  };

  alert: string = '';
  showMessage = false;

  alertEliminar: string = '';
  showMessageEliminar = false;

  constructor(private authService: AuthService, private usuarios: ExplorarService) {}
  menu_usuario_admin: NavbarItem[] = MENU_USUARIO_ADMIN;

  datos: any[] = []

  ngOnInit() {
      this.usuarios.getUsuarios().subscribe(res => {
        console.log(res);
        this.datos = res;
      })
  }

  registro() {

    if(this.user.nombre === "" || this.user.nombreUsuario === "" || this.user.correoElectronico === "" ||
    this.user.contrasena === "") {
      this.alert = "Faltan campos por rellenar"
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, 1700);
    } else {
      this.authService.registro(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          localStorage.setItem('correoElectronico', res.correoElectronico);
          localStorage.setItem('Rol', res.rol);
        },
        err => {
          console.log(err);
        }
      )
      window.location.reload();
    }

   
  }

  eliminarUsuario(id: any) {
    this.usuarios.eliminarUsuario(id).subscribe(res => {
      console.log(res);
    },
    err => {
      console.log(err);
      this.alertEliminar = "Usuario eliminado correctamente"
      this.showMessageEliminar = true;
      setTimeout(() => {
        this.showMessage = false;
        window.location.reload();
      }, 1700);
    });
   
  }
}
