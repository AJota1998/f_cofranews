import { Component, OnInit } from '@angular/core';
import { MENU_USUARIO_ADMIN, NavbarItem } from 'src/app/shared/components/navbar/model/navbar-item.model';
import { ExplorarService } from 'src/app/services/explorar.service';

@Component({
  selector: 'app-admin-publicaciones',
  templateUrl: './admin-publicaciones.component.html',
  styleUrls: ['./admin-publicaciones.component.scss']
})
export class AdminPublicacionesComponent implements OnInit {

  constructor(private publicaciones: ExplorarService) {}
  menu_usuario_admin: NavbarItem[] = MENU_USUARIO_ADMIN;

  ngOnInit() {
    this.publicaciones.getPublicaciones().subscribe(res => {
      console.log(res);
    })
  }
}
