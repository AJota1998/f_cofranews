import { Component, OnInit } from '@angular/core';
import { MENU_USUARIO_ADMIN, NavbarItem } from 'src/app/shared/components/navbar/model/navbar-item.model';
import { ExplorarService } from 'src/app/services/explorar.service';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.scss']
})
export class AdminUsuariosComponent implements OnInit {

  constructor(private usuarios: ExplorarService) {}
  menu_usuario_admin: NavbarItem[] = MENU_USUARIO_ADMIN;

  ngOnInit() {
      this.usuarios.getUsuarios().subscribe(res => {
        console.log(res);
      })
  }
}
