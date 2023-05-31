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

  ngOnInit() {
    this.colectivos.getColectivos().subscribe(res => {
      console.log(res);
      this.datos = res;
    })
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
  }

}
