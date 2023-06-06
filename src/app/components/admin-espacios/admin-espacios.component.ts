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
    this.authService.crearEspacio(this.espacio)
    .subscribe(
      res => {
        console.log(res);
      },
      err => {console.log(err);
      }
    )
  }

  eliminarEspacio(id: any) {
    this.espacios.eliminarEspacio(id).subscribe(res => {
      console.log(res);
    },
    err => {
      console.log(err);
    });
  }
}
