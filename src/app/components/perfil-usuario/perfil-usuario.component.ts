import { Component, OnInit } from '@angular/core';
import { MENU_USUARIO_GENERAL, NavbarItem } from 'src/app/shared/components/navbar/model/navbar-item.model';
import { PerfilUsuarioService } from 'src/app/services/perfil-usuario.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})
export class PerfilUsuarioComponent implements OnInit {

  constructor(private datosperfil: PerfilUsuarioService ) {}
  menu_usuario_general: NavbarItem[] = MENU_USUARIO_GENERAL;

  datos: any[] = []
  alert: any = '';
  showMessage = false;
  showError = false;

  ngOnInit() {
    this.datosperfil.getDatos().subscribe(res => {
      console.log(res);
      this.datos = res;
    })
  }

  actualizarUsuario(usuario: any) {
    this.datosperfil.actualizarUsuario(usuario).subscribe(res => {
      console.log(res);
      this.alert = "Usuario actualizado correctamente";
      this.showMessage = true;

      setTimeout(() => {
        this.showMessage = false;
      }, 1700);
      
    })
    setTimeout(() => {
      window.location.reload();
    }, 1700);
  }
}
